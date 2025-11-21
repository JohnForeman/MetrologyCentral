const postsListEl = document.querySelector('#postsList');
const postsCountEl = document.querySelector('#postsCount');
const postForm = document.querySelector('#postForm');
const statusBadge = document.querySelector('#statusBadge');
const editorTitle = document.querySelector('#editorTitle');
const newPostBtn = document.querySelector('#newPostBtn');
const resetBtn = document.querySelector('#resetBtn');
const saveBtn = document.querySelector('#saveBtn');
const template = document.querySelector('#postItemTemplate');

const API_BASE = '/api';

const fields = {
  id: document.querySelector('#postId'),
  title: document.querySelector('#title'),
  date: document.querySelector('#date'),
  author: document.querySelector('#author'),
  categories: document.querySelector('#categories'),
  tags: document.querySelector('#tags'),
  content: document.querySelector('#content')
};

const state = {
  posts: [],
  loading: false,
  saving: false
};

async function fetchJSON (url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || (error.errors && error.errors.join(', ')) || res.statusText);
  }
  return res.json();
}

function setStatus (type, text) {
  statusBadge.textContent = text;
  statusBadge.className = `badge ${type}`;
}

function renderPosts () {
  postsListEl.innerHTML = '';
  postsCountEl.textContent = state.posts.length;
  state.posts.forEach((post) => {
    const node = template.content.cloneNode(true);
    node.querySelector('h3').textContent = post.title;
    node.querySelector('.meta').textContent = `${post.date || '—'} · ${post.categories.join(', ') || 'Uncategorized'}`;
    node.querySelector('.editBtn').addEventListener('click', () => loadPost(post.id));
    postsListEl.appendChild(node);
  });
}

async function loadPosts () {
  state.loading = true;
  setStatus('pending', 'Loading posts…');
  try {
    state.posts = await fetchJSON(`${API_BASE}/posts`);
    renderPosts();
    setStatus('idle', 'Ready');
  } catch (err) {
    console.error(err);
    setStatus('error', err.message);
  } finally {
    state.loading = false;
  }
}

function clearForm () {
  postForm.reset();
  fields.id.value = '';
  fields.author.value = 'John Foreman';
  editorTitle.textContent = 'Create Post';
  saveBtn.textContent = 'Create Post';
  setStatus('idle', 'Ready');
}

async function loadPost (id) {
  setStatus('pending', 'Loading post…');
  try {
    const post = await fetchJSON(`${API_BASE}/posts/${id}`);
    fields.id.value = post.id;
    fields.title.value = post.meta.title || '';
    fields.date.value = (post.meta.date || '').slice(0, 10);
    fields.author.value = post.meta.author || 'John Foreman';
    fields.categories.value = (post.meta.categories || []).join(', ');
    fields.tags.value = (post.meta.tags || []).join(', ');
    fields.content.value = post.content.trim();
    editorTitle.textContent = `Editing ${post.meta.title || post.id}`;
    saveBtn.textContent = 'Update Post';
    setStatus('idle', 'Loaded');
  } catch (err) {
    console.error(err);
    setStatus('error', err.message);
  }
}

async function handleSubmit (event) {
  event.preventDefault();
  if (state.saving) return;

  const payload = {
    id: fields.id.value,
    title: fields.title.value.trim(),
    date: fields.date.value,
    author: fields.author.value.trim(),
    categories: fields.categories.value,
    tags: fields.tags.value,
    content: fields.content.value
  };

  if (!payload.title || !payload.date || !payload.content) {
    setStatus('error', 'Title, date, and content are required');
    return;
  }

  const method = payload.id ? 'PUT' : 'POST';
  const url = payload.id ? `${API_BASE}/posts/${payload.id}` : `${API_BASE}/posts`;

  state.saving = true;
  setStatus('pending', payload.id ? 'Updating…' : 'Creating…');
  saveBtn.disabled = true;

  try {
    await fetchJSON(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    await loadPosts();
    if (!payload.id) {
      clearForm();
    }
    setStatus('success', 'Saved');
  } catch (err) {
    console.error(err);
    setStatus('error', err.message);
  } finally {
    state.saving = false;
    saveBtn.disabled = false;
  }
}

newPostBtn.addEventListener('click', clearForm);
resetBtn.addEventListener('click', clearForm);
postForm.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', () => {
  clearForm();
  loadPosts();
});

