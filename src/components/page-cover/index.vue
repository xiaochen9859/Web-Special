<template>
    <div class="stores-content" id="storesTop">
		<img v-lazy="src" class="img">
	</div>
</template>

<script>
export default {
  name: 'page-cover',
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
.stores-content{
	position: relative;
	overflow: hidden;
}
</style>
