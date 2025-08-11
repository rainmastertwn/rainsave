<script lang="ts" setup></script>

<template>
  <header class="sticky top-0 z-[1000] bg-white">
    <div class="container flex items-center justify-between py-6">
      <div class="flex items-center">
        <img
          class="h-[50px] w-[50px] lg:h-[65px] lg:w-[65px]"
          src="~/assets/images/rainsave-cube@blue.svg"
        />
        <div class="ml-2 flex flex-row items-center lg:ml-4">
          <h3 class="text-2xl font-semibold uppercase lg:text-3xl xl:text-4xl">
            Rain Save 儲集框架
          </h3>
          <img
            class="mb-1 ml-2 hidden w-[25px] lg:ml-4 lg:block lg:w-[40px]"
            src="~/assets/images/yuanbao@logo.png"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}
</style>
