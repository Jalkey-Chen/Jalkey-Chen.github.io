---
permalink: /civic/
title: "Civic"
excerpt: "Civic work, public engagement, and community activities."
author_profile: false
body_class: professional-page
---

<section class="pro-page" aria-labelledby="civic-title">
  <header class="pro-hero">
    <p class="pro-kicker">Civic</p>
    <h1 id="civic-title">Civic Life</h1>
    <p>{{ site.data.civic.intro }}</p>
  </header>

  <section class="pro-section" aria-labelledby="featured-civic">
    <div class="pro-section__label">
      <span>01</span>
      <h2 id="featured-civic">Featured Activities</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-project-index">
        {% for activity in site.data.civic.featured %}
          <article class="pro-project pro-project--civic">
            <div class="pro-project__text">
              <p class="pro-entry__meta">{{ activity.role }} · {{ activity.year }} · {{ activity.location }}</p>
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.description }}</p>
              <div class="pro-links">
                {% for link in activity.links %}
                  <a href="{{ link.href }}">{{ link.label }} <span aria-hidden="true">→</span></a>
                {% endfor %}
              </div>
            </div>
            <div class="pro-media" aria-label="{{ activity.media }}">
              <span>Media placeholder</span>
              <p>{{ activity.media }}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="activity-categories">
    <div class="pro-section__label">
      <span>02</span>
      <h2 id="activity-categories">Activity Categories</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-inline-list">
        {% for category in site.data.civic.categories %}
          <span>{{ category }}</span>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="civic-archive">
    <div class="pro-section__label">
      <span>03</span>
      <h2 id="civic-archive">Full Archive</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-table" role="list">
        {% for item in site.data.civic.archive %}
          <a class="pro-table__row" href="{{ item.href }}" role="listitem">
            <span>{{ item.year }}</span>
            <strong>{{ item.title }}</strong>
            <span>{{ item.role }}</span>
            <span>{{ item.organization }}</span>
          </a>
        {% endfor %}
      </div>
    </div>
  </section>
</section>
