---
layout: default
title: Home
---

<!-- Rewrite this bio in your own words: it should sound like you talking. -->

<section class="hero">
  <h1>Andre Vaillant</h1>
  <p class="lede">Mathematician, former quant, now working on AI safety.</p>
  <figure class="paths">
    <canvas id="paths" aria-hidden="true"></canvas>
    <figcaption>Five sample paths of a Brownian motion, drawn fresh on every visit.</figcaption>
  </figure>
</section>

<section class="bio" markdown="1">

I studied maths at Cambridge and spent a few years in quant research.

Outside work I write songs, play in a band, train BJJ and boulder.

</section>

<section class="block">
  <h2>Writing</h2>
  {% if site.posts.size > 0 %}
  <ol class="timeline">
    {% for post in site.posts limit:5 %}
    <li>
      <span class="when">{{ post.date | date: "%b %Y" }}</span>
      <div><a class="title" href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    </li>
    {% endfor %}
  </ol>
  {% else %}
  <p class="empty">My first post is on its way. Subscribe via <a href="{{ '/feed.xml' | relative_url }}">RSS</a> to catch it.</p>
  {% endif %}
</section>
