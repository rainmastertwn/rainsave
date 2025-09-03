<script lang="ts" setup>
import { ElIcon } from 'element-plus'

type FilterItem = {
  id: number
  title: string
  description: string
}
const filterItem = ref<FilterItem[]>([
  { id: 1, title: '案例分享', description: '保水型積磚，滲透型積磚安裝案例分享' },
  { id: 2, title: '縮時攝影', description: '保水型積磚，縮時攝影相關內容' },
  { id: 3, title: '關於施工', description: '保水型積磚，關於施工的詳細說明' },
  { id: 4, title: '注意事項', description: '保水型積磚，施工過程中的注意事項' },
  { id: 5, title: '相關影音', description: '保水型積磚，相關影音資料' },
  { id: 6, title: '產品說明', description: '保水型積磚，產品的詳細說明' },
  { id: 7, title: '安裝方式', description: '保水型積磚，安裝方式的詳細說明' },
  { id: 8, title: '滲透型與儲水型的差別', description: '保水型積磚，滲透型與儲水型的差別' }
])
const activeFilter = ref<number>(1)
const toggleVideoFilter = (id: number) => {
  activeFilter.value = id
}

const computedDescription = computed(() => {
  return filterItem.value.find((item) => item.id === activeFilter.value)?.description
})
</script>

<template>
  <section class="container mt-10 mb-16">
    <h2 class="text-2xl font-bold mb-4">▶︎ 最新上架</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
      <div>
        <div class="overflow-hidden rounded-md border-1 border-gray-400">
          <iframe
            class="w-full"
            src="https://www.youtube.com/embed/m6M55Sq4jLc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div class="ml-4">
        <h3 class="mb-6 text-2xl font-bold">雨水積磚施工流程影片</h3>
        <p class="text-xl mb-4">施工前的注意事項：</p>
        <ol class="ml-6 mb-4 list-decimal">
          <li class="text-xl">
            在槽體挖掘時必須將坑挖大一點不要因為覺得土方會出來太多的關係挖的太剛好，根據長期經驗挖太剛好的最後都會變成挖不夠。
          </li>
          <li class="text-xl">
            挖方完成後請認真的把整平作業做好，在施做滲透型積磚時請以粗砂或細碎石整平，施做儲水型積磚在混凝土灌漿後必需以人工抹平或以電動整平尺整平。
          </li>
        </ol>
        <p class="text-xl mb-4">施工後的注意事項：</p>
        <ol class="ml-6 list-decimal">
          <li class="text-xl">施作完成後須分層回填，每回填50cm時以夯實機分層震動夯實。</li>
          <li class="text-xl">如果在未回填前下雨，周圍需挖導溝並點井放置抽水馬達。</li>
        </ol>
      </div>
    </div>
    <div class="mb-6">
      <div class="filter-wrap text-xl flex items-center mb-4">
        <template v-for="item in filterItem" :key="item.id">
          <div
            class="filter min-w-[108px]"
            :class="{ active: activeFilter === item.id }"
            @click="toggleVideoFilter(item.id)"
          >
            {{ item.title }}
          </div>
        </template>
      </div>
      <!-- description -->
      <p class="text-xl text-[#555555]">- {{ computedDescription }}</p>
    </div>

    <div class="video-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
      <div class="video-item flex flex-col mb-4">
        <div class="overflow-hidden rounded-md mb-4">
          <img src="~/assets/images/index/feature@demo.png" alt="" srcset="" />
        </div>
        <h3 class="text-lg font-medium mb-2 flex items-center">
          南投貓羅溪 100m3 儲水型
          <span class="check">
            <ElIcon><ElIconCheck /></ElIcon>
          </span>
        </h3>
        <p class="text-base text-[#555555]">雨水積磚施工流程影片</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
}

ol {
  li {
    padding-left: 8px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

.filter-wrap {
  overflow: scroll hidden;
  width: 100%;
  min-height: 42px;
  flex-flow: row nowrap;
  scrollbar-width: none;

  .filter {
    padding: 4px 12px;
    margin-bottom: 8px;
    width: max-content;
    background-color: rgb(25, 59, 139, 0.2);
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &.active {
      color: white;
      background-color: rgb(25, 59, 139, 1);
    }
  }
}

.check {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  font-size: 14px;
  color: white;
  background-color: rgb(65, 239, 61);
  border-radius: 100%;
}
</style>
