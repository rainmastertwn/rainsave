<script lang="ts" setup>
import { menuItems } from './menu'

const props = defineProps({
  mobileMenuStatus: Boolean
})

const emit = defineEmits<{
  (e: 'toggleBurger'): void
}>()

const toggleBurger = (): void => {
  emit('toggleBurger')
}
</script>

<template>
  <div class="menu-wrap" :class="{ 'menu-opened': mobileMenuStatus }">
    <nav class="menu hidden items-center lg:flex">
      <NuxtLink
        class="text-base lg:text-lg xl:text-xl"
        v-for="item in menuItems"
        :key="item.label"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <nav class="mobile-menu flex lg:hidden">
      <div class="burger-container" @click="toggleBurger">
        <div id="burger">
          <div class="bar topBar"></div>
          <div class="bar btmBar"></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
$header-margin: 32px;
$cubic: cubic-bezier(0.4, 0.01, 0.165, 0.99);

.menu {
  a {
    position: relative;
    display: flex;
    transition: all 0.3s;
    line-height: 1;

    &:hover {
      color: var(--color-default-blue);
    }

    &:not(:last-child) {
      margin-right: $header-margin;

      @media (width < 80rem) {
        margin-right: 16px;
      }

      &::before {
        position: absolute;
        top: 0;
        right: calc(-#{$header-margin} / 2);
        display: block;
        width: 1px;
        height: 100%;
        background-color: #000;
        content: '';

        @media (width < 80rem) {
          right: -8px;
        }
      }
    }
  }
}

.menu-wrap {
  .burger-container {
    position: relative;
    width: 35px;
    height: 35px;
    transition: all 0.3s $cubic;
    cursor: pointer;
    transform: rotate(0deg);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    #burger {
      position: relative;
      top: 50%;
      display: block;
      margin: -4px auto 0;
      width: 18px;
      height: 8px;

      .bar {
        position: relative;
        display: block;
        width: 100%;
        height: 2px;
        background: #000;
        transition: all 0.3s $cubic;
        transition-delay: 0s;

        &.topBar {
          transform: translateY(0) rotate(0deg);
        }

        &.btmBar {
          transform: translateY(6px) rotate(0deg);
        }
      }
    }
  }

  &.menu-opened {
    .burger-container {
      transform: rotate(90deg);

      #burger {
        .bar {
          transition: all 0.4s $cubic;
          transition-delay: 0.2s;

          &.topBar {
            transform: translateY(6.5px) rotate(45deg);
          }

          &.btmBar {
            transform: translateY(4.5px) rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>
