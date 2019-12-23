<template>
    <div class="flex-center storesList" id="titleList" v-bind:class="{'barFixed': barFixed}">
      <div class="flex-center" v-for="(item,index) in data" v-bind:key="index">
        <div class="storesItem" v-bind:class="{'check': storesIndex == index}"  @click="storesCheck(index)" v-if="item.name">{{item.name}}</div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'title-list-4',
    props:{
        data:Array
    },
    data:function () {
        return {
         barFixed: false,
         storesIndex: 0,
         offsetTop: 0
        }
    },
    mounted(){
       window.addEventListener("scroll",this.hanldScroll)
    },
    destroyed(){
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        storesCheck(index){
             this.storesIndex = index ;
             this.$store.dispatch({
              type: 'stores/setStoresIndex',
              storesIndex: index   
             })
        },
        hanldScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = this.offsetTop;
            if(offsetTop <= 0){
                offsetTop = document.querySelector("#titleList").offsetTop;
                this.offsetTop = offsetTop
            }
            scrollTop > offsetTop ? this.barFixed = true : this.barFixed = false
        }
    }
};
</script>
<style lang="css" scope>
.storesList {
  background: #fff;
  padding: 9px 0 14px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.barFixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}

.storesItem {
  position: relative;
  text-align: center;
  padding: 3px 15px;
  border: 1px solid #999999;
  border-radius: 15px;
  color: #999;
}

.storesItem:nth-of-type(1) {
  margin-right: 14px;
}

.storesList .check {
  border: 0;
  background: #c7995d;
  color: #fff;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>