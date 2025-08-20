<script lang="ts" setup>
type StyleProps = {
  iconWidth?: number
  iconHeight?: number
}

const props = withDefaults(defineProps<StyleProps>(), {
  iconWidth: 60,
  iconHeight: 60
})

const iconStyle = computed(() => ({
  width: `${props.iconWidth}px` || '60px',
  height: `${props.iconHeight}px` || '60px'
}))

const svgStyle = computed(() => ({
  width: `${props.iconWidth / 2}px` || '30px',
  height: `${props.iconHeight / 2}px` || '30px'
}))
</script>

<template>
  <div>
    <button
      class="play-button cursor-pointer flex items-center justify-center overflow-hidden"
      :style="iconStyle"
    >
      <svg
        class="control-icon"
        :style="svgStyle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <!-- <g class="control-icon-pause">
        <rect width="4.5" height="14" x="3.75" y="3" rx="1.5"></rect>
        <rect width="4.5" height="14" x="11.75" y="3" rx="1.5"></rect>
      </g> -->
        <path
          class="control-icon-play"
          d="M5 15.25V4.77a1.44 1.44 0 0 1 1.44-1.62 1.86 1.86 0 0 1 1.11.31l8.53 5c.76.44 1.17.8 1.17 1.51s-.41 1.07-1.17 1.51l-8.53 5a1.86 1.86 0 0 1-1.11.31A1.42 1.42 0 0 1 5 15.25Z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.play-button {
  background-color: var(--color-primary);
  border-radius: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    fill: #fff;
    pointer-events: none;
  }
}
</style>
