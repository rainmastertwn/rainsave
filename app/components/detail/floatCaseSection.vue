<script lang="ts" setup></script>

<template>
  <section class="container mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-1.png"
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
        src="detail/floatCase-2.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">錯誤: 施工完成後僅回填側邊</h4>

      <div class="cover-left"></div>
      <h5 class="z-1 text-white text-2xl font-bold">浮力問題發生前</h5>
    </div>
    <div class="case two-line relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-3.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-xl font-bold">施作儲水型<br />因大雨蓄水後造成浮力</h4>

      <div class="cover-left"></div>
      <h5 class="z-1 text-white text-2xl font-bold">浮力問題發生中</h5>
    </div>
    <div class="case two-line relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-4.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover-left"></div>
      <h5 class="z-1 text-white text-2xl font-bold">浮力問題發生中</h5>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-5.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">災後現場</h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-6.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">災後現場</h4>

      <div class="cover-left"></div>
      <h5 class="z-1 text-white text-2xl font-bold">浮力問題發生後</h5>
    </div>
    <div class="case two-line relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-7.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-xl font-bold">災後處理。<br />以抽水機將儲集之雨水抽出</h4>
    </div>
    <div class="case relative overflow-hidden rounded-md">
      <NuxtImg
        class="z-0 w-full h-full object-cover"
        src="detail/floatCase-8.png"
        alt=""
        srcset=""
        loading="lazy"
      />
      <div class="cover"></div>
      <h4 class="z-1 text-white text-2xl font-bold">開挖後重新埋設一次</h4>
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

  .cover-left {
    position: absolute;
    top: 16px;
    left: 0;

    // width: 190px;
    width: 0;
    height: 50px;
    background-color: var(--color-default-blue);
    opacity: 0.7;
    transition: all 0.3s ease;

    @media (width < 64rem) {
      width: 190px;
    }

    + h5 {
      position: absolute;
      top: 26px;
      left: 8px;
      opacity: 0;

      @media (width < 64rem) {
        opacity: 1;
      }
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

    .cover-left {
      width: 190px;

      + h5 {
        opacity: 1;
      }
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
