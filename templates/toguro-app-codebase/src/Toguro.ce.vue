<script setup lang="ts">
  import { onMounted } from 'vue';
  import appDispatcher, { AppActionTypes } from './store/modules/app/actions';
  import ToguroMain from './views/pages/main/main.vue';

  onMounted(() => {
    appDispatcher(AppActionTypes.SETUP_APP);
  })
</script>

<template>
  <div class="toguro-app">
    <toguro-main />
  </div>
</template>

<style lang="scss" src="./Toguro.scss"></style>
