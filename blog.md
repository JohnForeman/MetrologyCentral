---
layout: default
title: Blog
permalink: /blog/
description: Articles and case studies on dimensional metrology, CMM validation, and modern manufacturing quality systems.
---

<div class="home-hero">
  <h1>Latest Insights on Metrology</h1>
  <p class="lead">Practical knowledge, real-world case studies, and technical guides from the field of dimensional metrology and quality systems.</p>
</div>

{% include adsense-unit.html slot=site.adsense.slots.blog_header class='adsense-blog' %}

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-preview">
      <header>
        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <p class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
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

