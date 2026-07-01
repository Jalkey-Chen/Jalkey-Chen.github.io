---
permalink: /
title: ""
excerpt: ""
author_profile: true
body_class: home-landing
last_updated: 2026-07-01
page_scripts:
  - /assets/js/about-panels.js
  - /assets/js/project-modals.js
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<section class="academic-hero" aria-labelledby="hero-name">
  <header class="academic-hero__nav" aria-label="Primary">
    <a class="academic-hero__brand" href="/">Peiyu Chen</a>
    <nav class="academic-hero__links">
      <a href="/#questions">Research</a>
      <a href="/#selected-work">Work</a>
      <a href="/#formation">Formation</a>
      <a href="/assets/files/cv_peiyu_chen.pdf">CV</a>
    </nav>
  </header>

  <div class="academic-hero__chapter" aria-label="Chapter 01, Now">
    <span>Chapter 01</span>
    <span>Now</span>
  </div>

  <div class="academic-hero__inner">
    <p class="academic-hero__statement" id="hero-statement">
      I study the human questions behind technological change.
    </p>

    <div class="academic-hero__identity">
      <h1 id="hero-name">Peiyu Chen</h1>

      <div class="academic-hero__meta" aria-label="Current position and research focus">
        <div class="academic-hero__position">
          <p>Research Professional</p>
          <p>Booth School of Business, The University of Chicago</p>
        </div>
        <br>
        <p class="academic-hero__research">
          I study how AI systems shape human trust, judgment, and decision-making. Drawing on human–AI interaction, behavioral economics, and technology governance, I design and evaluate interventions that help people understand, question, and use AI in more transparent and socially aware ways.
        </p>
      </div>
    </div>

    <div class="academic-hero__actions" aria-label="Quick links">
      <a href="/#returning">Current Notes <span aria-hidden="true">→</span></a>
      <a href="/#selected-work">Selected Work <span aria-hidden="true">→</span></a>
      <a href="/assets/files/cv_peiyu_chen.pdf">Download CV <span aria-hidden="true">↓</span></a>
    </div>
  </div>

  <a class="academic-hero__scroll" href="#questions" aria-label="Scroll to questions"></a>
</section>

<section class="questions-section" id="questions" aria-labelledby="questions-title">
  <div class="questions-section__chapter" aria-label="Chapter 02, Questions I'm Exploring">
    <span>Chapter 02</span>
    <span>Questions I&rsquo;m Exploring</span>
  </div>

  <div class="questions-section__inner">
    <div class="questions-section__lede">
      <h2 id="questions-title">What connects the work</h2>
      <p>
        Across my research and writing, I&rsquo;m drawn to questions about how technologies become understandable, how they shape human judgment, and how they can create public value.
      </p>
    </div>

    <div class="questions-section__list" aria-label="Research questions">
      <article class="question-item">
        <p class="question-item__number">01</p>
        <div class="question-item__content">
          <h3>How can intelligent systems become understandable?</h3>
          <p>
            From patient-facing medical AI to public communication, I&rsquo;m interested in how complex systems can be explained in ways people can actually use, question, and trust.
          </p>
          <div class="question-item__related" aria-label="Related work">
            <span class="question-item__related-label">Related work</span>
            <span>Clarity</span>
            <span>Medical AI</span>
            <span>Public Communication</span>
          </div>
        </div>
      </article>

      <article class="question-item">
        <p class="question-item__number">02</p>
        <div class="question-item__content">
          <h3>How does technology reshape human judgment and decision-making?</h3>
          <p>
            I study how new tools, interfaces, and institutions affect how people evaluate information, make choices, and understand responsibility.
          </p>
          <div class="question-item__related" aria-label="Related work">
            <span class="question-item__related-label">Related work</span>
            <span>Human&ndash;AI Interaction</span>
            <span>Behavioral Economics</span>
            <span>Experiments</span>
          </div>
        </div>
      </article>

      <article class="question-item">
        <p class="question-item__number">03</p>
        <div class="question-item__content">
          <h3>How can emerging technologies create public value?</h3>
          <p>
            I follow the policy and governance questions that appear when technologies move from labs and firms into healthcare, education, public institutions, and everyday life.
          </p>
          <div class="question-item__related" aria-label="Related work">
            <span class="question-item__related-label">Related work</span>
            <span>AI Governance</span>
            <span>Digital Policy</span>
            <span>Public Writing</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

{% include selected-work-section.html %}

{% include formation-section.html %}

{% include returning-section.html %}
