---
layout: post
title: Domain-Discipline Repositories Useful to AGU Journals 2
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/agu-trademark-logo-horiz-128.png"
date: 10 September 2021
tags: [Useful Domain Repositories, Resources]
---

<h4>Domain-Discipline Repositories Useful to AGU Journals</h4>

<p>The data that supports the research reported in your paper must be deposited in a community-accepted, trusted preservation repository. Additionally, authors should make available software that has a significant impact on the research. A repository that specializes in dommain-discipline specific data and software will maximize the probability that the deposited data and software will be findable, accessible, interoperable and reusable (FAIR). Repsoitories that use persistent identifier links (e.g. DOI or digital object identifier over URLs (and not to the home page) are recommended. Note, an English language translation is necessary in order for the data/software to be accessible to the wider community. Domain-discipline repositories useful to AGU journals below may also be at different stages in supporting the FAIR principles. For any additional domain-discipline repositories recommendations, contact <a href="mailto:datahelp@agu.org">datahelp@agu.org</a> or <a href="https://github.com/AGU-Data/agu-data.github.io/blob/master/_data/repositories.yml">submit a GitHub issue/pull request</a>. Otherwise, look to your <a href="https://deepblue.lib.umich.edu/handle/2027.42/163716">institutional repository</a>, your computing center, a <a href="https://www.agu.org/-/media/Files/Publications/Generalist-Data-Repository-Grid.pdf">general repository</a> (e.g., <a href="https://zenodo.org/">Zenodo</a>, <a href="https://datadryad.org/">Dryad</a>, <a href="https://figshare.com/">figshare</a>), or search for a repository using <a href="https://www.re3data.org/">re3data</a>, <a href="https://explore.openaire.eu/participate/deposit/learn-how">OpenAire</a>, or <a href="https://www.dataone.org/network/">DataOne</a>. Consult <a href="https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-and-Software-for-Authors">Data and Software for Authors</a> and <a href="https://data.agu.org/resources/agu-data-software-sharing-guidance">Data and Software Sharing Guidance for Authors Submitting to AGU Journals</a> for more in-depth guidance.</p>

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
