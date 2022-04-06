<script setup lang="ts">
import { toggleDark, isDark } from '../src/composables/dark';

// import { boCardTag, boCard } from '@BookingOnline/vue3-vite-component-library-template';

// This starter template is using Vue 3 <script setup> SFCs

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// const { t, availableLocales, locale } = useI18n();
// const { availableLocales, locale } = useI18n().locale.effect;
var locale = ref(useI18n().locale);
var Test = ref<string>(useI18n().locale.value);
watch(
  () => Test.value,
  (first) => {
    console.log('here');
    if (locale.value != '') {
      locale.value = Test.value;
    }
  }
);
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-black dark:text-white text-2xl m-4">{{ $t('intro.desc') }}</h1>
    <!-- <boCardTag v-on:click="toggleDark"><p class="text-md">This is component library example!</p></boCardTag> -->
    <button v-on:click="toggleDark" class="absolute top-5 left-5">
      <!-- <p>Dark theme is</p> -->
      <i :style="{ color: isDark ? '#e5e54f' : '#000000' }" :class="['fas fa-2x', isDark ? 'fa-lightbulb-on' : 'fa-lightbulb-slash']"></i>
    </button>
    <!-- <div class="grid md:grid-cols-6 md:gap-10 my-20">
      <boCard class="md:col-start-2 col-start-2 md:col-span-2 bg-gray-900 dark:bg-white">
        <template v-slot:image><img class="w-full" :src="'https://via.placeholder.com/500'" alt="Sunset in the mountains" /></template>
        <template v-slot:title><p class="text-white dark:text-black">Title</p></template>
        <template v-slot:description><p class="text-white dark:text-black">Description</p></template>
        <template v-slot:tags>
          <boCardTag>#test</boCardTag>
        </template>
      </boCard>
      <boCard class="md:col-start-4 col-start-2 md:col-span-2 bg-gray-900 dark:bg-white">
        <template v-slot:image><img class="w-full" :src="'https://via.placeholder.com/500'" alt="Sunset in the mountains" /></template>
        <template v-slot:title><p class="text-white dark:text-black">Title</p></template>
        <template v-slot:description><p class="text-white dark:text-black">Description</p></template>
        <template v-slot:tags>
          <boCardTag>#test</boCardTag>
        </template>
      </boCard>
    </div> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
