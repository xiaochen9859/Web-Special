import { getRequest } from './request.js';
// import shareInfo from '../config/shareConfig.js';
// console.log('shareInfo',shareInfo)
export function setShare(shareInfo) {
    if(/android/i.test(navigator.userAgent) && "undefined" != typeof android) {
      var ym_share_inviteno = android.getInvitatCode();
      shareInfo.shareUrl += ym_share_inviteno;
      android.startShare(shareInfo.title, shareInfo.content, shareInfo.shareUrl, shareInfo.imgUrl);
    }
    else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && window.webkit && window.webkit.messageHandlers && "undefined" != typeof window.webkit.messageHandlers.ios_open_page) {
      var code = window.prompt("getInvited");
      shareInfo.shareUrl += code;
      var shareInfo = JSON.stringify({
        "title": shareInfo.title,
        "content": shareInfo.content,
        "url": shareInfo.shareUrl,
        "share_type": '0',
        "image": shareInfo.imgUrl
      });
      window.webkit.messageHandlers.ios_add_share.postMessage(shareInfo);
    }else{
      var ua = window.navigator.userAgent.toLowerCase()
      if(ua.match(/MicroMessenger/i) + '' === 'micromessenger'){
        // window.wx.miniProgram.getEnv(res => {
        //     if (res.miniprogram) {  //小程序webView打开网页传递数据
        //   // var share = {
        //   // 	title: shareInfo.title,
        //   // 	content: shareInfo.content,
        //   // 	image: shareInfo.imgUrl,
        //   // 	miniUrl: "https://cj.uniplaza.com/gz_active/huiyuanzhuanqu/huiyuanduxian.html?ym_share_inviteno=" + getUrl('inviteno'),
        //   // 	path: "poster"
        //   // }
        //   // window.wx.miniProgram.postMessage({ data: { share: share } })
        //     } else {
        //       setWeiXinWebShare(); //这个是正常打开网页设置分享
        //     }
        //   })
        setWeiXinWebShare(shareInfo); //这个是正常打开网页设置分享
      }
    }
  };
  function setWeiXinWebShare(shareInfo) {
    let url = "/rest/v2/wechat/getShareParameter?shareUrl=" + encodeURIComponent(window.location.href);
    console.log('setWeiXinWebShare', url);
    getRequest(url,{}).then(function (res) {
        console.log(res);
        if (res.result) {
          let result = res.result;
          wx.config({
              debug: false,
              appId: "wx09d9aee6ef3049bc",
              timestamp: result.timeStamp,
              nonceStr: result.nonceStr,
              signature: result.signature,
              jsApiList: [
              // 所有要调用的 API 都要加到这个列表中
              "onMenuShareTimeline",
              "onMenuShareAppMessage"
              ]
          });
          wx.ready(function() {
              wx.onMenuShareAppMessage({
                title: shareInfo.title,
                desc: shareInfo.content,
                link: window.location.href,
                imgUrl: shareInfo.imgUrl,
                success: function(res) {},
                cancel: function(res) {},
                fail: function(res) {
                    // tip('分享错误', 250);
                    // location.reload();
                }
              });
              //分享到朋友圈
              wx.onMenuShareTimeline({
                title: shareInfo.title,
                link: window.location.href,
                imgUrl: shareInfo.imgUrl,
                success: function(res) {},
                cancel: function(res) {},
                fail: function(res) {
                    // tip('分享错误', 250);
                    // location.reload();
                }
              });
          });
          wx.error(function(res){
              console.log('wx.error', res)
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }