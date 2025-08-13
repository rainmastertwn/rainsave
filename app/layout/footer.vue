<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="bg-primary px-[16px] py-[64px] text-white lg:px-0 lg:py-[100px]">
    <div class="container mx-auto mb-14 flex flex-col justify-start lg:flex-row lg:justify-around">
      <nav class="menu mb-10 flex flex-col items-center lg:mb-0 lg:flex-row">
        <NuxtLink href="#" class="mb-4 text-lg lg:mb-0 lg:text-xl">產品說明</NuxtLink>
        <NuxtLink href="#" class="mb-4 text-lg lg:mb-0 lg:text-xl">使用需知</NuxtLink>
        <NuxtLink href="#" class="mb-4 text-lg lg:mb-0 lg:text-xl">需求造價與資源下載</NuxtLink>
        <NuxtLink href="#" class="mb-4 text-lg lg:mb-0 lg:text-xl">工程實績</NuxtLink>
        <NuxtLink href="#" class="text-lg lg:text-xl">影音頻道</NuxtLink>
      </nav>
      <div class="">
        <p class="text-lg lg:text-xl">正在旺企業有限公司</p>
        <p class="text-lg lg:text-xl">112063 台北市北投區清江路 247 巷 8 號 1 樓</p>
        <p class="text-lg lg:text-xl">TEL: 02-2898-6776</p>
        <p class="text-lg lg:text-xl">FAX: 02-2898-6132</p>
        <p class="text-lg lg:text-xl">RS@rainsave.com.tw</p>
      </div>
    </div>
    <span class="flex justify-center text-base">
      Copyright © {{ currentYear }} RAINSAVE. All Rights Reserved.
    </span>
  </footer>
</template>

<style lang="scss">
$header-margin: 32px;

.menu {
  a {
    position: relative;
    transition: all 0.3s;
    line-height: 1;

    &:not(:last-child) {
      margin-right: $header-margin;

      @media (width < 80rem) {
        margin-right: 16px;
      }

      @media (width < 64rem) {
        margin-right: 0;
      }

      &::before {
        position: absolute;
        top: 0;
        right: calc(-#{$header-margin} / 2);
        display: block;
        width: 1px;
        height: 100%;
        background-color: #fff;
        content: '';

        @media (width < 80rem) {
          right: -8px;
        }

        @media (width < 64rem) {
          display: none;
        }
      }
    }
  }
}
</style>
