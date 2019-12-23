<template>
    <div class="store-cover">
        <img v-lazy="src" class="img">
    </div>
</template>

<script>
export default {
  name: 'store-cover-content-2',
  props:{
      src: ''
  }
}
</script>

<style lang="css" scoped>
.img {
	width: 100%;
	display: block;
	border-radius: 6px;
}
.store-cover{
	padding: 0 10px;
}
</style>
