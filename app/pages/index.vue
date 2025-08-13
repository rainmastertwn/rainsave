<script lang="ts" setup>
import BannerSection from '~/components/index/bannerSection.vue'
import AdvantageSection from '~/components/index/advantageSection.vue'
</script>

<template>
  <!-- banner section -->
  <BannerSection />
  <!-- product review -->
  <AdvantageSection />

  <section class="container">
    <div class="overflow-hidden rounded-lg border-2 border-black">
      <img class="w-full" src="https://placehold.co/1440x275?text=video block" alt="占位圖" />
    </div>
  </section>

  <div class="height-space"></div>
</template>

<style lang="scss" scoped>
.height-space {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2000px;
}
</style>
