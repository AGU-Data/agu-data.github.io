---
layout: post
title: Domain-Discipline Repositories Useful to AGU Journals 2
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/agu-trademark-logo-horiz-128.png"
date: 10 September 2021
tags: [Useful Domain Repositories, Resources]
---

<h4>Domain-Discipline Repositories Useful to AGU Journals</h4>

<p>The data that supports the research reported in your paper must be deposited in a community-accepted, trusted preservation repository. Additionally, authors should make available software that has a significant impact on the research. A repository that specializes in dommain-discipline specific data and software will maximize the probability that the deposited data and software will be findable, accessible, interoperable and reusable (FAIR). Repsoitories that use persistent identifier links (e.g. DOI or digital object identifier over URLs (and not to the home page) are recommended. Note, an English language translation is necessary in order for the data/software to be accessible to the wider community. Domain-discipline repositories useful to AGU journals below may also be at different stages in supporting the FAIR principles. For any additional domain-discipline repositories recommendations, contact <a href="mailto:datahelp@agu.org">datahelp@agu.org</a>. Otherwise, look to your institutional repository, your computing center, or a general repository (e.g., Zenodo, Dryad, figshare, Dataverse, Open Science Framework, Mendeley). Consult <a href="https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-and-Software-for-Authors">Data and Software for Authors</a> and <a href="https://data.agu.org/resources/agu-data-software-sharing-guidance">Data and Software Sharing Guidance for Authors Submitting to AGU Journals</a> for more in-depth guidance.</p>

The following is a list developed with AGU community members of useful repositories by journal:

<ul>
{% for repository-list in site.data.repositories.repository-list %}
    <li><a href="#{{ repository-list.repository-group }}">{{ repository-list.repository-group }}</a></li>  
  {% endfor %}
</ul>

<p>
{% for repository-list in site.data.repositories.repository-list %}
<h4><a name="{{ repository-list.repository-group }}">{{ repository-list.repository-group }}</a></h4>
        {% for repo in repository-list.repositories %}
          <strong><a href="{{ repo.url }}">{{ repo.name }}</a></strong><br>
          {{ repo.notes }}<br>
          <a href="{{ repo.re3data-url }}">More information at re3data.org</a><br>
          <i>{{ repo.category }}</i><br>
          <strong>{{ repo.journal-list }}</strong><br>
          {% if repo.journal-list %}
          <br>
          {% endif %}
        {% endfor %}     
          <br>     
  {% endfor %}
  </p>   
