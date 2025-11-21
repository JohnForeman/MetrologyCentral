---
layout: default
title: Contact
permalink: /contact/
description: Get in touch with John Foreman at Metrology Central for metrology questions, collaboration ideas, and consulting inquiries.
---

<div class="contact-page">
  <section class="contact-hero">
    <div class="contact-hero-content">
      <p class="eyebrow">Let's Connect</p>
      <h1>Talk Metrology, Quality, or Collaboration</h1>
      <p>If you're working through a measurement challenge, planning a digital quality initiative, or want a second set of eyes on a CMM program, I’m happy to help. Fill out the form below or reach me directly—I'll follow up within one business day.</p>
      <div class="contact-meta">
        <span><strong>Email:</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></span>
        <span><strong>Response time:</strong> 1 business day</span>
        <span><strong>Location:</strong> Eastern Time (US)</span>
      </div>
      {% if site.author.linkedin and site.author.linkedin != "#" %}
      <div class="contact-hero-ctas">
        <a class="btn btn-ghost" href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">Connect on LinkedIn</a>
      </div>
      {% endif %}
    </div>
  </section>

  <section class="contact-grid">
    <article class="contact-card">
      <h2>Speaking & Media</h2>
      <p>I'm available for podcasts, webinars, lunch-and-learns, or internal training sessions focused on dimensional metrology and modern quality systems.</p>
      <ul>
        <li>Technical interviews & AMAs</li>
        <li>Conference or user group talks</li>
        <li>Guest articles & joint research</li>
      </ul>
    </article>

    <article class="contact-card">
      <h2>Reader Questions</h2>
      <p>Have a follow-up on a blog post or a tricky measurement scenario you’d like to unpack? Send the part context, inspection goals, and where you're stuck.</p>
      <ul>
        <li>Fixture strategy & uncertainty checks</li>
        <li>Data storytelling & reporting</li>
        <li>Software configuration tips</li>
      </ul>
    </article>
  </section>
</div>

