//测试服数据
let config = {
    // baseUrl: ""
    baseUrl: "/api",
}

//正式服数据
if(process.env.NODE_ENV === 'production'){
    config = {
        baseUrl: "https://cj.uniplaza.com"
    }
}

export default config;