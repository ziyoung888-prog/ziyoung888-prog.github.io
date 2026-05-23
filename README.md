# 吴子洋个人求职网站

这是一个可部署到 GitHub Pages 的静态个人求职网站。

目标公网地址：

```text
https://ziyoung888-prog.github.io/
```

## 部署方式

在 GitHub 创建一个公开仓库：

```text
ziyoung888-prog.github.io
```

然后将本目录推送到该仓库的 `main` 分支。GitHub Pages 会自动将站点发布到用户主页地址。

## 本地预览

直接用浏览器打开：

```text
index.html
```

## 项目图片命名规范

项目图片统一放在：

```text
assets/projects/
```

命名格式：

```text
项目代号-使用位置-顺序-内容说明.扩展名
```

使用位置固定为：

```text
card    首页项目卡片缩略图
detail  项目详情页正式展示图
support 项目备用素材或暂未展示图片
```

示例：

```text
pvbess-card-01-harbour-site-thumbnail.jpg
pvbess-detail-02-pvsyst-3d-shading-scene.png
wind-detail-04-gaussian-wake-visualization.png
plc-detail-03-ladder-logic-basics.jpg
```

首页卡片图片应使用 `card` 文件，不直接复用 `detail` 文件。新增项目时，先确定项目代号，再按 `card/detail/support` 分类命名，避免后期难以匹配和替换。
