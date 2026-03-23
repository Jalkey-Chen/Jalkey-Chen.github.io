---
permalink: /
title: ""
excerpt: ""
author_profile: true
last_updated: 2026-03-16
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

<span class='anchor' id='about-me'></span>

Hi! I'm Peiyu Chen (pronounced like *Pay-yoo Chuhn*), currently a second year MS student at the University of Chicago majoring in **computer science and public policy**. I'm interested in **human–AI interaction**, especially how algorithmic systems shape human judgment and decision-making. My work explores the design of interventions that promote more **equitable, transparent, and socially aware** uses of AI in everyday life.

I completed my undergraduate studies at the [Maxdo College (瀚德学院)](https://bs.bnu.edu.cn/maxdo/AboutUs/hs/index.html) and [Business School](https://bs.bnu.edu.cn/englishversion/) of Beijing Normal University with a dual bachelor's degree in Economics and Spanish, where I was advised by Prof. [Haoran He (何浩然)](https://bs.bnu.edu.cn/englishversion/facultyresearch/fulltimefaculty/azmsy/119708.html) and Prof. [Lancui Liu (刘兰翠)](https://bs.bnu.edu.cn/englishversion/facultyresearch/fulltimefaculty/azmsy/211965.html). My research focused on how to use behavioral interventions—particularly nudges—to help people make better decisions.

I'm serving as a Junior Research Fellow at the [World Institute of Politics, Economy and Technology](https://wpet.org.cn/)<img src='./images/wpet.png' alt='WPET' loading='lazy' style='width: 5em;'>, with a research focus on international policy frameworks for AI and data governance. Recently, I also joined the [Oxford Computational Political Science Group](https://www.politics.ox.ac.uk/oxford-computational-political-science-group)<img src='./images/OCPSG.png' alt='OCPSG' loading='lazy' style='width: 6em;'> at the University of Oxford as a Research Associate, where I work with [Maria Milosh](https://maria-milosh.github.io/index.html) and [Metagov](https://metagov.org/) on AI-mediated deliberation to study how exposure to others’ reasoning shapes preferences, group sensemaking, and collective decision-making.

I'm an amateur photographer. If you're interested, you can explore my photography work through the **Photography** button in the top navigation bar.

<!--
# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**
-->

# 🧠 Ongoing Projects

{% include project-cards.html projects=site.data.ongoing_projects %}


# 🎖 Honors, Awards, and Grants
{% include grouped-markdown-lists.html groups=site.data.honors_and_grants %}

# 📖 Educations
{% include markdown-list.html items=site.data.educations %}

# 💬 Invited Talks
{% include grouped-markdown-lists.html groups=site.data.invited_talks %}

# 🧑‍🏫 Teaching
{% include markdown-list.html items=site.data.teaching %}

# 💻 Internships
{% include markdown-list.html items=site.data.internships %}

<span class='anchor' id='civic-activities'></span>

# 🤝 Civic Activities

{% include civic-activities-panel.html
  summary="I stay involved in community work across environmental advocacy, education, culture, and local civic organizing."
  groups=site.data.civic_activities %}

<p class="about-footer">
  Updated at {{ page.last_updated }} | Thanks <a href="https://github.com/RayeRen/rayeren.github.io/tree/main" target="_blank" rel="noopener noreferrer" style="color: #708090; text-decoration: underline;">Ren Yi</a> for open source template.
</p>
