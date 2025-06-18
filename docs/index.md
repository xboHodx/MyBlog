---
layout: home

hero:
  name: xboHodx的博客
  text: describe
  tagline: tags。。。
  image:
    src: ../src/logo.jpg
    alt: logo
  actions:
    - theme: brand
      text: Get Started
      link: ./src/menu.md
    - theme: alt
      text: View on GitHub
      link: https://github.com/xboHodx/MyBlog
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe );
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>