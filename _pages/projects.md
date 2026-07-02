---
permalink: /projects/
title: "Projects"
excerpt: "Coding, data, and interactive projects."
author_profile: false
body_class: professional-page
---

<section class="pro-page" aria-labelledby="projects-title">
  <header class="pro-hero">
    <p class="pro-kicker">Projects</p>
    <h1 id="projects-title">Projects</h1>
    <p>{{ site.data.projects.intro }}</p>
  </header>

  <section class="pro-section" aria-labelledby="project-categories">
    <div class="pro-section__label">
      <span>01</span>
      <h2 id="project-categories">Project Categories</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-inline-list">
        {% for category in site.data.projects.categories %}
          <span>{{ category }}</span>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="project-index">
    <div class="pro-section__label">
      <span>02</span>
      <h2 id="project-index">Selected Technical Work</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-project-index">
        {% for project in site.data.projects.items %}
          <article class="pro-project">
            <div class="pro-project__text">
              <p class="pro-entry__meta">{{ project.category }} · {{ project.year }} · {{ project.status }}</p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <dl class="pro-facts">
                <div>
                  <dt>Problem</dt>
                  <dd>{{ project.problem }}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{{ project.stack }}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{{ project.role }}</dd>
                </div>
              </dl>
              <div class="pro-links">
                {% for link in project.links %}
                  <a href="{{ link.href }}">{{ link.label }} <span aria-hidden="true">→</span></a>
                {% endfor %}
              </div>
            </div>
            <div class="pro-media" aria-label="{{ project.media }}">
              <span>Media placeholder</span>
              <p>{{ project.media }}</p>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>
</section>
