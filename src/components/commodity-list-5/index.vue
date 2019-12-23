<template>
    <div>
        <commodityItem4 :commodity = "commodity"></commodityItem4>
    </div>
</template>
<script>
import commodityItem4 from '../commodity-item-4/index.vue';
export default {
    name: 'commodity-list-5',
    props:{
        data:Array
    },
    components:{
        commodityItem4
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
