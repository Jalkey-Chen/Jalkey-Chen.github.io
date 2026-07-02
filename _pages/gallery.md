---
permalink: /gallery/
title: "Gallery"
excerpt: "Selected visual notes, photo essays, and small exhibitions."
author_profile: false
body_class: professional-page
---

<section class="pro-page" aria-labelledby="gallery-title">
  <header class="pro-hero">
    <p class="pro-kicker">Gallery</p>
    <h1 id="gallery-title">Gallery</h1>
    <p>{{ site.data.gallery.intro }}</p>
  </header>

  <section class="pro-section" aria-labelledby="featured-series">
    <div class="pro-section__label">
      <span>01</span>
      <h2 id="featured-series">Featured Series</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-series-list">
        {% for series in site.data.gallery.series %}
          <article class="pro-series">
            <div class="pro-series__header">
              <p class="pro-entry__meta">{{ series.year }} · {{ series.location }}</p>
              <h3>{{ series.title }}</h3>
              <p>{{ series.note }}</p>
              <div class="pro-links">
                <a href="{{ series.href }}">Open series <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div class="pro-gallery-grid">
              {% for image in series.images %}
                <div class="pro-photo-placeholder" role="img" aria-label="{{ image.caption }}">
                  <span>Photo placeholder</span>
                  <p>{{ image.caption }}</p>
                </div>
              {% endfor %}
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="exhibition-index">
    <div class="pro-section__label">
      <span>02</span>
      <h2 id="exhibition-index">Exhibition Index</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-table" role="list">
        {% for item in site.data.gallery.index %}
          <a class="pro-table__row" href="{{ item.href }}" role="listitem">
            <span>{{ item.year }}</span>
            <strong>{{ item.title }}</strong>
            <span>{{ item.status }}</span>
          </a>
        {% endfor %}
      </div>
      <div class="pro-links pro-links--footer">
        <a href="/photography/">Older photography page <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
</section>
