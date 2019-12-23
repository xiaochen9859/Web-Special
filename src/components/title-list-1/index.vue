<template>
	<div class="flex-center storesList" id="titleList" v-bind:class="{'barFixed': barFixed}">
        <div class="flex-25 flex-center" v-bind:class="{'right-content': index < data.length - 1}" v-for="(item, index) in data" v-bind:key="index">
            <div class="storesItem" v-bind:class="{'check': storesIndex == index}" @click="storesCheck(index)"  v-if="item.name">{{item.name}}</div>
        </div>
	</div>       
</template>

<script>
export default {
  name: 'title-list-1',
  props:{
      data: Array
  },
  data: function () {
    return {
		barFixed: false,
        storesIndex: 0,
        offsetTop: 0,
    }
  },
  mounted(){
  window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
	window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
      	storesCheck(index) {
            this.storesIndex = index;
            this.$store.dispatch({
              type: 'stores/setStoresIndex',
              storesIndex: index
            })          
        },
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = this.offsetTop
            if (offsetTop <= 0) {
                offsetTop = document.querySelector('#titleList').offsetTop
                this.offsetTop = offsetTop
            }
			      scrollTop > offsetTop ? this.barFixed = true : this.barFixed = false
    }
  }
}
</script>

<style lang="css" scoped>
.storesList{
	background: #fff;
}
.barFixed{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
}
.storesItem{
	position: relative;
	text-align: center;
	padding: 10px;
	border-bottom: 4px solid transparent;
  -webkit-touch-callout: none;
}
.storesList .check{
	border-bottom: 4px solid red;
}
.right-content:after{
	content: '';	/*CSS伪类用法*/
	position: absolute;         /*定位背景横线的位置*/
	top: 50%;
	transform: translateY(-50%);
	right: 0;
	background: rgb(179,179,179);       /*宽和高做出来的背景横线*/
	width: 1px;
	height: 13px;
}
</style>
