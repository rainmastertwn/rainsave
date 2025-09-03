<script lang="ts" setup>
type TitleProps = {
  title?: string
  description?: string
}

const props = withDefaults(defineProps<TitleProps>(), {
  title: 'Rain SAVE 雨水積磚',
  description: '基地保水 · 流出抑制 · 台灣製造 · 品質保證'
})
</script>

<template>
  <section class="container mt-10 mb-16 grid grid-cols-12">
    <div class="bg-primary col-span-12 col-start-1 px-8 py-8 text-white lg:px-20">
      <h1 class="mb-4 text-2xl font-bold lg:text-4xl">{{ props.title }}</h1>
      <div class="cross-arrow mb-4 flex"></div>
      <div class="flex items-center" data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-2xl font-bold lg:text-4xl">
          {{ props.description }}
        </h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$arrow-color: #fff;
$arrow-size: 1em;
$arrow-border: 0.2em;

.cross-arrow {
  position: relative;
  width: 0;
  background-color: #fff;
  animation: arrowshow 0.8s forwards;
  animation-delay: 0.1s;

  &::after,
  &::before {
    position: absolute;
    display: block;
    transition: all 0.5s ease-in-out;
    content: '';
  }

  &::before {
    top: 50%;
    right: 0;
    width: $arrow-size;
    height: $arrow-size;
    border-radius: 0 $arrow-size * 0.15 0 0;
    box-shadow: inset -#{$arrow-border} $arrow-border 0 0 $arrow-color;
    transform-origin: 50% 50%;
    transform: translate(0, calc(-1em / 2)) rotate(45deg);
  }

  &::after {
    top: 50%;
    right: 0;
    width: 100%;
    height: $arrow-border;
    transform: translate(0, calc(-0.2em / 2));
    background-color: $arrow-color;
  }
}

@keyframes arrowshow {
  0% {
    width: 0;
  }

  20% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
