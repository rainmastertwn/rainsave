<script lang="ts" setup>
const advantageHoverValue = ref<string>('')
const listEnter = (event: MouseEvent): void => {
  const target = event.currentTarget as HTMLElement
  const dataNum = target.dataset.list
  advantageHoverValue.value = dataNum ? dataNum : ''
}

const listLeave = (event: MouseEvent): void => {
  advantageHoverValue.value = ''
}
</script>

<template>
  <section class="container mb-16 grid grid-cols-12 gap-0 lg:gap-10">
    <div class="col-span-12 col-start-1 mb-10 lg:col-span-6 lg:col-start-2 lg:mb-0">
      <div class="hover-wrap relative">
        <div class="circle-list">
          <div
            class="circle cursor-pointer"
            data-list="1"
            :class="{ hover: advantageHoverValue === '1' }"
            @mouseenter="listEnter"
            @mouseleave="listLeave"
          >
            1
          </div>
          <div
            class="circle cursor-pointer"
            data-list="2"
            :class="{ hover: advantageHoverValue === '2' }"
            @mouseenter="listEnter"
            @mouseleave="listLeave"
          >
            2
          </div>
          <div
            class="circle cursor-pointer"
            data-list="3"
            :class="{ hover: advantageHoverValue === '3' }"
            @mouseenter="listEnter"
            @mouseleave="listLeave"
          >
            3
          </div>
          <div
            class="circle cursor-pointer"
            data-list="4"
            :class="{ hover: advantageHoverValue === '4' }"
            @mouseenter="listEnter"
            @mouseleave="listLeave"
          >
            4
          </div>
          <div
            class="circle cursor-pointer"
            data-list="5"
            :class="{ hover: advantageHoverValue === '5' }"
            @mouseenter="listEnter"
            @mouseleave="listLeave"
          >
            5
          </div>
        </div>

        <NuxtImg
          class="w-full"
          src="index/product@main.png"
          alt="Product Image"
          srcset=""
          fetchpriority="high"
          format="webp"
        />
      </div>
    </div>
    <div
      class="col-span-12 col-start-1 flex flex-col justify-center pl-5 lg:col-span-5"
      data-aos="fade-up"
      data-aos-delay="550"
    >
      <!-- <h3 class="mb-4 text-2xl font-bold">雨水積磚 · 儲集框架的五大優點：</h3> -->
      <h3 class="typewriter mb-4 min-h-[35px] text-3xl font-bold"></h3>
      <ol class="advantage-list w-[85%] md:w-[70%] lg:w-[80%]">
        <li
          class="relative cursor-pointer text-xl"
          data-list="1"
          :class="{
            hover: advantageHoverValue === '1'
          }"
        >
          儲集框架 95%儲水體積。
        </li>
        <li
          class="relative cursor-pointer text-xl"
          data-list="2"
          :class="{
            hover: advantageHoverValue === '2'
          }"
        >
          4cm側板提升水平抗壓能力。
        </li>
        <li
          class="relative cursor-pointer text-xl"
          data-list="3"
          :class="{
            hover: advantageHoverValue === '3'
          }"
        >
          連續性的柱狀支撐結構。
        </li>
        <li
          class="relative cursor-pointer text-xl"
          data-list="4"
          :class="{
            hover: advantageHoverValue === '4'
          }"
        >
          多方向性的組裝方式。
        </li>
        <li
          class="relative cursor-pointer text-xl"
          data-list="5"
          :class="{
            hover: advantageHoverValue === '5'
          }"
        >
          穩固的側板卡扣設計。
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hover-wrap {
  .circle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    color: #fff;
    background-color: rgb(0, 106, 168, 0.75);
    border: 2px solid transparent;
    border-radius: 100%;
    transition: all 0.3s ease-in-out;

    @media (width < 48rem) {
      width: 30px;
      height: 30px;
    }

    &.hover {
      transform: scale(1.25);
      background-color: rgb(0, 106, 168, 1);
      border: 2px solid #fff;
    }

    &[data-list='1'] {
      top: 20%;
      left: 50%;
      animation: bubble 10s ease-in-out infinite;
      animation-delay: 0;
    }

    &[data-list='2'] {
      top: 10%;
      left: 2.5%;
      animation: bubble 10s reverse ease-in-out infinite;
      animation-delay: 0.3s;
    }

    &[data-list='3'] {
      top: 15%;
      left: 29.5%;

      @media (width < 96rem) {
        left: 29%;
      }
    }

    &[data-list='4'] {
      top: 50%;
      left: 17.5%;
    }

    &[data-list='5'] {
      top: 3%;
      right: 15%;
    }
  }
}

.typewriter {
  &::before {
    content: '';
    animation: typing 1.5s steps(1) 1;
    animation-fill-mode: forwards;
    animation-delay: 1.4s;
  }
}

@keyframes typing {
  0% {
    content: '';
  }

  /* 第一段打字過程 */
  // 雨水積磚 · 儲集框架的五大優點：
  5% {
    content: '雨';
  }

  10% {
    content: '雨水';
  }

  15% {
    content: '雨水積';
  }

  20% {
    content: '雨水積磚';
  }

  25% {
    content: '雨水積磚 · ';
  }

  30% {
    content: '雨水積磚 · 儲';
  }

  35% {
    content: '雨水積磚 · 儲集';
  }

  40% {
    content: '雨水積磚 · 儲集框';
  }

  45% {
    content: '雨水積磚 · 儲集框架';
  }

  50% {
    content: '雨水積磚 · 儲集框架的';
  }

  55% {
    content: '雨水積磚 · 儲集框架的五';
  }

  60% {
    content: '雨水積磚 · 儲集框架的五大';
  }

  65% {
    content: '雨水積磚 · 儲集框架的五大優';
  }

  70% {
    content: '雨水積磚 · 儲集框架的五大優點';
  }

  75% {
    content: '雨水積磚 · 儲集框架的五大優點：';
  }

  100% {
    content: '雨水積磚 · 儲集框架的五大優點：';
  }
}

.advantage-list {
  padding-left: 0;
  list-style: none;
  counter-reset: item;

  li {
    position: relative;
    display: inline-block;
    padding-left: 8px;
    margin-right: 15px;
    counter-increment: item;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &::before {
      content: counter(item) '. ';
      font-weight: 700;
      color: #333;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 4px;
      width: 100%;

      // height: 2.5px;
      height: 0;
      background-color: var(--color-primary);
      opacity: 0.35;

      // transition: transform 0.25s ease-out;
      transition: all 0.3s ease;
      content: '';

      // transform: scaleX(0);

      // underline position
      transform-origin: bottom center;
    }

    &.hover::after {
      height: 40%;

      // transform: scaleX(1);
    }
  }
}

@keyframes bubble {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
