---
permalink: /photography/
title: "Photography"
excerpt: "Photography gallery by Peiyu Chen."
layout: gallery
author_profile: false
---

<section class="photo-gallery-page">
  <header class="gallery-hero">
    <p class="gallery-name">Peiyu Chen</p>
    <p class="gallery-name-zh">陈沛羽</p>
  </header>

  <div class="masonry-gallery">
    <figure class="photo-item">
      <img src="/images/photography/“五星出东方利中国”锦护膊.png" alt="Wuxing Brocade" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/异域星球_叶风.png" alt="Alien Planet" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/在草地上起舞.jpg" alt="Dance on the Meadow" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/登山时刻.jpg" alt="Uphill" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/落日剪影.jpg" alt="Silhouettes at Dusk" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/6号火山.jpg" alt="Volcano No. 6" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/黄洮交汇.jpg" alt="Where Rivers Meet" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/银河1.jpg" alt="Milky Way" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/颐和园.jpg" alt="Snowfall at the Summer Palace" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/落日下的大本钟.JPG" alt="Big Ben at Sundown" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/林中树桩.jpg" alt="Stillness in the Forest" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/码头与公园.jpg" alt="Sails and Seasons" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/湖中建筑.jpg" alt="Observation Point" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/湖边与路.jpg" alt="Streets Toward Water" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/长眠.jpg" alt="Rest by the Ocean" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/帆船与海.jpg" alt="Twilight Anchor" loading="lazy">
    </figure>
    <figure class="photo-item">
      <img src="/images/photography/草地.jpg" alt="Joy in the Wind" loading="lazy">
    </figure>
  </div>
</section>

<style>
body.gallery-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 20%, rgba(129, 140, 248, 0.18), transparent 24%),
    radial-gradient(circle at 82% 16%, rgba(56, 189, 248, 0.16), transparent 20%),
    radial-gradient(circle at 70% 72%, rgba(244, 114, 182, 0.14), transparent 22%),
    linear-gradient(180deg, #06070d 0%, #0d111c 46%, #121825 100%);
  color: #f3f4f6;
  overflow-x: hidden;
}

body.gallery-page::before,
body.gallery-page::after {
  content: "";
  position: fixed;
  inset: auto;
  width: 42rem;
  height: 42rem;
  border-radius: 999px;
  filter: blur(70px);
  opacity: 0.22;
  pointer-events: none;
  z-index: 0;
}

body.gallery-page::before {
  top: -10rem;
  left: -8rem;
  background: linear-gradient(135deg, #8b5cf6, #22d3ee);
  animation: drift-a 18s ease-in-out infinite alternate;
}

body.gallery-page::after {
  right: -10rem;
  bottom: -12rem;
  background: linear-gradient(135deg, #fb7185, #f59e0b);
  animation: drift-b 22s ease-in-out infinite alternate;
}

.gallery-shell {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4.5rem 1.5rem 3rem;
}

.gallery-stage {
  position: relative;
}

.photo-gallery-page {
  position: relative;
}

.gallery-hero {
  margin: 0 auto 2.5rem;
  text-align: center;
}

.gallery-name {
  margin: 0;
  font-size: clamp(2.6rem, 7vw, 5.6rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f8fafc;
  text-shadow: 0 0 28px rgba(255, 255, 255, 0.08);
}

.gallery-name-zh {
  margin: 0.4rem 0 0;
  font-size: clamp(1rem, 2vw, 1.3rem);
  letter-spacing: 0.35em;
  color: rgba(226, 232, 240, 0.78);
}

.masonry-gallery {
  column-count: 4;
  column-gap: 1.25rem;
}

.photo-item {
  position: relative;
  break-inside: avoid;
  margin: 0 0 1.25rem;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.34),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;
}

.photo-item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.04) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-item img {
  display: block;
  width: 100%;
  filter: saturate(0.96) contrast(1.03);
  transition: transform 0.45s ease, filter 0.45s ease;
}

.photo-item:nth-child(4n + 1) {
  transform: rotate(-0.8deg);
}

.photo-item:nth-child(4n + 3) {
  transform: rotate(0.9deg);
}

.photo-item:hover {
  border-color: rgba(255, 255, 255, 0.16);
}

.photo-item:hover::after {
  opacity: 1;
}

.photo-item:hover img {
  transform: scale(1.025);
  filter: saturate(1.06) contrast(1.05);
}

@keyframes drift-a {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(5rem, 4rem, 0);
  }
}

@keyframes drift-b {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-4rem, -3rem, 0);
  }
}

@media (max-width: 1024px) {
  .masonry-gallery {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .gallery-shell {
    padding-top: 3rem;
  }

  .masonry-gallery {
    column-count: 2;
    column-gap: 1rem;
  }
}

@media (max-width: 520px) {
  .masonry-gallery {
    column-count: 1;
  }

  .gallery-name-zh {
    letter-spacing: 0.22em;
  }
}
</style>
