--- 
layout: page
title : Posts-Resources 
permalink: /combo/
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
tags: 
---

   
      <div class="flex-row">
    <div class="flex-col">
      <div id="news-section">
        <h2>
          <i class="fa fa-paper-plane"></i>
          News
        </h2>
        <ul class="recent-list">
          {% assign sorted = paginator.posts | sort: "date" | reverse %}
          {% for posts in sorted limit:5 %}
          <li class="recent-item">
            <div class="item-date meta">
              {{ posts.date | date_to_string }}
            </div>
            <div class="item-content">
              <h4>
                <a href="{{ posts.url | prepend: site.baseurl }}">
                  {{ posts.title }}
                </a>
              </h4>
              {{ posts.excerpt }}
            </div>
          </li>
          {% endfor %}
        </ul>
        <p><a class="all-content-link" href="/news">All News</a></p>
      </div>
    </div>
    <div id="vl-border"></div>
    <div class="flex-col">
      <div id="events-section">
        <h2>
          <i class="fas fa-calendar-alt"></i>
          Events
        </h2>
        <ul class="recent-list">
          {% assign sorted = site.resources | sort: "date" | reverse %}
          {% for resource in sorted limit:3 %}
          <li class="recent-item">
            <div class="item-date meta">
              {{ resource.date | date_to_string }}
            </div>
            <div class="item-content">
              <h4>
                <a href="{{ resource.url | prepend: site.baseurl }}">
                  {{ resource.title }}
                </a>
              </h4>
              {{ resource.excerpt }}
            </div>
          </li>
          {% endfor %}
        </ul>
        <p><a class="all-content-link" href="/events">All Events</a></p>
      </div>
      <hr>
    </div>
  </div>
</div>

</div>
