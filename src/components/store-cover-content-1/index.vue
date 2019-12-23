<template>
    <img v-lazy="src" class="img">
</template>

<script>
export default {
  name: 'store-cover-content-1',
  props:{
      src: ''
  }
}
</script>

<style lang="css" scoped>
.img {
	width: 100%;
	display: block;
}
</style>
