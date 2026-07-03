---
permalink: /projects/
title: "Projects"
excerpt: "Coding, data, and interactive projects."
author_profile: false
body_class: professional-page projects-page
---

<section class="pro-page" aria-labelledby="projects-title">
  <header class="pro-hero">
    <p class="pro-kicker">Projects</p>
    <h1 id="projects-title">Projects</h1>
    <p>{{ site.data.projects.intro }}</p>
  </header>

  <section class="pro-section pro-section--compact" aria-labelledby="project-focus">
    <div class="pro-section__label">
      <span>01</span>
      <h2 id="project-focus">Focus</h2>
    </div>
    <div class="pro-section__body">
      <p class="pro-focus-line">
        {% for area in site.data.projects.focusAreas %}
          <span>{{ area }}</span>{% unless forloop.last %}<span aria-hidden="true">·</span>{% endunless %}
        {% endfor %}
      </p>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="project-index">
    <div class="pro-section__label">
      <span>02</span>
      <h2 id="project-index">Featured Technical Work</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-project-index">
        {% for project in site.data.projects.featuredProjects %}
          <article class="pro-project pro-project--featured">
            <div class="pro-project__text">
              <p class="pro-entry__meta">{{ project.meta }}</p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <dl class="pro-facts">
                <div>
                  <dt>Problem</dt>
                  <dd>{{ project.problem }}</dd>
                </div>
                <div>
                  <dt>{{ project.builtLabel | default: "What I built" }}</dt>
                  <dd>{{ project.built }}</dd>
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

            {% if project.mediaImage %}
              <div class="pro-media pro-media--image" aria-label="{{ project.mediaLabel }}">
                <img src="{{ project.mediaImage | relative_url }}" alt="{{ project.mediaAlt }}" loading="lazy">
                <div class="pro-media__caption">
                  <span>{{ project.mediaLabel }}</span>
                  <p>{{ project.media }}</p>
                </div>
              </div>
            {% else %}
              <div class="pro-media" aria-label="{{ project.media }}">
                <span>{{ project.mediaLabel }}</span>
                <p>{{ project.media }}</p>
              </div>
            {% endif %}
          </article>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="pro-section" aria-labelledby="project-experiments">
    <div class="pro-section__label">
      <span>03</span>
      <h2 id="project-experiments">Smaller Experiments</h2>
    </div>
    <div class="pro-section__body">
      <div class="pro-experiment-index">
        {% for experiment in site.data.projects.smallerExperiments %}
          <article class="pro-experiment">
            <div>
              <p class="pro-entry__meta">{{ experiment.status }}</p>
              <h3>{{ experiment.title }}</h3>
              <p>{{ experiment.description }}</p>
            </div>
            {% if experiment.href %}
              <a href="{{ experiment.href }}">Notes <span aria-hidden="true">→</span></a>
            {% endif %}
          </article>
        {% endfor %}
      </div>
    </div>
  </section>
</section>
