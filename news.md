---
layout: default
title: News
permalink: /news/
description: Curated industry news, releases, case studies, and technical papers for metrology and quality software professionals.
---

# Industry News & Research Watch

This section curates relevant external updates for the metrology and quality software community.

What appears here:

- software releases and product updates,
- technical case studies,
- white papers and research on algorithms/methods,
- practical industry news from public sources.

**Important:** These are curated external items. Metrology Central does not claim authorship of the linked source material.

---

{% assign items = site.data.news | sort: 'date' | reverse %}
{% assign kinds = site.data.news | map: 'kind' | uniq %}

{% if items and items.size > 0 %}
  <div class="news-filters" role="group" aria-label="Filter news by type">
    <button class="news-filter-btn active" data-filter="all" type="button">All</button>
    {% for kind in kinds %}
      {% if kind %}
        <button class="news-filter-btn" data-filter="{{ kind }}" type="button">{{ kind | replace: '_', ' ' | replace: '-', ' ' | capitalize }}</button>
      {% endif %}
    {% endfor %}
  </div>

  <div class="post-list" id="news-list">
    {% for item in items %}
      <article class="post-preview news-item" data-kind="{{ item.kind | default: 'uncategorized' }}">
        <header>
          <h2><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a></h2>
          <p class="post-meta">
            <time datetime="{{ item.date }}">{{ item.date | date: "%B %-d, %Y" }}</time>
            {% if item.source %} · Source: {{ item.source }}{% endif %}
            {% if item.kind %} · {{ item.kind | replace: '_', ' ' | replace: '-', ' ' | capitalize }}{% endif %}
            <span class="source-policy-badge">External source</span>
          </p>
        </header>
        {% if item.summary %}
          <div class="excerpt">
            <p>{{ item.summary }}</p>
          </div>
        {% endif %}
        <a href="{{ item.url }}" class="read-more" target="_blank" rel="noopener">Read original source</a>
      </article>
    {% endfor %}
  </div>

  <script>
    (function () {
      const buttons = document.querySelectorAll('.news-filter-btn');
      const items = document.querySelectorAll('.news-item');
      if (!buttons.length || !items.length) return;

      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          buttons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          items.forEach((item) => {
            const kind = item.getAttribute('data-kind');
            item.style.display = (filter === 'all' || kind === filter) ? '' : 'none';
          });
        });
      });
    })();
  </script>
{% else %}
  <p>News curation is active. First batch will appear after the next scouting run.</p>
{% endif %}
