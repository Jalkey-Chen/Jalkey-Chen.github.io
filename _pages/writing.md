---
permalink: /writing/
title: "Writing"
excerpt: "Essays, commentary, and notes."
author_profile: false
body_class: professional-page
---

<section class="pro-page" aria-labelledby="writing-title">
  <header class="pro-hero">
    <p class="pro-kicker">Writing</p>
    <h1 id="writing-title">Writing</h1>
    <p>{{ site.data.writing.intro }}</p>
  </header>

  <section class="pro-section" aria-labelledby="writing-categories">
    <div class="pro-section__label">
      <span>01</span>
      <h2 id="writing-categories">Categories</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-inline-list">
        {% for category in site.data.writing.categories %}
          <span>{{ category }}</span>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="writing-archive">
    <div class="pro-section__label">
      <span>02</span>
      <h2 id="writing-archive">Archive</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-writing-grid">
        {% for post in site.data.writing.posts %}
          <article class="pro-writing-card">
            <p class="pro-entry__meta">{{ post.category }} · {{ post.type }} · {{ post.status }}</p>
            <h3>{{ post.title }}</h3>
            <p>{{ post.dek }}</p>
            <div class="pro-links">
              <a href="{{ post.href }}">Read <span aria-hidden="true">→</span></a>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>
</section>
