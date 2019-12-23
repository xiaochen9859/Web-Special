<template>
 	<div class="commodity-content" v-if="commodity && commodity.length > 0">
				<div class="flex-center commodity-item" v-for="cItem in commodity" v-bind:key ="cItem.id" @click="goDetail(cItem.id)">
					<img  class="commodity-img" v-lazy="cItem.image">
					<div class="commodity-info">
						<div class="commodity-title">{{cItem.name}}</div>
							<div class="commodity-label-info">{{cItem.label}}</div>
						<div class="commodity-price-info">
							<div class="commodity-price">
								<span>￥</span>
								<span class="commodity-price-num">{{cItem.price}}</span>
							</div>
							<div class="commodity-original-price">市场价￥{{cItem.originalPrice}}</div>
						</div>
						<div class="commodity-profit-info">
							<div class="commodity-profit">
								最高收益
							</div>
							<div class="commodity-profit-price">
								<span>￥</span>
								<span class="commodity-profit-num">{{cItem.profitPrice}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
import {goodDetailLink} from "../../util/common.js";
export default {
  name: 'commodity-item-4',
  props: {
      commodity: Array
  },
  methods: {
      goDetail(id){
          goodDetailLink(id);
      }
  }
};
</script>
<style lang="css" scope>
* {
  padding: 0;
  margin: 0;
}
.commodity-content {
  background: rgb(237, 237, 237);
  padding: 10px;
}

.commodity-item {
  border-radius: 6px;
  background: #fff;
  padding: 20px 0 20px 16px;
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
  margin-left: 16px;
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
}
.commodity-format {
  color: rgb(102, 102, 102);
  font-size: 12px;
  padding-top: 6px;
}

.commodity-label-info {
  height: 20px;
  margin-top: 6px;
  font-size: 12px;
  color: rgb(153, 153, 153);
}

.commodity-label {
  color: #fff;
  border-radius: 20px;
  background: rgb(255, 61, 61);
  padding: 1px 10px;
  display: inline-block;
}

.commodity-price-info {
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
}

.commodity-price {
  text-align: left;
  width: 40%;
  font-size: 12px;
  color: rgb(254, 1, 61);
}

.commodity-price-num {
  font-size: 18px;
  font-weight: bold;
}

.commodity-original-price {
  text-align: left;
  width: 60%;
  font-size: 12px;
  text-decoration: line-through;
  color: rgb(203, 203, 203);
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.commodity-profit-info {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.commodity-profit {
  text-align: center;
  width: 40%;
  font-size: 12px;
  color: #ffffff;
  line-height: 23px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #f93701, #fa2d0c, #fd1624);
}
.commodity-profit-price {
  text-align: center;
  padding: 0 6px;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 4px;
  background: #fd0d2f;
  border-left: 1px dashed #fff;
}
.commodity-profit-num {
  font-size: 14px;
}
</style>