<script lang="ts" setup></script>

<template>
  <section class="container mb-16 grid grid-cols-12">
    <div class="col-span-12 lg:col-span-6 mr-0 mb-8 lg:mb-0 lg:mr-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-1@duancha.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-2@bump.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-3@float.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-4@filler.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-5@soft.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-6@avoid.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-7@hollow.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-8@range.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
        <div>
          <NuxtImg
            class="w-full"
            src="detail/notice-9@slanted.png"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6 ml-0 lg:ml-6">
      <div class="notice-icon mb-6"></div>
      <div class="">
        <h3 class="mb-6 text-2xl font-bold">安裝前注意事項</h3>
        <ol class="ml-6 list-decimal mb-6">
          <li class="text-xl">主要應用於地表面下的框架式雨水收集系統。</li>
          <li class="text-xl">材質為可回收聚丙烯 ，儲水率達 95% 以上。</li>
        </ol>
        <h3 class="mb-6 text-2xl font-bold">整體注意事項</h3>
        <ol class="ml-6 list-decimal">
          <li class="text-xl">禁止襯墊未標記於圖說內之物品於施工面上。(如木板，木條，PS板)</li>
          <li class="text-xl">非經專業人員確認前，禁止於鋪設基礎上挖坑沉砂。</li>
          <li class="text-xl">禁止安裝於鬆軟地盤上。</li>
          <li class="text-xl">主體材料如有破損應立即更換，切勿安裝。</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
ol {
  li {
    padding-left: 8px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
