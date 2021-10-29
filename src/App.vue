<template>
  <ThemeProvider
    :theme="{
      primary: '#FF8D00',
      secondary: '#ffffff',
      text: '#000000',
      textLight: '#555555',
      badgeBg: '#eeeeee',
      hr: '#cccccc',
      body: '#9DA4BA',
      trHover: '#F5F5F5',
      error: '#B00020',
    }"
  >
    <HomePage />
  </ThemeProvider>
</template>

<script>
import { defineComponent } from 'vue';
import { ThemeProvider } from 'vue3-styled-components';
import HomePage from './container';

export default defineComponent({
  name: 'App',
  components: { ThemeProvider, HomePage },
  setup() {
    return {};
  },
});
</script>

<style lang="css">
*,
*::before,
*::after,
html,
body {
  box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
body {
  margin: 0;
  padding: 0;
  background-color: #efefef50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
