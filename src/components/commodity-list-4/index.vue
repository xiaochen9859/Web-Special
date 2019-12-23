<template>
    <div>
        <div class="stores-content">
            <storeCoverContent1 :src="storeCover"></storeCoverContent1>
            <storeTitleContent1 :titleArray="title"></storeTitleContent1>
            <commodityItem1 :commodity="commodity"></commodityItem1>
		</div>
	</div>
</template>

<script>
import commodityItem1 from '../commodity-item-1/index.vue';

export default {
  name: 'commodity-list-4',
  props:{
      data: Array
  },
  components: {
      commodityItem1
  },
  computed: {
    storesIndex () {
      return this.$store.state.stores.storesIndex
    },
    storeCover(){
      if(this.data) {
        return this.data[this.$store.state.stores.storesIndex].image
      }
      return ''
    },
    title(){
      if(this.data) {
        return this.data[this.$store.state.stores.storesIndex].title
      }
      return ''
    },
    commodity(){
      if(this.data) {
        return this.data[this.$store.state.stores.storesIndex].commodity
      }
      return []
    }
  }
}
</script>

<style lang="css" scoped>

</style>
