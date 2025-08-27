<script lang="ts" setup></script>

<template>
  <section class="container mb-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="">
      <div class="youtube-wrapper rounded-md overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/UVFt2Sy9zkY"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div class="ml-0 lg:ml-6 flex flex-col justify-center">
      <div>
        <h3 class="mb-6 text-3xl font-bold">雨水積磚浮力原因探討:</h3>
        <ol class="ml-6 mb-10 list-decimal">
          <li class="text-lg">施工後僅回填側邊。</li>
          <li class="text-lg">下雨後雨水流入雨水積磚，造成浮力效應。</li>
        </ol>
        <h3 class="mb-6 text-3xl font-bold">總結:</h3>
        <ol class="ml-6 list-decimal">
          <li class="text-lg">
            營造廠因為工序等原因僅先回填側邊，然而又遇大雨上方無覆蓋重物，導致儲集框架產生浮力。
          </li>
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
      margin-bottom: 8px;
    }
  }
}

.youtube-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9; /* 自動保持16:9比例 */
}

.youtube-wrapper iframe {
  width: 100%;
  height: 100%;
}
</style>
