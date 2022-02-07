<template>
  <div class="toguro-main">
    <h2 class="text-center">{{ $t('your-app') }} [{{ appLoaded }}]</h2>
    <toguro-example />
  </div>
</template>

<script lang="ts">
  import LangMixin from '@/services/lang-service';
  import gettersOfApp from '@/store/modules/app/getters';
  import toguroExample from '@/views/components/example/example.vue';
  import { computed, defineComponent } from 'vue';

  const ToguroMain = defineComponent({
    components: { toguroExample },
    mixins: [LangMixin],
    setup() {
      const appLoaded = computed(gettersOfApp.appLoaded);
      return {
        appLoaded
      };
    }
  });

  export default ToguroMain;
</script>
