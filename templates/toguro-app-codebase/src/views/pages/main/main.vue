<template>
  <div class="toguro-main">
    <h2 class="text-center">{{ $t('your-app') }} [{{ appLoaded }}]</h2>
    <toguro-example />
  </div>
</template>

<script setup lang="ts">
  import gettersOfApp from '@/store/modules/app/getters';
  import { computed } from 'vue';
  import toguroExample from '@/views/components/example/example.vue';
  import { useLang } from '@/services/lang-service';
  const { $t } = useLang();
  const appLoaded = computed(gettersOfApp.appLoaded);
</script>
