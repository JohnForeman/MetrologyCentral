const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');
const express = require('express');
const cors = require('cors');
const matter = require('gray-matter');
const slugify = require('slugify');

const app = express();
const PORT = process.env.ADMIN_PORT || 5050;
const POSTS_DIR = path.resolve(__dirname, '..', '_posts');

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const filenameRegex = /^\d{4}-\d{2}-\d{2}-.+\.md$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

function assertPostsDir () {
  if (!fs.existsSync(POSTS_DIR)) {
    throw new Error(`Posts directory not found: ${POSTS_DIR}`);
  }
}

function normalizeCategories (categories) {
  if (Array.isArray(categories)) {
    return categories.map((c) => c.trim()).filter(Boolean);
  }
  if (typeof categories === 'string') {
    return categories.split(',').map((c) => c.trim()).filter(Boolean);
  }
  return [];
}

function buildFrontMatter (data) {
  const fm = [
    '---',
    `layout: ${data.layout || 'post'}`,
    `title: "${data.title.trim()}"`,
    `date: ${data.date}`,
    `author: ${data.author || 'John Foreman'}`,
    `categories: [${normalizeCategories(data.categories).join(', ')}]`
  ];
  if (data.tags) {
    fm.push(`tags: [${normalizeCategories(data.tags).join(', ')}]`);
  }
  fm.push('---', '', data.content.trimEnd(), '');
  return fm.join('\n');
}

function toPostSummary (fileName, data) {
  return {
    id: fileName.replace(/\.md$/, ''),
    fileName,
    title: data.data.title || '(Untitled)',
    date: data.data.date || null,
    author: data.data.author || '',
    categories: data.data.categories || [],
    tags: data.data.tags || [],
    excerpt: data.content.trim().slice(0, 240)
  };
}

async function listPosts () {
  assertPostsDir();
  const files = await fsp.readdir(POSTS_DIR);
  const markdownFiles = files.filter((file) => file.endsWith('.md') && filenameRegex.test(file));
  const posts = await Promise.all(
    markdownFiles.map(async (file) => {
      const fullPath = path.join(POSTS_DIR, file);
      const raw = await fsp.readFile(fullPath, 'utf8');
      return toPostSummary(file, matter(raw));
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function ensureSafeFilePath (fileName) {
  if (!filenameRegex.test(fileName)) {
    throw new Error('Invalid file name');
  }
  const resolved = path.resolve(POSTS_DIR, fileName);
  if (!resolved.startsWith(POSTS_DIR)) {
    throw new Error('Invalid path traversal attempt');
  }
  return resolved;
}

async function readPostById (id) {
  const fileName = id.endsWith('.md') ? id : `${id}.md`;
  const target = ensureSafeFilePath(fileName);
  const raw = await fsp.readFile(target, 'utf8');
  const parsed = matter(raw);
  return {
    id: fileName.replace(/\.md$/, ''),
    fileName,
    meta: parsed.data,
    content: parsed.content
  };
}

async function ensureUniqueFileName (date, baseSlug) {
  let slug = baseSlug;
  let candidate = `${date}-${slug}.md`;
  let counter = 1;
  while (fs.existsSync(path.join(POSTS_DIR, candidate))) {
    slug = `${baseSlug}-${counter}`;
    candidate = `${date}-${slug}.md`;
    counter += 1;
  }
  return candidate;
}

function validatePayload (body, { requireId = false } = {}) {
  const errors = [];
  if (!body.title || !body.title.trim()) {
    errors.push('Title is required');
  }
  if (!body.date || !dateRegex.test(body.date)) {
    errors.push('Date is required (YYYY-MM-DD)');
  }
  if (!body.content || !body.content.trim()) {
    errors.push('Content is required');
  }
  if (requireId && !body.id) {
    errors.push('Post id is required for updates');
  }
  return errors;
}

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await listPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await readPostById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const errors = validatePayload(req.body);
    if (errors.length) {
      return res.status(400).json({ errors });
    }

    const categories = normalizeCategories(req.body.categories);
    const tags = normalizeCategories(req.body.tags);
    const content = req.body.content;
    const slug = slugify(req.body.slug || req.body.title, {
      lower: true,
      strict: true
    });

    const fileName = await ensureUniqueFileName(req.body.date, slug);
    const filePath = path.join(POSTS_DIR, fileName);

    const fileContents = matter.stringify(content, {
      layout: 'post',
      title: req.body.title.trim(),
      date: req.body.date,
      author: req.body.author || 'John Foreman',
      categories,
      tags
    });

    await fsp.writeFile(filePath, fileContents, 'utf8');
    res.status(201).json({ message: 'Post created', id: fileName.replace(/\.md$/, '') });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    const errors = validatePayload(req.body, { requireId: true });
    if (errors.length) {
      return res.status(400).json({ errors });
    }

    const fileName = req.params.id.endsWith('.md') ? req.params.id : `${req.params.id}.md`;
    const targetPath = ensureSafeFilePath(fileName);
    if (!fs.existsSync(targetPath)) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const categories = normalizeCategories(req.body.categories);
    const tags = normalizeCategories(req.body.tags);

    const fileContents = matter.stringify(req.body.content, {
      layout: req.body.layout || 'post',
      title: req.body.title.trim(),
      date: req.body.date,
      author: req.body.author || 'John Foreman',
      categories,
      tags
    });

    await fsp.writeFile(targetPath, fileContents, 'utf8');
    res.json({ message: 'Post updated', id: fileName.replace(/\.md$/, '') });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Admin UI available at http://localhost:${PORT}`);
});

