<script lang="ts" setup>
import VideoIcon from '~/components/common/videoIcon.vue'

const isVideoIconShow = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
onMounted(() => {
  setTimeout(() => {
    if (videoRef.value) {
      videoRef.value.play()
    }
  }, 900)
})

const videoEnded = () => {
  isVideoIconShow.value = true
}

const playVideo = () => {
  isVideoIconShow.value = false
  videoRef.value?.play()
}
</script>

<template>
  <section class="container mt-10 mb-10 lg:mt-20 lg:mb-20">
    <div class="relative overflow-hidden rounded-lg">
      <video class="w-full mt-[-1px]" ref="videoRef" muted @ended="videoEnded">
        <source src="~/assets/video/rainsave@hight-layers.webm" type="video/mp4" />
      </video>

      <VideoIcon
        class="video-icon"
        :iconWidth="48"
        :iconHeight="48"
        v-if="isVideoIconShow"
        @click="playVideo"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video-icon {
  position: absolute;
  right: 24px;
  bottom: 16px;

  @media (width < 64rem) {
    right: 8px;
    bottom: 8px;
  }
}
</style>
