---
layout: default
title: Blog
permalink: /blog/
---

<div class="home-hero">
  <h1>Latest Insights on Metrology</h1>
  <p class="lead">Practical knowledge, real-world case studies, and technical guides from the field of dimensional metrology and quality systems.</p>
</div>

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-preview">
      <header>
        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
          {% if post.categories.size > 0 %}
            <span class="categories">
              {% for category in post.categories %}
                <span class="category">{{ category }}</span>
              {% endfor %}
            </span>
          {% endif %}
        </p>
      </header>
      {% if post.excerpt %}
        <div class="excerpt">
          {{ post.excerpt }}
        </div>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">Read more</a>
    </article>
  {% endfor %}
</div>

