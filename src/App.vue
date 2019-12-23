<template>
  <div class="app">
      <home></home>
  </div>
</template>

<script>
import home from './pages/Home/index.vue';
export default {
  name: 'app',
  components: {
    'home': home
  },
  data: function () {
    return {
    }
  },
  computed: {

  },
  watch: {
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style>
body{
  width:100%;
  height:100%;
  padding: 0;
  margin: 0;
}
</style>
