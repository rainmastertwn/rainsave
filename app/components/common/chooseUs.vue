<script lang="ts" setup></script>

<template>
  <section class="container mb-16 grid grid-cols-12">
    <div class="col-span-12 lg:col-span-5 lg:col-start-2 mr-0 mb-8 lg:mb-0 lg:mr-6">
      <div class="rounded-md overflow-hidden">
        <img class="w-full" src="~/assets/images/whyChooseUs.png" alt="" srcset="" />
      </div>
    </div>
    <div class="col-span-12 lg:col-span-5 lg:col-start-7 ml-0 lg:ml-6">
      <h3 class="mb-6 text-center text-3xl font-bold">選擇我們的5大原因</h3>
      <ol class="ml-6 mb-10 list-decimal">
        <li class="text-lg">先期的規劃設計，後期的安裝施工，提供全面向服務能力。</li>
        <li class="text-lg">豐富的工作經驗，多元的資料供您參考，幫助您做出最準確的決策。</li>
        <li class="text-lg">安裝過程的詳實紀錄，縮時攝影、施工照片一應俱全。</li>
        <li class="text-lg">用健康的心態，燦爛的微笑和謹慎的頭腦幫助您完成工程上的一切所需。</li>
        <li class="text-lg">我們有親切感也好相處，很期待認識你們大家。</li>
      </ol>
      <h3 class="mb-6 text-center text-3xl font-bold">相關企業及產品</h3>
      <div class="flex flex-col md:flex-row items-center justify-center">
        <a href="#" target="_blank" class="share-link mr-10 flex items-center mb-6 md:mb-0">
          <img class="mr-3 w-[35px] h-auto" src="~/assets/images/coinn@logo.png"></img>
          <div class="flex flex-col text-center">
            <h3 class="blue text-lg font-bold ">意動創新有限公司</h3>
            <p class="font-light text-sm leading-none">www.coinn.com.tw</p>
          </div>
        </a>
        <a href="#" target="_blank" class="share-link flex items-center  ">
          <img class="mr-3 w-[40px] h-auto" src="~/assets/images/rainline@logo.png"></img>
          <div class="flex flex-col text-center">
            <h3 class="red text-lg font-bold">RAIN LINE PP 截水溝</h3>
            <p class="font-light text-sm leading-none">www.rainline.com.tw</p>
          </div> 
        </a>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
ol {
  li {
    padding-left: 8px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

.share-link{
  &:hover {
    h3::after {
      // transform: scaleX(1);
      height: 40%;
    }
  }

  h3 {
    position: relative;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      opacity: 0.35;
      transition: all .3s ease;

      // transition: transform 0.25s ease-out;
      content: '';

      // transform: scaleX(0);

      // underline position
      transform-origin: bottom center;
    }

    &.red::after {
      background-color: #f24646;
    }

    &.blue::after {
      background-color: #193b8b;
    }
  }

  
}
</style>
