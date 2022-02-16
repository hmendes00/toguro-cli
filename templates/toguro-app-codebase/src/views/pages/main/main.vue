<template>
  <div class="toguro-main">
    <h2 class="text-center">{{ $t('your-app') }} [{{ appLoaded }}]</h2>
    <toguro-example />
  </div>
</template>

<script setup lang="ts">
  import gettersOfApp from '@/store/modules/app/getters';
  import { computed, onMounted, ref } from 'vue';
  import toguroExample from '@/views/components/example/example.vue';
  import { useLang } from '@/services/lang-service';
  import { InjectCssInShadowRootFromString } from '@/helpers/css-injector';
  import thisCss from './main.scss';

  const root = ref<HTMLDivElement>();
  const { $t } = useLang();
  const appLoaded = computed(gettersOfApp.appLoaded);

  onMounted(() => {
    InjectCssInShadowRootFromString(root.value!, thisCss);
  });
</script>
