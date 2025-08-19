<script lang="ts" setup>
import ListData from '~/data/knowledgeList.json'
const knowledgeDialog = ref(false)
const knowledgeList = ref(ListData)
const toggleDialog = () => {
  knowledgeDialog.value = !knowledgeDialog.value
}
</script>

<template>
  <section class="container mb-16 grid grid-cols-12">
    <div class="col-span-12 lg:col-span-5 lg:col-start-2 mr-0 mb-8 lg:mb-0 lg:mr-6">
      <h3 class="mb-6 text-center text-2xl font-bold">雨水積磚 工程實績</h3>
      <div class="case-wrap grid grid-cols-2 gap-4">
        <div class="case relative overflow-hidden rounded-md">
          <NuxtImg
            class="z-0 w-full h-full object-cover"
            src="index/case-1.jpeg"
            alt=""
            srcset=""
            loading="lazy"
          />
          <div class="cover"></div>
          <h4 class="z-1 text-white text-2xl font-bold">士林北藝中心</h4>
        </div>
        <div class="case relative overflow-hidden rounded-md">
          <NuxtImg
            class="z-0 w-full h-full object-cover"
            src="index/case-2.jpeg"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
          <div class="cover"></div>
          <h4 class="z-1 text-white text-2xl font-bold">北市日新國小</h4>
        </div>
        <div class="case relative overflow-hidden rounded-md">
          <NuxtImg
            class="z-0 w-full h-full object-cover"
            src="index/case-3.jpg"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
          <div class="cover"></div>
          <h4 class="z-1 text-white text-2xl font-bold">經濟部金屬中心</h4>
        </div>
        <div class="case relative overflow-hidden rounded-md">
          <NuxtImg
            class="z-0 w-full h-full object-cover"
            src="index/case-4.jpeg"
            alt=""
            srcset=""
            loading="lazy"
            format="webp"
          />
          <div class="cover"></div>
          <h4 class="z-1 text-white text-2xl font-bold">龜山市地重劃</h4>
        </div>
      </div>
    </div>

    <div class="col-span-12 lg:col-span-5 lg:col-start-7 ml-0 lg:ml-6">
      <h3 class="mb-6 text-center text-2xl font-bold">儲集框架 知識分享</h3>
      <div class="list-wrap grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6">
        <a
          class="list-hover-effect cursor-pointer text-xl"
          v-for="item in knowledgeList"
          :key="item.id"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </section>
  <!-- toggle dialog -->
  <ElDialog v-model="knowledgeDialog"> test </ElDialog>
</template>

<style lang="scss" scoped>
.case-wrap .case {
  .cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;

    // height: 64px;
    background-color: var(--color-default-blue);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  h4 {
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.2s ease;
    transition-delay: 0.1s;
  }

  &:hover {
    .cover {
      height: 64px;
    }

    h4 {
      opacity: 1;
    }
  }
}
</style>
