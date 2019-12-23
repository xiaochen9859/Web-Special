# housekeeper-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




### json格式
{
	"pageTitle": "国际精选好物", //页面标题
    "pageUiId": "1", //页面UIid
    "pageSort": [
    	"page-cover", //页面封面
        "page-title", //页面标题
    	"title-list", //标题选择列表
    	"commodity-list", //商品列表
    	"more-content" //更多跳转
    ],//页面大类排版
    "shareTitle": "国际精选好物", //页面分享标题
    "shareContent": "想买哪国买哪国，世界尽在我手中", //页面分享详细
    "shareImage": "https://cj.uniplaza.com/gz_active/Activities/commodityImages/common/shareIcon.jpg", //页面分享图标
    "data": {
        "pageCover": "", //顶部封面图片
        "pageTitle": [
		   	"国庆小长假逛什么？买什么？",
		    "我们都给你妥妥帖帖地安排好啦！",
		    "为你优选了数十款国庆特惠礼包",
		    "现在立马一键开启国庆大礼包~"
        ], //页面的标题
        "stores": [{
            "name": '日韩馆', //专区名字
            "image": 'https://cj.uniplaza.com/gz_active/Activities/commodityImages/common/top_img_2.jpg', //专区封面图
            "title": [
                "韩国的面膜、日本的水乳、法国的眼霜...",
                "想买哪国买哪国，世界尽在我手中，",
                "贴心服务更周到，安全购物更放心"
            ], //专区标题
            "description": {
                "label": "", //说明的标签
                "content": "Description", //说明的内容
                "align": "0" //说明标签和内容的排版位置，0:标签在左边，1：标签在右边
            }, //专区的说明
            "commodity": [
                {
                    "image": "https://cj.uniplaza.com/gz_active/Activities/commodityImages/japan/0918_1.jpg", //商品图
                    "category": "日韩馆", //商品类型名
                    "name": "海外直邮 日本 Nursery娜诗丽 舒缓卸妆啫喱 柚子味 180ml", //商品名
                    "format": "180ml", //商品规格
                    "price": "90", //商品价格
                    "originalPrice": "198", //商品原价
                    "label": "COSME大赏第一位", //商品标签
                    "id": "7439", //商品id
                }
            ],
            "catId":520, //底部更多商品的跳转链接id
        }]
    }
}