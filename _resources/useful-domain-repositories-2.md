---
layout: post
title: Domain-Discipline Repositories Useful to AGU Journals - 2
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/agu-trademark-logo-horiz-128.png"
date: 10 September 2021
tags: [Useful Domain Repositories, Resources]
---

{% for repository-list in site.data.repositories.repository-list %}
    ####{{ repository-list.repository-group }}  
    
  {% endfor %}


{% for repository-list in site.data.repositories.repository-list %}
    ####{{ repository-list.repository-group }}  

        {% for repo in repository-list.repositories %}
          [{{ repo.url }}]({{ repo.name }})  
        {% endfor %}
      
  {% endfor %}
