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

<section class="academic-hero" id="now" aria-labelledby="hero-name">
  {% include site-header.html %}

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

      <figure class="academic-hero__portrait">
        <img
          src="/images/Chen%20Peiyu_cropped.jpg"
          alt="Portrait of Peiyu Chen"
          width="1479"
          height="1479"
          loading="eager"
          decoding="async"
        >
      </figure>

      <div class="academic-hero__meta" aria-label="Current position and research focus">
        <div class="academic-hero__position">
          <p>Research Professional</p>
          <p>Booth School of Business, The University of Chicago</p>
        </div>
        <br>
        <p class="academic-hero__research">
          I study how AI systems shape human trust, judgment, and decision-making. Drawing on human–AI interaction, behavioral science, and technology governance, I design and evaluate interventions that help people understand, question, and use AI in more transparent and socially aware ways.
        </p>
      </div>
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
      <h2 id="questions-title">A Line of Inquiry</h2>
      <p>
        Across my research, writing, and technical work, I keep returning to three connected questions: how systems become legible, how they shape judgment, and how they can be directed toward public value.
      </p>
    </div>

    <div class="questions-section__list" aria-label="Research questions">
      <article class="question-item">
        <p class="question-item__number">01</p>
        <div class="question-item__content">
          <h3>What makes AI systems understandable to the people expected to use them?</h3>
          <p>
            Explanation is not just a technical feature. I am interested in what people need to see, compare, and question before an intelligent system becomes something they can actually use.
          </p>
        </div>
      </article>

      <article class="question-item">
        <p class="question-item__number">02</p>
        <div class="question-item__content">
          <h3>How does AI change the way people judge and decide?</h3>
          <p>
            Intelligent systems do not only produce answers; they change the conditions under which people form confidence, defer to expertise, notice uncertainty, and take responsibility for a choice.
          </p>
        </div>
      </article>

      <article class="question-item">
        <p class="question-item__number">03</p>
        <div class="question-item__content">
          <h3>How can emerging technologies be designed and governed for public value?</h3>
          <p>
            I am interested in what happens after technologies leave the lab: how they enter institutions, redistribute responsibility, and become part of public communication, access, and accountability.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

{% include selected-work-section.html %}

{% include formation-section.html %}

{% include returning-section.html %}
