<script lang="ts" setup>
import TitleSection from '~/components/common/titleSection.vue'
import AdvantageSection from '~/components/index/advantageSection.vue'
// video section
// import VideoSection from '~/components/index/videoSection.vue'
import VideoSectionMp4 from '~/components/index/videoSectionMp4.vue'

import FeatureSection from '~/components/index/featureSection.vue'
import AdSection from '~/components/common/adSection.vue'
import ConstructionSection from '~/components/index/constructionSection.vue'
import CaseStudiesSection from '~/components/index/caseStudiesSection.vue'
import ChooseUs from '~/components/common/chooseUs.vue'
import PartnerSection from '~/components/common/partnerSection.vue'
</script>

<template>
  <!-- title section -->
  <TitleSection />
  <!-- product review -->
  <AdvantageSection />

  <!-- video demo section -->
  <!-- <VideoSection /> -->
  <VideoSectionMp4 />

  <!-- feature section -->
  <FeatureSection />

  <!-- ad section -->
  <AdSection />

  <!-- construction section -->
  <ConstructionSection />

  <!-- 知識分享區塊 -->
  <CaseStudiesSection />

  <!-- choose us section -->
  <ChooseUs />

  <!-- partner section -->
  <PartnerSection />

  <div class="h-[100px]"></div>
</template>
