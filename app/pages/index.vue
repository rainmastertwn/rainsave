<script lang="ts" setup></script>

<template>
  <!-- title -->
  <section class="container mt-10 mb-12 grid grid-cols-12">
    <div class="bg-primary col-span-10 col-start-2 px-20 py-8 text-white">
      <h1 class="mb-4 text-4xl font-semibold">Rain SAVE 雨水積磚</h1>
      <div class="cross-arrow mb-4 flex"></div>
      <div class="flex items-center" data-aos="fade-up" data-aos-delay="200">
        <h2 class="typewriter min-w-[320px] text-4xl font-semibold"></h2>
        <h2 class="text-4xl font-semibold">
          &nbsp·&nbsp工廠直營&nbsp·&nbsp價格保證&nbsp·&nbsp品質保證
        </h2>
      </div>
    </div>
  </section>
  <!-- product review -->
  <section class="container mb-12 grid grid-cols-12 gap-10">
    <div class="col-span-6 col-start-2" data-aos="zoom-out" data-aos-delay="550">
      <img class="w-full" src="~/assets/images/product@main.png" alt="Product Image" srcset="" />
    </div>
    <div
      class="col-span-4 flex flex-col justify-center pl-5"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <h3 class="mb-6 text-2xl font-bold">雨水積磚 · 儲集框架的五大優點：</h3>
      <ol class="advantage-list ml-5 list-decimal">
        <li class="text-xl">儲集框架 95%儲水體積。</li>
        <li class="text-xl">4cm側板提升水平抗壓能力。</li>
        <li class="text-xl">連續性的柱狀支撐結構。</li>
        <li class="text-xl">多方向性的組裝方式。</li>
        <li class="text-xl">穩固的側板卡扣設計。</li>
      </ol>
    </div>
  </section>
  <section class="container">
    <div class="overflow-hidden rounded border-2 border-black">
      <img class="w-full" src="https://placehold.co/1440x360" alt="占位圖" />
    </div>
  </section>

  <div class="height-space"></div>
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

.typewriter {
  &::before {
    content: '';
    animation: typing 8s steps(1) 1;
    animation-fill-mode: forwards;
    animation-delay: 0.8s;
  }
}

.height-space {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2000px;
}

@keyframes typing {
  0% {
    content: '';
  }

  /* 第一段打字過程 */
  2% {
    content: '基';
  }

  4% {
    content: '基地';
  }

  6% {
    content: '基地保';
  }

  8% {
    content: '基地保水';
  }

  10% {
    content: '基地保水 · ';
  }

  12% {
    content: '基地保水 · 流';
  }

  14% {
    content: '基地保水 · 流出';
  }

  16% {
    content: '基地保水 · 流出抑';
  }

  18% {
    content: '基地保水 · 流出抑制';
  } /* 停留 */

  /* 第一段倒退 */
  30% {
    content: '基地保水 · 流出抑';
  }

  31% {
    content: '基地保水 · 流出';
  }

  32% {
    content: '基地保水 · 流';
  }

  33% {
    content: '基地保水 · ';
  }

  34% {
    content: '基地保水';
  }

  35% {
    content: '基地保';
  }

  36% {
    content: '基地';
  }

  37% {
    content: '基';
  }

  38% {
    content: '';
  }

  /* 第二段打字過程 */
  42% {
    content: '基';
  }

  44% {
    content: '基地';
  }

  46% {
    content: '基地保';
  }

  48% {
    content: '基地保水';
  }

  50% {
    content: '基地保水 · ';
  }

  52% {
    content: '基地保水 · 流';
  }

  54% {
    content: '基地保水 · 流出';
  }

  56% {
    content: '基地保水 · 流出抑';
  }

  58% {
    content: '基地保水 · 流出抑制';
  }

  60% {
    content: '基地保水 · 流出抑制';
  }

  100% {
    content: '基地保水 · 流出抑制';
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

.advantage-list {
  li {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}
</style>
