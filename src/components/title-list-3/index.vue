<template>
	<div class="flex-flow storesList" id="titleList" v-bind:class="{'barFixed': barFixed}">
        <div class="flex-33 flex-flow borderbtm" v-bind:class="{'right-content': index < data.length - 1}" v-for="(item, index) in data" v-bind:key="index">
            <div class="storesItem" v-bind:class="{'check': storesIndex == index}" @click="storesCheck(index)"  v-if="item.name">{{item.name}}</div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'title-list-3',
  props:{
      data: Array
  },
  data: function () {
    return {
		barFixed: false,
        storesIndex: 0,
        offsetTop: 0,
        isSetHeight: false,
    }
  },
  mounted(){
	window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
	window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    tabHeight () {
      return this.$store.state.stores.tabHeight
    }
  },
  methods:{
      	storesCheck(index) {
            this.storesIndex = index;
            this.$store.dispatch({
              type: 'stores/setStoresIndex',
              storesIndex: index
            })
            let viewHeight = document.documentElement.clientHeight;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let nodes = document.getElementsByClassName('store-cover');
            //  console.log('nodes',nodes)
            for(let i = 0; i < nodes.length; i--) {
                if (i == index) {
                    console.log('top',nodes[i].getBoundingClientRect().top)
                    document.documentElement.scrollTop = nodes[i].getBoundingClientRect().top + scrollTop - viewHeight / 4;
                    document.body.scrollTop = nodes[i].getBoundingClientRect().top + scrollTop - viewHeight / 4;
                }
            }
            // console.log('scrollTop',scrollTop)
        },
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let viewHeight = document.documentElement.clientHeight;
            let viewBottom = scrollTop + viewHeight;
            let offsetTop = this.offsetTop
            if (offsetTop <= 0) {
                offsetTop = document.querySelector('#titleList').offsetTop
                this.offsetTop = offsetTop
            }
            scrollTop > offsetTop ? this.barFixed = true : this.barFixed = false
            
            let nodes = document.getElementsByClassName('store-cover');
            if (nodes.length > 0) {
                let tabHeight = [];
                // console.log('nodes',nodes)
                for(let i = 0; i < nodes.length; i++) {
                    // console.log(nodes[i].offsetTop)
                    // console.log('nodes[i]===',nodes[i].getBoundingClientRect().top)
                    tabHeight.push(nodes[i].getBoundingClientRect().top)
                }
                // console.log('tabHeight===',tabHeight)
                // console.log('viewHeight===',viewHeight)
                let storesIndex = this.storesIndex;
                for(let i = 0; i < tabHeight.length; i++) {
                    if (tabHeight[i] > viewHeight - 80) {
                        // console.log('tabHeight匹配',i)
                        storesIndex = i - 1 >= 0 ? i - 1 : 0;
                        break;
                    } else {
                      if (i == tabHeight.length - 1) {
                        storesIndex = tabHeight.length - 1;
                      }
                    }
                }
                this.storesIndex = storesIndex;
                this.$store.dispatch({
                    type: 'stores/setStoresIndex',
                    storesIndex: storesIndex
                })
            }
		}
  }
}
</script>

<style lang="css" scoped>
.flex-flow{
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: relative;
  flex-flow: wrap;
}
.storesList{
	background: #ffffff;
  padding: 10px 0;
}
.barFixed{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
}
.borderbtm{
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 14px;
}
.borderbtm:nth-of-type(4),.borderbtm:nth-of-type(5),.borderbtm:nth-of-type(6){
			border: none;
		}
.storesItem{
	position: relative;
	text-align: center;
	padding: 10px 0 0 0;
	border-bottom: 4px solid transparent;
  color: #666666;
  -webkit-touch-callout: none;
}

.storesList .check{
  color: #b30a1d;
  font-weight: bold;
}

.storesList .check::before{
	content: '';	/*CSS伪类用法*/
	position: absolute;         /*定位背景横线的位置*/
	top: 100%;
	right: 0;
	background: linear-gradient(to bottom, rgba(224, 22, 43, 1), rgba(208, 18, 38, 1), rgba(224, 22, 44, 1));       /*宽和高做出来的背景横线*/
	width: 100%;
	height: 5px;
  border-radius: 30px;
  }

.right-content:after{
	content: '';	/*CSS伪类用法*/
	position: absolute;         /*定位背景横线的位置*/
	top: 45%;
	transform: translateY(-50%);
	right: 0;
	background: rgb(179,179,179);       /*宽和高做出来的背景横线*/
	width: 1px;
	height: 14px;
}
</style>
