<template>
    <div>
        <div class="stores-content">
            <commodityItem5 :gooods="goods" :currentCat="currentCat"></commodityItem5>
		</div>
	</div>
</template>

<script>
    import commodityItem5 from '../commodity-item-5/index.vue';

    export default {
        name: 'commodity-list-1',
        props:{
            data: Array
        },
        components: {
            commodityItem5
        },
        computed: {
            storesIndex () {
                return this.$store.state.stores.storesIndex
            },
            storeCover() {
                if (this.data) {
                    return this.data[this.$store.state.stores.storesIndex].image
                }
                return ''
            },
            title() {
                if (this.data) {
                    return this.data[this.$store.state.stores.storesIndex].title
                }
                return ''
            },
            goods() {
                if (this.data) {
                    return this.data[this.$store.state.stores.storesIndex].goods
                }
                return []
            },
            currentCat() {
                return  this.data ? this.data[this.$store.state.stores.storesIndex].name : "";
            }
        }
    }
</script>

<style lang="css" scoped>

</style>
