<template>
  <div ref="root" class="toguro-example">Example</div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { InjectCssInShadowRootFromString } from '@/helpers/css-injector';
  import thisCss from './example.scss';

  const root = ref<HTMLDivElement>();
  onMounted(() => {
    InjectCssInShadowRootFromString(thisCss);
  });
</script>
