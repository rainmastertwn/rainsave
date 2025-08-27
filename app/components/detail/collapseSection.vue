<script lang="ts" setup></script>

<template>
  <section class="container mb-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="">
      <div class="youtube-wrapper rounded-md overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/KuSyiXw-KCU"
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
        <h3 class="mb-6 text-3xl font-bold">雨水積磚崩塌原因探討:</h3>
        <ol class="ml-6 mb-10 list-decimal">
          <li class="text-lg">表面凸起石頭，凹洞不平整，段差傾斜，整體範圍開挖不足。</li>
          <li class="text-lg">工程師以木條，木棍，木板等物品整平地面。</li>
        </ol>
        <h3 class="mb-6 text-3xl font-bold">總結:</h3>
        <ol class="ml-6 list-decimal">
          <li class="text-lg">
            主要原因係為施做後上方回填
            土壤的重量傳遞到儲集框架支撐柱腳時其襯墊物品造成支撐面破碎，力量分布不均，導致崩塌。
          </li>
          <li class="text-lg">營造廠商疏於管理，急於趕工導致此次事件發生。</li>
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
