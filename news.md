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

<div class="news-filters" role="navigation" aria-label="Jump to news category">
  <a class="news-filter-btn" href="#ev-manufacturing">EV Manufacturing</a>
  <a class="news-filter-btn" href="#auto-manufacturing">Auto Manufacturing</a>
  <a class="news-filter-btn" href="#aerospace-defense-manufacturing">Aerospace & Defense</a>
  <a class="news-filter-btn" href="#quality-software">Quality Software</a>
  <a class="news-filter-btn" href="#scientific-metrology">Scientific Metrology</a>
</div>

{% assign items = site.data.news | sort: 'date' | reverse %}
{% assign ev_items = items | where: 'sector', 'ev_manufacturing' %}
{% assign auto_items = items | where: 'sector', 'auto_manufacturing' %}
{% assign aero_items = items | where: 'sector', 'aerospace_defense_manufacturing' %}
{% assign quality_items = items | where: 'sector', 'quality_software' %}
{% assign science_items = items | where: 'sector', 'scientific_metrology' %}

{% if ev_items and ev_items.size > 0 %}
  <section id="ev-manufacturing" class="news-category-section">
    <h2>EV Manufacturing (Global)</h2>
    <p class="post-meta">Coverage includes China, North America, Europe, and other active EV manufacturing regions.</p>
    <div class="post-list" id="news-list-ev">
      {% for item in ev_items %}
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
          {% if item.summary %}<div class="excerpt"><p>{{ item.summary }}</p></div>{% endif %}
          <a href="{{ item.url }}" class="read-more" target="_blank" rel="noopener">Read original source</a>
        </article>
      {% endfor %}
    </div>
  </section>
{% endif %}

{% if auto_items and auto_items.size > 0 %}
  <section id="auto-manufacturing" class="news-category-section">
    <h2>Auto Manufacturing (Non-EV Focus)</h2>
    <div class="post-list" id="news-list-auto">
      {% for item in auto_items %}
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
          {% if item.summary %}<div class="excerpt"><p>{{ item.summary }}</p></div>{% endif %}
          <a href="{{ item.url }}" class="read-more" target="_blank" rel="noopener">Read original source</a>
        </article>
      {% endfor %}
    </div>
  </section>
{% endif %}

{% if aero_items and aero_items.size > 0 %}
  <section id="aerospace-defense-manufacturing" class="news-category-section">
    <h2>Aerospace & Defense Manufacturing (Global)</h2>
    <div class="post-list" id="news-list-aero">
      {% for item in aero_items %}
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
          {% if item.summary %}<div class="excerpt"><p>{{ item.summary }}</p></div>{% endif %}
          <a href="{{ item.url }}" class="read-more" target="_blank" rel="noopener">Read original source</a>
        </article>
      {% endfor %}
    </div>
  </section>
{% endif %}

{% if quality_items and quality_items.size > 0 %}
  <section id="quality-software" class="news-category-section">
    <h2>Quality Software</h2>
    <div class="post-list" id="news-list-quality">
      {% for item in quality_items %}
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
          {% if item.summary %}<div class="excerpt"><p>{{ item.summary }}</p></div>{% endif %}
          <a href="{{ item.url }}" class="read-more" target="_blank" rel="noopener">Read original source</a>
        </article>
      {% endfor %}
    </div>
  </section>
{% endif %}

{% if science_items and science_items.size > 0 %}
  <section id="scientific-metrology" class="news-category-section">
    <h2>Scientific Metrology</h2>
    <div class="post-list" id="news-list-science">
      {% for item in science_items %}
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
          {% if item.summary %}<div class="excerpt"><p>{{ item.summary }}</p></div>{% endif %}
          <a href="{{ item.url }}" class="read-more" target="_blank" rel="noopener">Read original source</a>
        </article>
      {% endfor %}
    </div>
  </section>
{% endif %}
