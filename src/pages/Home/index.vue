<template>
	<div class="home-content">
		<!-- <pageSort :pageSort="pageSort" :pageData="pageData" :pageUiId="pageUiId"></pageSort> -->
		<pageSort :pageData="pageData"></pageSort>
		<!-- <div v-if="pageData"> {{pageData.subjectName}}</div> -->
	</div>
</template>

<script>
import { postRequest, getRequest } from '../../util/request.js';
import { setShare } from '../../util/share.js';
import pageSort from '../../components/page-sort/index.vue';
  
export default {
	name: 'Home',
	components: {
		pageSort
	},
	data: function () {
		return {
			// pageSort: [],
			// pageUiId: 1,
			pageData: null,
		}
	},
	computed: {

	},
	watch: {
		$route:{
			handler(router) {
			if(router.path == '/home'){
				if (router.query.id){
				this.getJson(router.query.id);
				}
			}
			},
			immediate: true
		}
	},
	created(){

	},
	mounted(){
	},
	destroyed () {
	},
	methods:{
			getJson(id) {
				console.log('id', id)
				let self = this;
				// https://cj.uniplaza.com/special/tabItem/international/api/international.json		  
				let url = `https://sales.uniplaza.com:11003/v1/page/info?id=${id}`
				postRequest(url, {}).then((res) => {
					console.log('jsonRes', res)		
					this.pageUiId = parseInt(res.homePageId) || 1; //页面UI
					// this.pageSort = res.pageSort || []; //页面UI的排序
					this.pageData = res.data || null; //专题商品的数据
					console.log('shareTitle', res.data.thumbnailsUrl)	
					if (res.data.subjectName) {
						document.title = res.data.subjectName
					}

					setShare({
						title: res.data.shareTitle,
						content: res.data.shareDetail,
						shareUrl: `${window.location.href}&ym_share_inviteno=`,
						imgUrl: res.data.thumbnailsUrl
					});
				})
			}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
	padding: 0;
	margin: 0;
	background: rgb(237,237,237);
}
.img {
	width: 100%;
	display: block;
}
.stores-content{
	position: relative;
	overflow: hidden;
}
.flex-center{
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.flex-start{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: relative;
}
.flex-25{
	width: 25%;
	position: relative;
}
.flex-33{
	width: 33.33%;
	position: relative;
}
</style>
