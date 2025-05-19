//史山变量
var nr = document.getElementById("nr");
var blog = document.getElementById("blog");
var lx = document.getElementById("lx");
var pj = document.getElementById("pj");
var fd = document.getElementById("fd");
var bt_pj = document.getElementById("bt_pj");
var bt_fd = document.getElementById("bt_fd");
var bt_lx = document.getElementById("bt_lx");
var bt_arti = document.getElementById("bt_arti");
var bt_gz = document.getElementById("gz");
var pl1 = document.getElementById("pl1")
var pl2 = document.getElementById("pl2")
var comment1 = document.getElementById("comment1")
var comment2 = document.getElementById("comment2")
    // 这段脚本会在页面加载时立即执行，用于判断用户设备类型并进行跳转

    // 定义移动端页面的文件名
    const mobilePage = "https://sakurasen.cn/m";
    const pcPage = "https://sakurasen.cn/";

    // 获取当前浏览器的User Agent字符串
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // 获取当前屏幕的宽度
    const screenWidth = window.innerWidth;

    // 定义一个函数来判断是否为移动设备
    function isMobileDevice() {
        // 检查User Agent字符串是否包含常见的移动设备关键词
        // 正则表达式 /Mobi/i 表示不区分大小写地匹配 'Mobi'
        // 正则表达式 /Android/i 表示不区分大小写地匹配 'Android'
        // 正则表达式 /iPhone/i 表示不区分大小写地匹配 'iPhone'
        // 正则表达式 /iPad/i 表示不区分大小写地匹配 'iPad'
        const isMobileUA =
            /Mobi/i.test(userAgent) ||
            /Android/i.test(userAgent) ||
            /iPhone/i.test(userAgent) ||
            /iPad/i.test(userAgent);

        // 设定一个屏幕宽度的阈值，小于这个值通常认为是移动设备
        const mobileWidthThreshold = 768; // 单位是像素

        // 同时满足以下两个条件之一，则判断为移动设备：
        // 1. User Agent表明是移动设备
        // 2. 屏幕宽度小于设定的阈值
        // 您可以根据需要调整这里的逻辑，例如要求必须同时满足两个条件
        return isMobileUA || screenWidth < mobileWidthThreshold;
    }

    // 执行判断并跳转
    if (!isMobileDevice()) {
        // 如果不是移动设备，跳转到移动端页面
        // window.location.replace() 会替换当前页面历史记录，用户按返回键不会回到这个跳转页
        window.location.replace(pcPage);
    }
//获取评论数
twikoo.getCommentsCount({
    envId: 'https://c.sakurasen.cn',
    urls: [
        '/#1',
        '/#2',
    ],
    includeReply: false
}).then(function (res) {
    document.getElementById("pls1").innerText = res[0].count;
    document.getElementById("pls2").innerText = res[1].count;
    console.log(res);
}).catch(function (err) {
    console.error(err);
});

//全局监听
comment1.addEventListener("click", fcomment1)
comment2.addEventListener("click", fcomment2)
document.getElementById("like").addEventListener("click", like)
document.getElementById("like2").addEventListener("click", like2)
document.getElementById("share").addEventListener("click", share)

