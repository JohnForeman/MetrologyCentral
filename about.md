---
layout: default
title: About John Foreman
permalink: /about/
---

<div class="about-hero">
  <h1>John Foreman</h1>
  <p class="tagline">{{ site.author.tagline }}</p>
</div>

<div class="about-section">
  <div class="about-intro">
    <div class="headshot">
      {% if site.author.image %}
      <img src="{{ site.author.image | relative_url }}" alt="{{ site.author.name }}">
      {% else %}
      <img src="{{ '/assets/images/author-placeholder.jpg' | relative_url }}" alt="{{ site.author.name }}">
      {% endif %}
    </div>
    <div class="bio">
      <h2>{{ site.author.name }}</h2>
      <p class="title">{{ site.author.title }}</p>
      <p>Welcome to <strong>Metrology Central</strong>, where I share insights, lessons learned, and practical knowledge from years of working in dimensional metrology and quality systems across manufacturing environments.</p>
      <p>My passion is turning complex measurement data into actionable manufacturing certainty—helping quality professionals, inspectors, and engineers get the most from their metrology systems and processes.</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2>Professional Journey</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h3>Senior Application Engineer</h3>
      <p class="year">Present</p>
      <p>Specializing in CMM programming, metrology software implementation, and quality system optimization for manufacturing clients across aerospace, automotive, and precision industries.</p>
    </div>
    <div class="timeline-item">
      <h3>Quality Systems & Metrology Expertise</h3>
      <p class="year">2015 - Present</p>
      <p>Deep hands-on experience with coordinate measuring machines (CMMs), laser scanners, optical systems, and portable metrology devices. Developed inspection programs, trained teams, and implemented MBD/QIF workflows.</p>
    </div>
    <div class="timeline-item">
      <h3>Education & Foundations</h3>
      <p class="year">Earlier Years</p>
      <p>Built foundational expertise in dimensional metrology, GD&T, statistical process control, and quality management systems—combining academic knowledge with real-world manufacturing challenges.</p>
    </div>
  </div>
</div>

<div class="about-section">
  <h2>What This Blog is For</h2>
  <p><strong>Metrology Central</strong> exists to serve quality engineers, inspectors, metrology professionals, and manufacturing teams who work with measurement technologies every day.</p>
  
  <h3>My Goal</h3>
  <p>To share practical insights from the field—case studies, troubleshooting tips, best practices, and lessons learned that you won't find in equipment manuals or training courses.</p>
  
  <h3>Topics I Cover</h3>
  <ul>
    <li><strong>CMM Programming:</strong> Techniques, tips, and real-world problem-solving for PC-DMIS, Calypso, and other platforms</li>
    <li><strong>Warpage, Fixture Flex & Measurement Uncertainty:</strong> Understanding and managing the variables that affect measurement accuracy</li>
    <li><strong>MBD & QIF:</strong> Model-Based Definition workflows and Quality Information Framework implementation</li>
    <li><strong>Quality Systems:</strong> Digital transformation, automation, and process optimization in quality departments</li>
    <li><strong>Metrology Technologies:</strong> CMMs, laser scanners, optical systems, portable arms, and emerging technologies</li>
  </ul>
</div>

<div class="about-section">
  <h2>The Name: "I Learned About Metrology From That"</h2>
  <p>Every problem is a learning opportunity. Every measurement challenge teaches something new. This blog's spirit comes from the idea that real expertise is built through experience—both successes and failures.</p>
  <p>If you've ever debugged a wayward CMM program at 2 AM, wrestled with part fixturing issues, or discovered a measurement uncertainty you didn't expect, you know exactly what I mean.</p>
</div>

<div class="about-section">
  <h2>Connect With Me</h2>
  <p>I'm always interested in connecting with fellow metrology professionals, quality engineers, and anyone passionate about precision manufacturing.</p>
  
  <div class="author-social" style="margin-top: 20px;">
    {% if site.author.linkedin %}
    <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>
    {% endif %}
    {% if site.author.github %}
    <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a>
    {% endif %}
    {% if site.author.email %}
    <a href="mailto:{{ site.author.email }}">Email Me</a>
    {% endif %}
    <a href="{{ '/contact/' | relative_url }}">Contact Form</a>
  </div>
  
  <p style="margin-top: 30px; font-size: 0.95em; color: var(--text-light);">
    <strong>For Press/Media:</strong> If you need a downloadable headshot, bio, or would like to discuss speaking opportunities or podcast appearances, please reach out via the <a href="{{ '/contact/' | relative_url }}">contact page</a>.
  </p>
</div>

---

<p style="text-align: center; color: var(--text-light); font-size: 0.9em;">
  <strong>Metrology Central</strong> is hosted on <a href="https://pages.github.com/">GitHub Pages</a> and maintained as a resource for the metrology and quality community.
</p>

