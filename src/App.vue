<template>
  <div id="app">
    <page-header/>
    <router-view/>
    <!-- <show-bookdetails/> -->
    <!-- <list-book/> -->
  </div>
</template>

<script>
// import showBookDetails from './components/showBookDetails.vue';
// import listBook from './components/listBook.vue';
import header from './components/header.vue';

export default {
  name: 'App',
  components: {
    // 'show-bookdetails':showBookDetails,
    // 'list-book':listBook,
    'page-header': header
  }
}
</script>

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