//链接跳转
document.querySelector(".cbox.qq").addEventListener("click", function () {
    window.open("https://jq.qq.com/?_wv=1027&k=G2D7IA7x");
});
document.querySelector(".cbox.steam").addEventListener("click", function () {
    window.open("https://steamcommunity.com/id/SakuraSenQwQ");
});
document.querySelector(".cbox.necm").addEventListener("click", function () {
    window.open("https://music.163.com/#/user/home?id=2031695727");
});
document.querySelector(".cbox.github").addEventListener("click", function () {
    window.open("https://github.com/SakuraSenQwQ");
});
document.querySelector(".cbox.feedback").addEventListener("click", function () {
    window.open("https://blog.sakurasen.cn/feedback");
});
document.querySelector(".cbox.bilibili").addEventListener("click", function () {
    window.open("https://space.bilibili.com/511629145");
});
document.querySelector(".pbox.blog").addEventListener("click", function () {
    window.open("https://blog.sakurasen.cn/");
});
document.querySelector(".pbox.index").addEventListener("click", function () {
    window.open("https://blog.sakurasen.cn/post/index/");
});
document.querySelector(".pbox.loli").addEventListener("click", function () {
    window.open("https://loli.sakurasen.cn/");
});
document.querySelector(".pbox.stack").addEventListener("click", function () {
    window.open("https://github.com/SakuraSenQwQ/hugo-theme-stack");
});
document.querySelector(".pbox.bmoji").addEventListener("click", function () {
    window.open("https://bmoji.sakurasen.cn/");
});
document.querySelector(".pbox.bd").addEventListener("click", function () {
    window.open("https://sakurasen.cn/bd/");
});
document.querySelector(".pbox.tw").addEventListener("click", function () {
    window.open("https://sakurasen.cn/ask/");
});
function like() {
    try {
        document.getElementById("liked").remove();
        document.getElementById("like").innerHTML = "<img src='icon/like.svg'>999-1";
    } catch (error) {
        document.getElementById("like").innerHTML = "<img src='icon/likered.svg' id='liked'>999+1";
    }
}
function like2() {
    try {
        document.getElementById("like2d").remove();
        document.getElementById("like2").innerHTML = "<img src='icon/like.svg'>999-1";
    } catch (error) {
        document.getElementById("like2").innerHTML = "<img src='icon/likered.svg' id='like2d'>999+1";
    }
}
function share() {
    var url = window.location.href
    navigator.clipboard.writeText(url + "\n" + "BYD网站一共两篇文章还要复制文章的链接");
    document.getElementById("share").innerHTML = "<img src='icon/share.svg'>999+ &nbsp 已复制！";
}
function fcomment1() {
    try {
        document.getElementById("c1").remove();
    } catch (error) {
        pl1.innerHTML = "<div id='c1'><div id='comments-1'></div>";
        twikoo.init({
            envId: 'https://c.sakurasen.cn/', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
            el: '#comments-1', // 容器元素
            path: `${location.pathname}#1`,
        })


    }
}
function fcomment2() {
    try {
        document.getElementById("c2").remove();
    } catch (error) {
        pl2.innerHTML = "<div id='c2'><div id='comments-2'></div>";
        twikoo.init({
            envId: 'https://c.sakurasen.cn/', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
            el: '#comments-2', // 容器元素
            path: `${location.pathname}#2`,
        })


    }
}

function geturl() {
    var url = window.location.href
    console.log(url)
}

function bar() {
    bt_arti.addEventListener("click", artis)
    bt_lx.addEventListener("click", connent)
    bt_gz.addEventListener("click", gz)
    bt_pj.addEventListener("click", fpj)
    bt_fd.addEventListener("click", ffd)
}
function toggle() {
    bt_arti.classList.remove("sel")
    bt_lx.classList.remove("sel")
    bt_fd.classList.remove("sel")
    bt_pj.classList.remove("sel")
    blog.classList.add("yc")
    lx.classList.add("yc")
    fd.classList.add("yc")
    pj.classList.add("yc")
}
function artis() {
    toggle()
    bt_arti.classList.add("sel")
    blog.classList.remove("yc")

}
function gz() {
    window.alert("为什么...")
    window.alert("为什么要取消关注我？")
    window.alert("我知道了")
    window.alert("你一定是不喜欢我吧")
    window.alert("好吧...")
    document.getElementById("body").innerHTML = "<a class='cd'>👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你👁️我会永远关注你</a>"
    setTimeout(function () {
        location.href = "/"
    }, 1500)
}

function connent() {
    toggle()
    bt_lx.classList.add("sel")
    lx.classList.remove("yc")

}
function fpj() {
    toggle()
    bt_pj.classList.add("sel")
    pj.classList.remove("yc")

}
function ffd() {
    toggle()
    bt_fd.classList.add("sel")
    fd.classList.remove("yc")

}
bar()