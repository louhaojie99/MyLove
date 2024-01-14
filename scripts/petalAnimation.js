/**
 * 花瓣特效
 */

// 放置一些特效脚本
// 创建花瓣元素
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  // 设置花瓣的样式
  const size = Math.random() * 20 + 10; // 花瓣大小随机
  const color = getRandomColor(); // 花瓣颜色随机
  const startX = Math.random() * window.innerWidth; // 花瓣起始位置随机

  petal.style.width = size + "px";
  petal.style.height = size + "px";
  petal.style.background = color;
  petal.style.borderRadius = "50%";
  petal.style.position = "fixed";
  petal.style.top = "-20px";
  petal.style.left = startX + "px";

  document.body.appendChild(petal);

  // 使用 GSAP 库实现花瓣散落动画
  gsap.to(petal, {
    y: window.innerHeight + 20, // 花瓣下落到屏幕底部
    rotation: Math.random() * 360, // 花瓣旋转角度随机
    ease: "power1.easeInOut",
    duration: 5, // 花瓣下落的时间
    onComplete: () => {
      petal.remove(); // 动画完成后移除花瓣元素
    },
  });
}

// 生成随机颜色
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 每隔一段时间创建一个花瓣
setInterval(createPetal, 200);
