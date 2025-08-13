<script lang="ts" setup></script>

<template>
  <section class="container mb-16 grid grid-cols-12 gap-10">
    <div class="col-span-10 col-start-2 lg:col-span-6 lg:col-start-2">
      <img class="w-full" src="~/assets/images/product@main.png" alt="Product Image" srcset="" />
    </div>
    <div
      class="col-span-10 col-start-2 flex flex-col justify-center pl-5 lg:col-span-4"
      data-aos="fade-up"
      data-aos-delay="550"
    >
      <!-- <h3 class="mb-4 text-2xl font-bold">雨水積磚 · 儲集框架的五大優點：</h3> -->
      <h3 class="typewriter mb-4 min-h-[32px] text-2xl font-bold"></h3>
      <ol class="advantage-list ml-5 list-decimal">
        <li class="pl-2 text-xl">儲集框架 95%儲水體積。</li>
        <li class="pl-2 text-xl">4cm側板提升水平抗壓能力。</li>
        <li class="pl-2 text-xl">連續性的柱狀支撐結構。</li>
        <li class="pl-2 text-xl">多方向性的組裝方式。</li>
        <li class="pl-2 text-xl">穩固的側板卡扣設計。</li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
  li {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
