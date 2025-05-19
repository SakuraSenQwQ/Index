    // 这段脚本会在页面加载时立即执行，用于判断用户设备类型并进行跳转

    // 定义移动端页面的文件名
    const mobilePage = "https://sakurasen.cn/m/";

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
    if (isMobileDevice()) {
      // 如果是移动设备，跳转到移动端页面
      // window.location.replace() 会替换当前页面历史记录，用户按返回键不会回到这个跳转页
      window.location.replace(mobilePage);
    }
tg();
function contents() {
  tg();
  const box = document.querySelector(".connect");
  if (box) box.classList.add("qwq");
  setTimeout(shadow, 500);
}

function shadow() {
  
  document.querySelectorAll(".BLOG1").forEach(box => {

    box.classList.add("shadow");
    
    setTimeout(infoshadow, 500);
  });
}

function infoshadow() {
  document.querySelectorAll(".more1").forEach(box => {
    box.classList.add("infoshadow");
    setTimeout(t1, 500);
  });
}
function blux() {
  document.querySelectorAll(".blux").forEach(box => {
    box.classList.toggle("load");
  });
}
function start() {
  console.log("此页面埋藏了两个彩蛋，如果你找到了会有M3来告诉你哦")
  let str = "SakuraSen's Index Page.";
  let str_ = "";
  let i = 0;
  let content = document.getElementById("H1");
  
  let timer = setInterval(() => {
    if (str_.length < str.length) {
      str_ += str[i++];
      content.innerHTML = "<h1>" + str_ + " | </h1>";
    } else {
      clearInterval(timer);
      content.innerHTML = "<h1 >" + str_ + "</h1>";
      document.querySelector(".H1")?.classList.add("shin");
      

    }
  }, 40);
}
function t1() {
  document.querySelector(".info").classList.add("t1");
  setTimeout(t2, 500);
}
function t2() {
  document.querySelector(".ba").classList.add("t2");
}
// 统一入口
window.addEventListener('load', () => {
  setTimeout(blux, 2500)
  start();
  setTimeout(contents, 1500);
  
  // 模糊切换功能
  document.querySelector("a.toggle-blur")?.addEventListener("click", function(e) {
    e.preventDefault();
    const blux = document.querySelector(".blux");
    blux?.classList.toggle("load");
    this.textContent = blux?.classList.contains("load") 
      ? "禁用模糊效果" 
      : "启用模糊效果";
  });

});
document.querySelector("div.H1")?.addEventListener("click", function(e) {
  e.preventDefault();
   document.querySelector("img.bt").classList.add("hhh")
});
document.querySelector("img.bt")?.addEventListener("click", function(e) {
  e.preventDefault();
   document.querySelector(".cj2").classList.add("hhh")
});
function tg() {
  document.querySelector(".more").classList.toggle("dis")
  document.querySelector(".more1").classList.toggle("dis")
  document.querySelector(".info").classList.toggle("dis")
  document.querySelector(".ftt").classList.toggle("dis")
}