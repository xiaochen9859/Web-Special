<template>
    <div class="flex-center store-description-content" v-if="description && (description.label || description.content)">
        <div class="flex-start store-description-info" v-if="description.align == 0">
            <div class="description-label">{{description.label}}</div>
            <div class="description-content">{{description.content}}</div>
        </div>
        <div class="flex-start store-description-info" v-if="description.align == 1">
            <div class="description-content">{{description.content}}</div>
            <div class="description-label">{{description.label}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'store-description-content-1',
  props:{
      description: Object
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
.store-description-content{
	/*width:100%;*/
	/*height: 155px;*/
	background: #fff;
	padding: 13px 20px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
.store-description-info{
    border: 1px solid rgb(235, 2, 7);
    border-radius: 50px;
    overflow: hidden;
    font-size: 14px;
}
.store-description{
	color: #666666;
	font-size: 12px;
	line-height: 2.3;
	text-align: center;
}
.description-label{
    color: #fff;
    background: rgb(235, 2, 7);
    border-radius: 50px;
    padding: 1px 10px;
    text-align: center;
    overflow: hidden;
}
.description-content{
    color: rgb(235, 2, 7);
    margin: 0 10px; 
}
</style>
