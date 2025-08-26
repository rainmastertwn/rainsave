<script lang="ts" setup>
import VideoIcon from '~/components/common/videoIcon.vue'

const isVideoPlay = ref<boolean>(false)
const videoLoading = ref<boolean>(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const playVideo = (): void => {
  isVideoPlay.value = true
  videoLoading.value = true
}

const onVideoLoaded = (): void => {
  videoLoading.value = false
  videoRef.value?.play()
}
</script>

<template>
  <section class="container mb-16 grid grid-cols-12">
    <div
      class="col-span-12 md:mr-0 lg:mr-6 2xl:mr-0 lg:col-span-7 flex items-center justify-center"
    >
      <div
        class="overflow-hidden relative rounded-md mx-0 lg:mx-8 mb-8 lg:mb-0"
        v-loading="videoLoading"
      >
        <VideoIcon class="video-icon" v-if="isVideoPlay === false" @click="playVideo" />

        <NuxtImg
          class="w-full"
          src="index/feature@demo.png"
          alt=""
          v-if="isVideoPlay === false"
          srcset=""
          loading="lazy"
          format="webp"
        />

        <video
          class="w-full"
          v-if="isVideoPlay"
          ref="videoRef"
          controls
          playsinline
          muted
          @loadeddata="onVideoLoaded"
        >
          <source src="~/assets/video/rainsave@goal.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5">
      <div class="mx-4">
        <h3 class="mb-6 text-center text-2xl font-bold">雨水積磚 主要特性</h3>
        <ol class="ml-6 list-decimal mb-12">
          <li class="text-xl">主要應用於地表面下的框架式雨水收集系統。</li>
          <li class="text-xl">材質為可回收聚丙烯 ，儲水率達 95% 以上。</li>
          <li class="text-xl">儲集框架質量輕工期短，對於減少構造物有大助益。</li>
          <li class="text-xl">符合 流出抑制，基地保水等法規需求。</li>
          <li class="text-xl">高負載荷重，每 m<sup>2</sup> 由頂部延伸至底部具備20支柱狀結構。</li>
        </ol>
        <h3 class="mb-6 text-center text-2xl font-bold">雨水積磚 設置目的</h3>
        <ol class="ml-6 list-decimal">
          <li class="text-xl">分洪，防洪，滯洪，流出抑制，延長洪峰發生時間。</li>
          <li class="text-xl">幫助補充地下雨水並提供地底土壤所需空氣。</li>
          <li class="text-xl">儲水型式的設置可用於景觀澆灌等消防，防災備用水。</li>
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

.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
