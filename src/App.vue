<template>
  <div>
    <MainNavigation  />
    
    <router-view />
  </div>
</template>

<script setup lang = 'ts'>

import MainNavigation from '@/components/MainNavigation.vue';
</script>

<style>
</style>
