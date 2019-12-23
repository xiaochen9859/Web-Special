<template>
    <div>
        <div class="stores-content" v-if="data && data.length > 0">
            <div v-for="(item,index) in data" v-bind:key="index">             
                <storeCoverContent2 :src="item.image"></storeCoverContent2>
                <storeDescriptionContent1 :description="item.description"></storeDescriptionContent1>
                <commodityItem1 :commodity="item.commodity"></commodityItem1>
            </div>
		</div>
	</div>
</template>
<script>
import storeCoverContent2 from '../store-cover-content-2/index.vue';
import storeDescriptionContent1 from '../store-description-content-1/index.vue';
import commodityItem1 from '../commodity-item-1/index.vue';
export default {
  name: 'commodity-list-6',
  props:{
      data: Array
  },
  components: {
      storeCoverContent2,
      storeDescriptionContent1,
      commodityItem1
  },
  computed: {
    storesIndex () {
      return this.$store.state.stores.storesIndex
    }
  }
}
</script>

<style lang="css" scoped>
.stores-content{
    padding-top: 20px;
    background: #fff;
}
</style>
