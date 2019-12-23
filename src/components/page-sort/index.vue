<template>
    <!-- <div v-if="pageSort && pageSort.length > 0 && pageData">
        <div v-for="(item, index) in pageSort" v-bind:key="index">
           <pageCover :src="pageData.pageCover" v-if="pageData.pageCover && item == 'page-cover'"></pageCover>
            <template v-if="pageUiId == 1">
                <titleList1 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'title-list'"></titleList1>
                <commodityList1 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'commodity-list'"></commodityList1>
            </template>
            <template v-if="pageUiId == 2">
                <pageTitle1 :titleArray="pageData.pageTitle" v-if="item == 'page-title'"></pageTitle1>
                <titleList2 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'title-list'"></titleList2>
                <commodityList2 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'commodity-list'"></commodityList2>
            </template>
            <template v-if="pageUiId == 4">
               <titleList1 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'title-list'"></titleList1>
              <commodityList4 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'commodity-list'"></commodityList4>
            </template>  
            <template  v-if="pageUiId == 5">
              <commodityList5 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'commodity-list'"></commodityList5>
            </template>
             <template v-if="pageUiId == 6">
                <titleList3 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'title-list'"></titleList3>
                <commodityList6 :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'commodity-list'"></commodityList6>
            </template>
            <moreContent :data="pageData.stores" v-if="pageData.stores && pageData.stores.length > 0 && item == 'more-content'"></moreContent>          
        </div>
    </div> -->
    <div>
      <!-- <div v-if="pageData"> {{pageData.subjectName}}</div> -->
       <div v-if="pageData">
            <pageCover :src="pageData.pictureUrl" v-if="pageData.pictureUrl"></pageCover>
            <titleList1 :data="pageData.categories" v-if="pageData.categories && pageData.categories.length > 0"></titleList1>
            <commodityList1 :data="pageData.categories" v-if="pageData.categories && pageData.categories.length > 0 "></commodityList1>
       </div>
    </div>
</template>
<script>
    import pageCover from '../page-cover/index.vue';
    // import pageTitle1 from '../page-title-1/index.vue';
    import titleList1 from '../title-list-1/index.vue';
    // import titleList2 from '../title-list-2/index.vue';
    // import titleList3 from '../title-list-3/index.vue';
    import commodityList1 from '../commodity-list-1/index.vue';
    // import commodityList2 from '../commodity-list-2/index.vue';
    // import commodityList4 from '../commodity-list-4/index.vue';
    // import commodityList5 from '../commodity-list-5/index.vue';
    // import commodityList6 from '../commodity-list-6/index.vue';
    // import moreContent from '../more-content/index.vue';
    export default {
        name: 'page-sort',
        props:{
            // pageSort: Array,
            pageData: Object,
            // pageUiId: Number
        },
        components: {
            pageCover,
            // pageTitle1,
            titleList1,
            // titleList2,
            commodityList1
            // commodityList2,
            // moreContent,
            // commodityList4,
            // titleList3,
            // commodityList5,
            // commodityList6
                },
        data: function () {
            return {
                
            }
        },
        mounted(){
            // console.log('result', this.pageSort)
            
        },
        methods: {
        
        }
    }
</script>

<style lang="css" scoped>

</style>
