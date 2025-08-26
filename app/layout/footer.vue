<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="h-[80px] lg:h-[125px] mb-[-2px]">
    <svg
      class="waves w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,108,168,0.4" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,108,168,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,108,168,0.1)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#006aa8" />
      </g>
    </svg>
  </div>
  <footer class="bg-primary px-[16px] py-[64px] text-white lg:px-0 lg:py-[100px] relative">
    <div class="container mx-auto mb-14 flex flex-col justify-start lg:flex-row lg:justify-around">
      <nav class="menu mb-10 flex flex-col items-center lg:mb-0 lg:flex-row">
        <NuxtLink class="mb-4 text-lg lg:mb-0 lg:text-xl" href="#">產品說明</NuxtLink>
        <NuxtLink class="mb-4 text-lg lg:mb-0 lg:text-xl" href="/detail">使用需知</NuxtLink>
        <NuxtLink class="mb-4 text-lg lg:mb-0 lg:text-xl" href="#">需求造價與資源下載</NuxtLink>
        <NuxtLink class="mb-4 text-lg lg:mb-0 lg:text-xl" href="#">工程實績</NuxtLink>
        <NuxtLink class="text-lg lg:text-xl" href="#">影音頻道</NuxtLink>
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

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 14s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 20s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 31s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 40s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
