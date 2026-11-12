---
layout: default
title: Writing
permalink: /writing/
---

<h1 class="page-title">Writing</h1>

{% if site.posts.size > 0 %}
<ol class="timeline">
  {% for post in site.posts %}
  <li>
    <span class="when">{{ post.date | date: "%-d %b %Y" }}</span>
    <div><a class="title" href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
  </li>
  {% endfor %}
</ol>
{% else %}
<p class="empty">Nothing here yet. My first post is on its way. Subscribe via <a href="{{ '/feed.xml' | relative_url }}">RSS</a> to catch it.</p>
{% endif %}
