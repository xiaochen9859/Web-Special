
export function setCookie(c_name,value,expire) {
    if (expire) {
        var date=new Date()
        date.setSeconds(date.getSeconds()+expire)
        document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
    } else {
        document.cookie=c_name+ "="+escape(value)+";"
    }
    // console.log('setCookie',document.cookie)
}
 
export function getCookie(c_name){
    if (document.cookie.length>0){
        let c_start=document.cookie.indexOf(c_name + "=")
        // console.log('getCookie',c_start)
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            } 
        }
    return ""
}
 
export function delCookie(c_name){
    setCookie(c_name, "", -1)
}



export function isArray(o){
    if(o===null){
        return false;
    }
    if(o instanceof Array){
        return true
    }else{
        return false;
    }
};



export function fomatTime(time){
    if (!time){
        return '';
    }
    let date = new Date(parseInt(time));
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return [year, month, day].map(fomatNum).join('-') +  ' ' + [hours, minutes].map(fomatNum).join(':')
}

export function fomatNum(num){
    return num >= 10 ? num : `0${num}`;
}
