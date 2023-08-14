
<template>
  <Navbar/>
  <main>
    <!-- <TheWelcome /> -->
    <router-view></router-view>
  </main>
</template>

  <script>
  // import TheWelcome from '../components/TheWelcome.vue'
  import Navbar from '@/components/Navbar.vue'

  export default {
      components: {
        Navbar,
      },
      computed: {

      },
      methods: {

      },
      created () {
      
      }
  }
  </script>