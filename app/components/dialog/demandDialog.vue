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

// chunk array
const chunkedShowCase = computed(() => {
  const chunkSize = 9
  const result = []
  for (let i = 0; i < showCase.value.length; i += chunkSize) {
    result.push(showCase.value.slice(i, i + chunkSize))
  }
  return result
})

const toggleList = (id: number) => {
  showCaseId.value = id
}

const images = import.meta.glob<{ default: string }>('~/assets/images/case/**/*', { eager: true })
const outputImage = (data: any, count: number): string => {
  const folder = demandValue.value === '儲水型 工程案例' ? 'storage' : 'penetration'
  const fileName = data[0]?.images[count] ?? ''
  const key = `/assets/images/case/${folder}/${fileName}`
  const imgSrc: string | undefined = images[key]?.default
  return imgSrc ? imgSrc : ''
}

const handleDialogClose = (done: () => void) => {
  // reset to default
  showCaseId.value = 1
  done() // close dialog function
}
</script>

<template>
  <ElDialog
    class="demand-dialog"
    v-model="computedDialog"
    :show-close="false"
    :before-close="handleDialogClose"
  >
    <template class="relative" #header="{ close }">
      <div class="close-icon-wrap">
        <CloseIcon @click="close" />
      </div>
    </template>
    <div class="mt-12 mb-6 lg:mb-10 flex items-center justify-center">
      <ElSegmented v-model="demandValue" :options="demandOptions" />
    </div>
    <section class="mx-0 lg:mx-4">
      <h3 class="text-2xl font-bold mb-4">{{ computeCaseData[0]?.caseTitle }}</h3>
      <p class="text-xl mb-6" v-html="computeCaseData[0]?.content"></p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 mb-4">
        <img class="w-full mb-4" :src="outputImage(computeCaseData, 0)" loading="lazy" />
        <img class="w-full mb-4" :src="outputImage(computeCaseData, 1)" loading="lazy" />
      </div>
      <h3 class="text-3xl font-bold mb-6 text-center">更多 {{ computedListName }} 案例</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mx-[16px] lg:mx-[10%] mb-4">
        <template v-if="demandValue === '儲水型 工程案例'">
          <div class="flex flex-col justify-center">
            <a
              class="text-lg mb-1 list-hover-effect cursor-pointer"
              v-for="item in showCase"
              :key="item.id"
              :class="{ active: item.id === showCaseId }"
              @click="toggleList(item.id)"
            >
              {{ item.listName }}
            </a>
          </div>
        </template>
        <template v-else>
          <div
            class="flex flex-col justify-center"
            v-for="(group, groupIndex) in chunkedShowCase"
            :key="groupIndex"
          >
            <a
              class="text-lg mb-1 list-hover-effect cursor-pointer"
              v-for="item in group"
              :key="item.id"
              :class="{ active: item.id === showCaseId }"
              @click="toggleList(item.id)"
            >
              {{ item.listName }}
            </a>
          </div>
        </template>
      </div>
    </section>
  </ElDialog>
</template>
