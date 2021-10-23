---
layout: post
title: Domain-Discipline Repositories Useful to AGU Journals 2
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/agu-trademark-logo-horiz-128.png"
date: 10 September 2021
tags: [Useful Domain Repositories, Resources]
---

<h4>Domain-Discipline Repositories Useful to AGU Journals</h4>

<p>The data that supports the research reported in your paper must be deposited in a trusted repository. When identifying the most appropriate repositories for your data, first, refer to the AGU’s journal-specific data guidance.</p> 

The following is a list of useful repositories by journal:

<ul>
{% for repository-list in site.data.repositories.repository-list %}
    <li><a href="#{{ repository-list.repository-group }}">{{ repository-list.repository-group }}</a></li>  
  {% endfor %}
</ul>

<p>
{% for repository-list in site.data.repositories.repository-list %}
<h4><a name="{{ repository-list.repository-group }}">{{ repository-list.repository-group }}</a></h4>
        {% for repo in repository-list.repositories %}
          <a href="{{ repo.url }}">{{ repo.name }}</a><br>
          {{ repo.notes }}<br>
          <a href="{{ repo.re3data-url }}">More information at re3data.org</a><br>
          <i>{{ repo.category }}</i>
          <br><br>  
        {% endfor %}     
          <br>     
  {% endfor %}
  </p>   
