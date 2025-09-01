<script lang="ts" setup>
import CloseIcon from '~/components/common/closeIcon.vue'
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const computedDialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const segmentedValue = ref<string>('雨水積磚 主體')
const segmentedOptions = ref<string[]>(['雨水積磚 主體', '雨水積磚 側板'])
</script>

<template>
  <ElDialog class="segmented-dialog" v-model="computedDialog" :show-close="false">
    <template class="relative" #header="{ close }">
      <div class="close-icon-wrap">
        <CloseIcon @click="close" />
      </div>
    </template>
    <div class="mt-12 mb-10 flex items-center justify-center">
      <ElSegmented v-model="segmentedValue" :options="segmentedOptions" />
    </div>

    <section v-if="segmentedValue === '雨水積磚 主體'">
      <div class="grid grid-cols-1 lg:grid-cols-2 mx-0 lg:mx-4 mb-10 gap-10">
        <div>
          <iframe
            src="https://sketchfab.com/models/771e4a463b8b45eb93b1633b30725851/embed?camera=0"
            title="儲集框架主體-雨水管理大師"
            width="100%"
            height="300"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            loading="lazy"
          >
          </iframe>
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-center mb-4">雨水積磚 主體大樣圖</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="flex flex-col">
              <NuxtImg
                class="w-full"
                src="product-typeA@top.png"
                alt=""
                srcset=""
                loading="lazy"
                format="webp"
              />
              <p class="text-xl text-center">上視圖</p>
            </div>
            <div class="flex flex-col">
              <NuxtImg
                class="w-full"
                src="product-typeA@side.png"
                alt=""
                srcset=""
                loading="lazy"
                format="webp"
              />
              <p class="text-xl text-center">側視圖</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 mx-0 lg:mx-4 mb-10 gap-10">
        <NuxtImg
          class="w-full mb-4"
          src="product-typeBottom.png"
          alt=""
          srcset=""
          loading="lazy"
          format="webp"
        />
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-center mb-4">雨水積磚 尺寸詳細資料</h2>
          <ul class="text-xl">
            <li class="mb-1">尺吋: 500mm * 500mm * 250mm</li>
            <li class="mb-1">材質: 可回收聚丙烯</li>
            <li class="mb-1">產品重量: 2.78kg</li>
            <li class="mb-1">射出機台噸數: 600T</li>
            <li class="mb-1">成品製造公差: 5%</li>
            <li>雨水積磚單價: 400元(主體)</li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="segmentedValue === '雨水積磚 側板'">
      <div class="grid grid-cols-1 lg:grid-cols-2 mx-0 lg:mx-4 mb-10 gap-10">
        <div>
          <iframe
            src="https://sketchfab.com/models/55d9270651be47a8902569b96da6f287/embed?camera=0"
            title="儲集框架側板-雨水管理大師"
            width="100%"
            height="300"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            loading="lazy"
          >
          </iframe>
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-center mb-4">雨水積磚 側板大樣圖</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="flex flex-col">
              <NuxtImg
                class="w-full"
                src="product-typeB@top.png"
                alt=""
                srcset=""
                loading="lazy"
                format="webp"
              />
              <p class="text-xl text-center">上視圖</p>
            </div>
            <div class="flex flex-col">
              <NuxtImg
                class="w-full"
                src="product-typeB@side.png"
                alt=""
                srcset=""
                loading="lazy"
                format="webp"
              />
              <p class="text-xl text-center">側視圖</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 mx-0 lg:mx-4 mb-10 gap-10">
        <NuxtImg
          class="w-full mb-4"
          src="product-typeSide.png"
          alt=""
          srcset=""
          loading="lazy"
          format="webp"
        />
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-center mb-4">雨水積磚 尺寸詳細資料</h2>
          <ul class="text-xl">
            <li class="mb-1">尺吋: 500mm * 500mm * 40mm</li>
            <li class="mb-1">材質: 可回收聚丙烯</li>
            <li class="mb-1">產品重量: 2.3kg</li>
            <li class="mb-1">射出機台噸數: 600T</li>
            <li class="mb-1">成品製造公差: 5%</li>
            <li>雨水積磚價格: 400元(側板)</li>
          </ul>
        </div>
      </div>
    </section>
  </ElDialog>
</template>

<!-- <style lang="scss" scoped></style> -->
