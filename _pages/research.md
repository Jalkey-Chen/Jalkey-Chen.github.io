---
permalink: /research/
title: "Research"
excerpt: "Research profile, projects, methods, and working papers."
author_profile: false
body_class: professional-page
---

<section class="pro-page" aria-labelledby="research-title">
  <header class="pro-hero">
    <p class="pro-kicker">Research</p>
    <h1 id="research-title">Research</h1>
    <p>{{ site.data.research.intro }}</p>
  </header>

  <section class="pro-section pro-section--overview" aria-labelledby="research-overview">
    <div class="pro-section__label">
      <span>01</span>
      <h2 id="research-overview">Research Overview</h2>
    </div>
    <div class="pro-section__body">
      <p class="pro-lede">{{ site.data.research.intro }}</p>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="research-areas">
    <div class="pro-section__label">
      <span>02</span>
      <h2 id="research-areas">Research Areas</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-compact-grid">
        {% for area in site.data.research.areas %}
          <p>{{ area }}</p>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="research-questions">
    <div class="pro-section__label">
      <span>03</span>
      <h2 id="research-questions">Current Research Questions</h2>
    </div>
    <div class="pro-section__body">
      <ol class="pro-question-list">
        {% for question in site.data.research.questions %}
          <li>{{ question }}</li>
        {% endfor %}
      </ol>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="research-projects">
    <div class="pro-section__label">
      <span>04</span>
      <h2 id="research-projects">Selected Research Projects</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-entry-list">
        {% for project in site.data.research.projects %}
          <article class="pro-entry">
            <div class="pro-entry__meta">{{ project.status }}</div>
            <h3>{{ project.title }}</h3>
            <p class="pro-entry__question">{{ project.question }}</p>
            <dl class="pro-facts">
              <div>
                <dt>Methods</dt>
                <dd>{{ project.methods }}</dd>
              </div>
              <div>
                <dt>Affiliation</dt>
                <dd>{{ project.affiliation }}</dd>
              </div>
            </dl>
            <p>{{ project.abstract }}</p>
            {% if project.links %}
              <div class="pro-links">
                {% for link in project.links %}
                  <a href="{{ link.href }}">{{ link.label }} <span aria-hidden="true">→</span></a>
                {% endfor %}
              </div>
            {% endif %}
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="publications">
    <div class="pro-section__label">
      <span>05</span>
      <h2 id="publications">Working Papers / Publications</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-entry-list pro-entry-list--compact">
        {% for publication in site.data.research.publications %}
          <article class="pro-entry">
            <div class="pro-entry__meta">{{ publication.status }} · {{ publication.venue }} · {{ publication.year }}</div>
            <h3>{{ publication.title }}</h3>
            <p class="pro-authors">{{ publication.authors }}</p>
            <p>{{ publication.note }}</p>
            <div class="pro-links">
              <a href="{{ publication.link }}">Read note <span aria-hidden="true">→</span></a>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="methods">
    <div class="pro-section__label">
      <span>06</span>
      <h2 id="methods">Methods / Tools</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-inline-list">
        {% for method in site.data.research.methods %}
          <span>{{ method }}</span>
        {% endfor %}
      </div>
      <div class="pro-links pro-links--footer">
        {% for link in site.data.research.links %}
          <a href="{{ link.href }}">{{ link.label }} <span aria-hidden="true">→</span></a>
        {% endfor %}
      </div>
    </div>
  </section>
</section>
