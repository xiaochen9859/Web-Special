<template>
		<div class="commodity-content"  v-if="goods && goods.length >0">
			<div class="flex-center">
				<div class="commodity-item"  v-for="cItem in goods" v-bind:key="cItem.id" @click="goDetail(cItem.id)">
					<img v-lazy="cItem.image" class="commodity-img"/>
					<div class="commodity-title">{{cItem.name}}</div>
					<div class="commodity-price-info">
                        <div class="commodity-price">￥{{cItem.price}}</div>
                        <div class="commodity-original-price">￥{{cItem.originalPrice}}</div>
                        <div class="commodity-btn"><img src="https://cj.uniplaza.com/special/images/gbtn.png"/></div>
					</div>
				</div>
			</div>			
		</div>
</template>
<script>
import { goodDetailLink } from '../../util/common.js';
export default {
  name: 'commodity-item-3',
  props:{
      goods: Array
  },
  methods:{
	  	goDetail(id){
            goodDetailLink(id)
	  	}
  }

}
</script>
<style lang="css" scoped>
		.commodity-content {
				background: rgb(255, 255, 255);
				padding: 10px;
			}
			.flex-center {
				display: flex;
				align-items: center;
				justify-content: space-around;
				flex-wrap: wrap;
				box-sizing: border-box;
			}	
			.commodity-content .commodity-item:nth-child(1){
				margin-right: 2%;
			}
			.commodity-item {
				border-radius: 6px;
				background: #FFF;
				padding: 10px;
				margin-bottom: 10px;
				border: 1px solid #e9e9e9;
				width: 48%;
				box-sizing: border-box;
			}
			.commodity-img {
				width: 100%;
				height: 140px;
				border-radius: 6px;		
			}
			.commodity-title {
				height: 38px;
				font-size: 12px;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		   .commodity-price-info {
				height: 30px;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			.commodity-btn {
				color: #fff;
				border-radius: 8px;
				background: #ff3d3d;
				padding: 0 10px;
			}
			.commodity-btn img{
				width: 12px;
				height: 11px;
			}
			.mgr10{
				margin-right: 10px;
			}
			.commodity-price{
				text-align: left;
				width: 40%;
				font-size: 14px;
				color: rgb(255, 61, 61);
				line-height: 40px;
			}
			.commodity-original-price {
				text-align: left;
				width: 50%;
				font-size: 12px;
				text-decoration: line-through;
				color: rgb(203, 203, 203);
				line-height: 30px;
			}

</style>