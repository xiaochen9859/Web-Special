<template>
    <div class="flex-center stores-search-content">
        <div class="flex-center stores-search" @click="goSearch">
            <span>去主会场浏览更多商品</span>
            <img src="https://cj.uniplaza.com/special/images/storeIcon_3.png" class="storeIcon_2">
        </div>
    </div>
</template>

<script>
import { fn_go_Category } from '../../util/common.js';
export default {
  name: 'more-content-2',
  props:{
      data: Array
  },
  methods:{
        goSearch(){
	  		let stores = this.data;
	  		let index = this.storesIndex;
	  		let id = stores[index].catId;
            fn_go_Category(id)
		}
  },
  computed: {
    storesIndex () {
      return this.$store.state.stores.storesIndex
    }
  },
}
</script>

<style lang="css" scoped>
.stores-search-content{
	padding: 10px 10px 20px;
  background: rgb(246,213,194);
}
.stores-search{
	font-size: 14px;
	color: rgb(160,5,23);
	border-radius: 20px;
	padding: 2px 10px;
	border: 1px solid rgb(220,150,142);
}
.storeIcon_2{
	width: 14px;
	height: 14px;
	margin-left: 6px;
}
</style>
