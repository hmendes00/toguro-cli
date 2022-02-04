<script lang="ts">
  import { defineComponent } from 'vue';
import appDispatcher, { AppActionTypes } from './store/modules/app/actions';
import ToguroMain from './views/pages/main/main.vue';

  export default defineComponent({
    components: { ToguroMain },
    mounted() {
      appDispatcher(AppActionTypes.SETUP_APP);
    }
  });
</script>

<template>
  <div class="toguro-app">
    <toguro-main />
  </div>
</template>

<style lang="scss" src="./Toguro.scss"></style>
