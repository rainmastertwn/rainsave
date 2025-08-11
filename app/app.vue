<script lang="ts" setup>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'

useHead({
  title: 'Rain SAVE 儲集框架 雨水積磚',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
    },
    {
      name: 'description',
      content:
        'Rain SAVE 儲集框架 為一種塑膠射出成型製品其廣泛運用於地下儲集雨水及滲透保水等基地保水之工程使用，我司所生產之儲集框架產品具有精度高、易於安裝、抗壓強度高、質量輕盈等特性。產品採100%均質一級回收塑料並添加各式耐衝擊、抗紫外線、抗凍融等助劑製成。'
    },
    {
      name: 'author',
      content: 'Rain Master'
    },
    {
      name: 'thumbnail',
      content: '/shareImage.avif'
    },
    {
      property: 'og:image',
      content: '/shareImage.avif'
    },
    {
      property: 'og:url',
      content: 'https://rainsave.com.tw/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'Rain SAVE 儲集框架 雨水積磚'
    },
    {
      property: 'og:image',
      content: '/shareImage.avif'
    },
    {
      property: 'og:description',
      content:
        'Rain SAVE 儲集框架 為一種塑膠射出成型製品其廣泛運用於地下儲集雨水及滲透保水等基地保水之工程使用，我司所生產之儲集框架產品具有精度高、易於安裝、抗壓強度高、質量輕盈等特性。產品採100%均質一級回收塑料並添加各式耐衝擊、抗紫外線、抗凍融等助劑製成。'
    }
  ],
  // google fonts setting
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap'
    }
  ]
})
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss">
@use '~/assets/css/main';

html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #555;
  background-color: white;
}

// set mobile/pad can not swipe to left / right
body {
  overflow: hidden scroll;
}
</style>
