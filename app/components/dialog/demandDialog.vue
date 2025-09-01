<script lang="ts" setup>
import storageList from '~/data/storageCaseList.json'
import penetrationCaseList from '~/data/penetrationCaseList.json'
import CloseIcon from '~/components/common/closeIcon.vue'

type CaseType = {
  type: string
  id: number
  listName: string
  caseTitle: string
  content: string
  images: string[]
}

const showCase = ref<CaseType[]>([])
const showCaseId = ref<number>(1)

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

const demandValue = ref<string>('儲水型 工程案例')
const demandOptions = ref<string[]>(['儲水型 工程案例', '滲透型 工程案例'])

watch(
  demandValue,
  (newVal) => {
    if (newVal === '儲水型 工程案例') {
      showCase.value = storageList
      showCaseId.value = 1
    } else {
      showCase.value = penetrationCaseList
      showCaseId.value = 1
    }
  },
  { immediate: true }
)

const computedListName = computed(() =>
  demandValue.value === '儲水型 工程案例' ? '保水積磚' : '滲透框架'
)

const computeCaseData = computed(() => {
  return showCase.value.filter((item) => item.id === showCaseId.value)
})

const toggleList = (id: number) => {
  showCaseId.value = id
}
</script>

<template>
  <ElDialog class="demand-dialog" v-model="computedDialog" :show-close="false">
    <template class="relative" #header="{ close }">
      <div class="close-icon-wrap">
        <CloseIcon @click="close" />
      </div>
    </template>
    <div class="mt-12 mb-10 flex items-center justify-center">
      <ElSegmented v-model="demandValue" :options="demandOptions" />
    </div>
    <section class="mx-0 lg:mx-4">
      <h3 class="text-2xl font-bold mb-4">{{ computeCaseData[0]?.caseTitle }}</h3>
      <p class="text-xl mb-6" v-html="computeCaseData[0]?.content"></p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mb-4">
        <NuxtImg
          class="w-full mb-4"
          alt=""
          :src="`case/${demandValue === '儲水型 工程案例' ? 'storage' : 'penetration'}/${computeCaseData[0]?.images[0]}`"
          srcset=""
          loading="lazy"
          format="webp"
        />
        <NuxtImg
          class="w-full mb-4"
          alt=""
          :src="`case/${demandValue === '儲水型 工程案例' ? 'storage' : 'penetration'}/${computeCaseData[0]?.images[1]}`"
          srcset=""
          loading="lazy"
          format="webp"
        />
      </div>
      <h3 class="text-3xl font-bold mb-4 text-center">更多 {{ computedListName }} 案例</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mx-[16px] lg:mx-[10%] mb-4">
        <div class="flex flex-col justify-center">
          <a
            class="text-lg mb-1 cursor-pointer"
            v-for="item in showCase"
            :key="item.id"
            @click="toggleList(item.id)"
            >{{ item.listName }}</a
          >
        </div>
      </div>
    </section>
  </ElDialog>
</template>
