<template>
  <div class="toguro-main">
    <h2 class="text-center">{{ $t('your-app') }} [{{ appLoaded }}]</h2>
    <toguro-example />
  </div>
</template>

<script lang="ts">
  import LangMixin from '@/services/lang-service';
import { mapGetters } from '@/store';
import gettersOfApp from '@/store/modules/app/getters';
import toguroExample from '@/views/components/example/example.vue';
import { defineComponent } from '@vue/runtime-core';

  const ToguroMain = defineComponent({
    components: { toguroExample },
    mixins: [LangMixin],
    computed: {
      ...mapGetters({
        appLoaded: gettersOfApp.appLoaded
      })
    }
  });

  export default ToguroMain;
</script>
