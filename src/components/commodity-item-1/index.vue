<template>
    <div class="commodity-content" v-if="commodity && commodity.length > 0 ">
        <div class="flex-center commodity-item" v-for="cItem in commodity" v-bind:key="cItem.id" @click="goDetail(cItem.id)">
            <img v-lazy="cItem.image" class="commodity-img">
            <div class="commodity-info">
                <div class="commodity-title">{{cItem.name}}</div>
                <div class="commodity-orther-info">
                    <div class="commodity-format">{{cItem.format}}</div>
                    <div class="commodity-label-info">
                        <span class="commodity-label">{{cItem.label}}</span>
                    </div>
                </div>
                <div class="commodity-price-info">
                    <div class="commodity-price">
                        <span>活动价￥</span>
                        <span class="commodity-price-num">{{cItem.price}}</span>
                    </div>
                    <div class="commodity-original-price">原价 ￥{{cItem.originalPrice}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { goodDetailLink } from '../../util/common.js';
export default {
  name: 'commodity-item-1',
  props:{
      commodity: Array
  },
  methods:{
	  	goDetail(id){
            goodDetailLink(id)
	  	}
  }
}
</script>

<style lang="css" scoped>
.commodity-content{
	background: rgb(237,237,237);
	padding: 10px;
}
.commodity-item{
	border-radius: 6px;
	background: #fff;
	padding: 20px 0 20px 16px;
	margin-bottom: 10px;
}
.commodity-img{
	width: 118px;
	height: 118px;
	/* border: 2px solid rgb(191,191,191); */
	border-radius: 6px;
}
.commodity-info{
	width: calc(100% - 136px);
	height: 120px;
	margin-left: 16px;
}
.commodity-title{
	height: 38px;
	font-size: 14px;
	font-weight: bold;
	word-break: break-all;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.commodity-orther-info{
	height: 62px;
}
.commodity-format{
	color: rgb(102, 102, 102);
	font-size: 12px;
	padding-top: 6px;
}
.commodity-label-info{
	margin-top: 6px;
	font-size: 8px;
}
.commodity-label{
	color: #fff;
	border-radius: 20px;
	background: rgb(255,61,61);
	padding: 1px 10px;
	display: inline-block;
}
.commodity-price-info{
	height: 20px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.commodity-price{
	text-align: left;
	width: 50%;
	font-size: 12px;
	color: rgb(255,61,61);
}
.commodity-price-num{
	font-size: 16px;
}
.commodity-original-price{
	text-align: center;
	width: 50%;
	font-size: 12px;
	text-decoration:line-through;
	color: rgb(203,203,203);
}
</style>
