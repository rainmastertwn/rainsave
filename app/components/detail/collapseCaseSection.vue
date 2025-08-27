<script lang="ts" setup></script>

<template>
  <section class="container mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="case two-line relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-1.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-xl font-bold">錯誤1: 未確實整平<br />錯誤2: 開挖範圍不足</h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-2.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">準備施工中</h4>
    </div>
    <div class="case two-line relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-3.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-xl font-bold">
        施作過程中工班發現無法施工，<br />
        以現場木片、木條逕自整平。
      </h4>
    </div>
    <div class="case two-line relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-4.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-xl font-bold">
        錯誤3: 段差，使用他物整平，<br />凸起與凹洞未處理。
      </h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-5.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">持續施工中</h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-6.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">施工完成</h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-8.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">災後處理</h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/collapseCase-9.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">垃圾清運</h4>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.case {
  .cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--color-default-blue);
    opacity: 0.7;
    transition: all 0.3s ease;

    @media (width < 64rem) {
      height: 64px;
    }
  }

  h4 {
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.2s ease;
    transition-delay: 0.1s;

    @media (width < 64rem) {
      opacity: 1;
    }
  }

  &.two-line {
    .cover {
      @media (width < 64rem) {
        height: 80px;
      }
    }

    h4 {
      bottom: 12px;
    }
  }

  &:hover {
    .cover {
      height: 64px;
    }

    &.two-line {
      .cover {
        height: 80px;
      }
    }

    h4 {
      opacity: 1;
    }
  }
}
</style>
