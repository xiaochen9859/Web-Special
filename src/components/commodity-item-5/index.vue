<template>
	<div class="commodity-content" v-if="gooods && gooods.length > 0">
		<div class="flex-center commodity-item" v-for="(cItem,index) in gooods" v-bind:key="index" @click="goDetail(cItem.id)">
			<img v-lazy="cItem.pictureUrl" class="commodity-img">
			<div class="commodity-info">
				<div class="commodity-title">{{cItem.name}}</div>
					<div class="commodity-label-info">
						<span class="commodity-label">{{cItem.titleTag}}</span>
					</div>
				<div class="commodity-price-info">
					<div class="commodity-price">
						<span class="commodity-price-num">市场价￥{{cItem.standardList.marketPrice}}</span>
						<div class="commodity-price-title">友米团尊享价</div>
					</div>
					<div class="commodity-price-mnum fix">
						<span class="commodity-price-mnum-info" v-if="currentCat === '明日预告'">?</span>
						<span class="commodity-price-mnum-info" v-else>￥{{cItem.standardList.sellPrice}}</span>
					</div>
					<div class="commodity-btn">立即开抢</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {goodDetailLink} from '../../util/common.js';
	export default {
		name: 'commodity-item-5',
		props: {
			gooods: Array,
			currentCat: String
		},
		methods:{
			goDetail(id) {
				goodDetailLink(id)
			}
		}
	}
</script>
<style lang="css" scope>
    		body,
			html {
				padding: 0;
				margin: 0;
			}
			
			.fix {
				display: block;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				-ms-flex: 1;
				flex: 1;
			}
			
			.commodity-content {
				background: rgb(237, 237, 237);
				padding: 5px;
			}
			
			.commodity-item {
				border-radius: 6px;
				background: #fff;
				padding: 20px 0 20px 8px;
				margin-bottom: 10px;
			}
			
			.commodity-img {
				width: 118px;
				height: 118px;
				border: 1px solid rgb(191, 191, 191);
				border-radius: 6px;
			}
			
			.commodity-info {
				width: calc(100% - 136px);
				height: 120px;
				margin-left: 13px;
			}
			
			.commodity-title {
				height: 38px;
				font-size: 14px;
				font-weight: bold;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				padding-right: 5px;
			}
			.commodity-label-info {
				height: 43px;
				margin-top: 12px;
				font-size: 8px;
				background: url(https://cj.uniplaza.com/special/images/YMT1029logo.png) no-repeat;
				background-size: 14px 18px;
			}
			
			.commodity-label {
				color: #fff;
				border-radius: 20px;
				background: rgb(255, 61, 61);
				padding: 1px 10px;
				display: inline-block;
				margin-bottom: 5px;
				margin-left: 17px;
			}
			
			.commodity-price-info {
				height: 20px;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			
			.commodity-price {
				text-align: left;
				font-size: 12px;
			}
			
			.commodity-price-num {
				text-align: left;
				font-size: 12px;
				text-decoration: line-through;
				color: #b2b2b2;
			}
			
			.commodity-price-title {
				color: #c7995b;
			}
			
			.commodity-price-mnum {
				text-align: left;
				font-size: 12px;
				color: #c7995d;
				padding-top: 15px;
			}
			
			.commodity-btn {
				text-align: center;
				color: #fff;
				border-radius: 10px;
				padding: 1px 5px;
				background: #c7995d;
				font-size: 12px;
				margin-right: 3px;
				margin-top: 9px;
			}
			
			.flex-center {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.commodity-label-img {
				width: 14px;
				margin-right: 3px;
			}
			
			.commodity-price-mnum-info {
				font-size: 14px;
				font-weight: bold;
			}
</style>