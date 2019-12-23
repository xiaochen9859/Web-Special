<template>
    <img v-bind:src="baseSrc" v-bind:style="imgStyle" />
</template>

<script>
export default {
  name: 'BaseImage',
  props:{
      src: '',
      imgStyle: '',
  },
  data: function () {
    return {
      baseSrc: '',
    }
  },
  mounted(){
    // console.log('updated')
    let self = this;  
    let img = new Image();
    img.src = this.src;
    img.onload = function() {
        self.baseSrc = self.src;
        self.$emit('onLoad', self.src);
    }
  },
  updated(){

  },
  methods: {

  }
}
</script>

<style lang="css" scoped>

</style>
