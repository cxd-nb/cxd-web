# CXD · 个人网站

> 爱运动 · 爱自学 · 半 I 半 E

一个现代化、响应式的个人作品集网站，展示我的运动生活、项目作品、荣誉奖项与技能专长。纯原生技术构建，无任何框架与构建工具，开箱即用。

## ✨ 项目简介

我是 **CXD**，一名计算机工程学院 2026 级新生。这个网站是我在互联网上的「个人名片」，记录了从高中到大学的成长轨迹：

- 🚴 热爱运动，喜欢骑行、跑步、羽毛球与跆拳道
- 🎬 喜欢用镜头记录生活，在 B站 / 抖音分享作品
- 🛠️ 爱自学，掌握 PS、Blender、PR、AU 等创作工具
- 💻 熟悉 C 语言与前端开发，用代码把想法变成作品

## 🗂️ 页面导航

| 页面 | 文件 | 说明 |
| --- | --- | --- |
| 🏠 首页 | [`index.html`](index.html) | 个人介绍、关于我、探索卡片导航 |
| 🚴 运动版图 | [`sports.html`](sports.html) | 骑行、跑步、跆拳道、羽毛球与运动瞬间视频 |
| 🎬 项目展示 | [`projects.html`](projects.html) | B站视频作品与精选代表作 |
| 🏆 荣誉墙 | [`honors.html`](honors.html) | 8 项荣誉奖项与获奖证书展示 |
| 🧠 技能树 | [`skills.html`](skills.html) | PS / Blender / PR / AU / Web / GitHub 技能 |
| 📮 联系我 | [`contact.html`](contact.html) | B站、抖音、GitHub 社交链接 |

## 🎨 功能特性

- **响应式设计** — 移动优先，在 480px / 768px / 900px / 1024px 断点下均有良好显示
- **明暗主题切换** — 一键切换，偏好通过 `localStorage` 持久化保存
- **固定导航栏** — 毛玻璃背景（`backdrop-filter`）+ 滚动阴影，活跃页面自动高亮
- **移动端菜单** — 汉堡按钮展开 / 收起，带过渡动画
- **卡片式布局** — 渐变、发光与悬浮效果，视觉统一
- **平滑滚动** — 页面内锚点平滑跳转
- **视频嵌入** — 通过 Bilibili 播放器 iframe 内嵌视频

## 🛠️ 技术栈

| 技术 | 用途 |
| --- | --- |
| HTML5 | 语义化标签结构 |
| CSS3 | 自定义属性（主题变量）、Grid / Flexbox 布局、过渡动画 |
| JavaScript（原生） | 主题切换、移动端菜单、滚动阴影、平滑滚动 |
| [Font Awesome 6](https://fontawesome.com/) | 图标库（CDN） |
| [Google Fonts](https://fonts.google.com/) | Inter + Noto Sans SC 字体（CDN） |
| Bilibili 播放器 | 视频 iframe 内嵌 |

## 📁 项目结构

```text
cxd-web/
├── index.html          # 首页
├── sports.html         # 运动版图
├── projects.html       # 项目展示
├── honors.html         # 荣誉墙
├── skills.html         # 技能树
├── contact.html        # 联系我
├── css/
│   └── style.css       # 全局样式与主题变量
├── js/
│   └── script.js       # 交互脚本
├── assets/
│   ├── avatar.png      # 头像
│   ├── aboutme.jpg     # 关于我配图
│   ├── sports/         # 运动相关图片
│   ├── skills/         # 技能作品截图
│   └── honors/         # 荣誉与证书图片
├── LICENSE             # MIT 许可证
└── README.md           # 项目说明
```

## 🚀 本地运行

无需安装依赖或构建，直接用浏览器打开即可：

```bash
# 方式一：直接打开
start index.html

# 方式二：启动一个本地静态服务器（可选）
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 🎨 自定义

### 修改主题颜色

在 [`css/style.css`](css/style.css) 的 `:root` 中调整 CSS 变量：

```css
:root {
    --primary: #66ccff;        /* 主色调 */
    --primary-dark: #3ab8f5;   /* 深色版本 */
    --primary-light: #99ddff;  /* 浅色版本 */
    --bg: #f5faff;             /* 页面背景 */
    --card-bg: #ffffff;        /* 卡片背景 */
    /* 其他变量... */
}

/* 暗色模式覆盖 */
body.dark {
    --bg: #0d1117;
    --card-bg: #161b22;
    /* 其他变量... */
}
```

## 📮 联系方式

- **B站**：[CXD-NB](https://space.bilibili.com/1492000998)
- **抖音**：CXD-NB
- **GitHub**：[CXD-NB](https://github.com/CXD-NB)

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

---

⭐ 如果这个项目对你有帮助，欢迎点个 Star！
