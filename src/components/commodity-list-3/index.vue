<template>
    <div class="commodity-content-new" v-if="commodity && commodity.length > 0 ">
         <div class="commodity-item-new" v-for="cItem in commodity" v-bind:key="cItem.id" @click="goDetail(cItem.id)">
              <div class="commodity-img-item">
                    <img v-lazy="cItem.image"  class="img-responsive">
                    <div class="commodity-price-newinfo">
                        <div class="commodity-newprice">
                            <span>限时价</span>
                             <span class="commodity-price-num">￥{{cItem.price}}</span>
                         </div>
                         <div class="commodity-original-newprice">原价 ￥{{cItem.originalPrice}}</div>
                    </div>
              </div>
              <div class="commodity-info-new">
                      <div class="commodity-orther-newinfo">
                           <div class="commodity-label-info">
                              <div class="commodity-title-new">{{cItem.name}}</div>
                           </div>
                           <div class="commodity-format-new">{{cItem.format}}</div>
                      </div>
                      <div class="commodity-btn">
                         <img src="https://cj.uniplaza.com/special/tabItem/nationalday/images/buybtn.png" alt=""  class="img-responsive"></div>
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
      .img-responsive {
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
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
     
      .commodity-content-new {
          border-bottom: 1px dashed rgb(236, 236, 236);
      }

      .commodity-img-item {
          position: relative;
      }

      .commodity-item-new {
          border-radius: 6px;
          background: #fff;
          padding: 20px 10px 0 10px;
          margin-bottom: 10px;
      }

      .commodity-price-newinfo {
          height: 30px;
          width: 100%;
          position: absolute;
          bottom: 0;
          display: flex;

      }

      .commodity-newprice {
          text-align: center;
          width: 40%;
          line-height: 30px;
          font-size: 12px;
          color: rgb(255, 255, 255);
          background-color: rgb(255, 61, 61);
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;     
      }

      .commodity-original-newprice {
          text-align: left;
          width: 60%;
          line-height: 30px;
          font-size: 12px;
          color: rgb(255, 255, 255);
          background-color: rgba(0, 0, 0, 0.5);
          text-decoration: line-through;
          padding-left: 25px;
      }

      .commodity-info-new {
          width: 100%;
          padding: 20px 10px 15px 10px;
          display: flex;
          position: relative;
      }

      .commodity-title-new {
          font-size: 14px;
          font-weight: bold;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;

      }

      .commodity-orther-newinfo {
          width: 60%;
          margin-right: 20px;
      }

      .commodity-btn {
          width: 80px;
          height: 25px;
          position: absolute;
          right: 30px;
          top: 58px;
      }

      .commodity-format-new {
          color: rgb(102, 102, 102);
          font-size: 12px;
          padding-top: 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
</style>
