<script lang="ts" setup>
import { onMounted, ref } from 'vue'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

const player = ref<any>(null)
const playerEl = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!window.YT) {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag)
  }

  // YouTube API 需要全域的 callback
  window.onYouTubeIframeAPIReady = () => {
    player.value = new window.YT.Player(playerEl.value, {
      videoId: 'GW3Pq8gEJvY',
      playerVars: {
        fs: 0,
        autoplay: 0,
        autohide: 1,
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 0,
        iv_load_policy: 3
      },
      events: {
        onReady: (event: any) => {
          // console.log('YouTube Player Ready')
          // console.log(player.value)
          player.value.mute()
          player.value.playVideo()
          // player.value.seekTo(0)()
        },
        onStateChange: (event: any) => {
          // console.log('State Changed:', event.data)
          if (event.data === 0) {
            // console.log('Video ended')
            // player.value.pauseVideo()
            player.value.seekTo(0)()
          }
        }
      }
    })
  }
})
</script>

<template>
  <section class="container mt-10 mb-10 lg:mt-20 lg:mb-20">
    <!-- <div class="overflow-hidden rounded-lg">
      <img class="w-full" src="https://placehold.co/1440x275?text=video block" alt="占位圖" />
    </div> -->

    <div class="embed-container relative rounded-md overflow-hidden">
      <div ref="playerEl"></div>
    </div>
  </section>
</template>

<style lang="scss">
.embed-container {
  // padding-bottom: 56.25%;
  // max-width: 100%;
  // height: 0;
  width: 100%;
  height: 375px; /* 固定高度 */
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
