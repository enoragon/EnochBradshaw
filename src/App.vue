<template>
  <v-app dark class="dark">
    <navbar></navbar>
    <router-view/>
    <foot></foot>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'
export default {
  components: {
    Navbar,
    Foot
  }
}
</script>

<style lang='stylus'>

  $color-pack = false;
  @import '~vuetify/src/stylus/main.styl'
</style>