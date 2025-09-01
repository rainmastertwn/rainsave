<script lang="ts" setup>
import VideoIcon from '~/components/common/videoIcon.vue'
import VideoWorkDemo from '~/assets/video/rainsave@workDemo.mp4'
import VideoInstall from '~/assets/video/rainsave@install.mp4'
import CloseIcon from '~/components/common/closeIcon.vue'

const isDialogVisible = ref<boolean>(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const videoLoading = ref<boolean>(false)
const currentVideo = ref<string>('')
const openVideoDialog = (type: string) => {
  isDialogVisible.value = true
  videoLoading.value = true
  currentVideo.value = type === 'install' ? VideoInstall : VideoWorkDemo
  nextTick(() => {
    videoRef.value?.load()
  })
}

const handleCloseDialog = () => {
  isDialogVisible.value = false
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
}

const onVideoLoaded = () => {
  videoLoading.value = false
  videoRef.value?.play()
}
</script>

<template>
  <section class="container mb-16 grid grid-cols-12">
    <div class="col-span-12 lg:col-span-5 lg:col-start-2 mr-0 mb-8 lg:mb-0 lg:mr-6">
      <h3 class="mb-6 text-center text-2xl font-bold">雨水積磚 施工流程</h3>
      <div class="relative rounded-md border-1 border-gray-400 overflow-hidden">
        <VideoIcon class="video-icon" @click="openVideoDialog('install')" />
        <NuxtImg
          class="w-full"
          src="index/construction-1@demo.png"
          alt=""
          srcset=""
          loading="lazy"
          format="webp"
        />
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 lg:col-start-7 ml-0 lg:ml-6">
      <h3 class="mb-6 text-center text-2xl font-bold">儲集框架 施工過程</h3>
      <div class="relative rounded-md border-1 border-gray-400 overflow-hidden">
        <VideoIcon class="video-icon" @click="openVideoDialog('workDemo')" />
        <NuxtImg
          class="w-full"
          src="index/construction-2@demo.png"
          alt=""
          srcset=""
          loading="lazy"
          format="webp"
        />
      </div>
    </div>
  </section>
  <ElDialog
    v-model="isDialogVisible"
    :before-close="handleCloseDialog"
    :show-close="false"
    modal-class="video-resize-dialog"
  >
    <template class="relative" #header="{ close }">
      <div class="close-icon-wrap">
        <CloseIcon @click="close" />
      </div>
    </template>
    <div class="video-container" v-loading="videoLoading">
      <video
        class="w-full min-h-[50vh]"
        ref="videoRef"
        controls
        playsinline
        @loadeddata="onVideoLoaded"
      >
        <source type="video/mp4" :src="currentVideo" />
      </video>
    </div>
  </ElDialog>
</template>

<style lang="scss" scoped>
.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
