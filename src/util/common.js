function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    console.log('result',result)
    if(result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

export function goodDetailLink(good_id) {
    if(getQueryString("ym_share_inviteno") == "") {
        var ym_share_inviteno = null;
    } else {
        var ym_share_inviteno = getQueryString("ym_share_inviteno");
    }
    if(/android/i.test(navigator.userAgent) && "undefined" != typeof android) {
        android.startGoodsDetail(good_id)('com.uniplaza.fenx.mall.activity.GoodsDetailsActivity:::gId->' + good_id);
    } else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && "undefined" != typeof window.webkit && "undefined" != typeof window.webkit.messageHandlers && "undefined" != typeof window.webkit.messageHandlers.ios_open_page) {
        window.webkit.messageHandlers.ios_open_page.postMessage('ProductDetailViewController:::goodId->' + good_id);
    } else {
        location.href = 'https://m.uniplaza.com/goodDetail?good_id=' + good_id + "&ym_share_inviteno=" + ym_share_inviteno;
    }
}

export function fn_go_Category(cat_id) {
    if(getQueryString("ym_share_inviteno") == "") {
        var ym_share_inviteno = null;
    } else {
        var ym_share_inviteno = getQueryString("ym_share_inviteno");
    }
    if(/android/i.test(navigator.userAgent) && "undefined" != typeof android) {
        android.openPage('com.uniplaza.fenx.mall.activity.CatListActivity:::cat_id->' + cat_id)
    } else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && "undefined" != typeof window.webkit && "undefined" != typeof window.webkit.messageHandlers && "undefined" != typeof window.webkit.messageHandlers.ios_open_page) {
        window.webkit.messageHandlers.ios_open_page.postMessage('MallCategoryViewController:::topCatId->' + cat_id);
    } else {
        location.href = 'https://m.uniplaza.com/goodCatList?cat_id=&top_cat_id=' + cat_id + "&ym_share_inviteno=" + ym_share_inviteno;
    }
}