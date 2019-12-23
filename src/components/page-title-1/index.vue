<template>
    <div class="store-title-content" v-if="titleArray && titleArray.length > 0">
        <div class="store-title-info">
            <div class="store-title" v-for="(titleItem, titleIndex) in titleArray" v-bind:key="titleIndex">{{titleItem}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'page-title-1',
  props:{
      titleArray: Array
  },
  data: function () {
    return {

    }
  },
  mounted(){

  },
  updated(){

  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
.store-title-content{
	/*width:100%;*/
	/*height: 155px;*/
	background: #fff;
	padding: 13px 20px;
	/* border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px; */
}
.store-title-info{
	width: 100%;
	padding: 20px 0;
}
.store-title{
	color: #666666;
	font-size: 12px;
	line-height: 2.3;
	text-align: center;
}
.store-icon-block{
	margin-top: 10px;
}
</style>
