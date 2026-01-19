# 个人主页维护指南

本主页采用**数据驱动**的设计，您无需修改任何代码（HTML/JS/CSS）即可更新内容。所有数据都存储在 `client/src/data.json` 文件中。

## 📂 文件结构

- `client/src/data.json`: **核心数据文件**（修改这里即可更新主页）
- `client/src/types.ts`: 数据结构定义（仅供开发参考）
- `client/src/components/`: 页面组件（如需修改样式可编辑此处）

## 🚀 如何更新内容

### 1. 添加新论文
打开 `client/src/data.json`，在 `papers` 数组的**最前面**添加新的论文对象：

```json
{
  "title": "您的论文标题",
  "authors": "Liu Liu, Co-Author A, Co-Author B",
  "venue": "CVPR",
  "year": 2026,
  "paper_link": "https://arxiv.org/abs/xxxx",
  "code_link": "https://github.com/xxxx",
  "project_page": "https://xxxx.github.io",
  "tags": ["Oral", "3D Vision"]
}
```

*注意：如果某个链接不存在（如代码未开源），请将该字段设为 `""` (空字符串) 或直接删除该字段，图标会自动隐藏。*

### 2. 更新动态 (News)
在 `news` 数组的**最前面**添加新的动态：

```json
{
  "date": "2026-02",
  "content": "One paper accepted to CVPR 2026!"
}
```

### 3. 修改个人信息
直接修改 `profile` 对象中的字段，如 `bio` (简介), `affiliation` (机构) 等。

## 🛠 如何发布更新

### 方法 A: 使用 GitHub 网页版 (推荐)
1. 在 GitHub 仓库中找到 `client/src/data.json` 文件。
2. 点击右上角的 ✏️ 图标进行编辑。
3. 修改完成后，点击 **Commit changes**。
4. GitHub Actions 会自动构建并部署（如果配置了 Action），或者您需要在本地构建后推送 `dist` 文件夹。

### 方法 B: 本地构建 (高级)
如果您在本地修改了代码或数据：

1. 安装依赖：`npm install`
2. 启动预览：`npm run dev`
3. 构建项目：`npm run build`
4. 将 `dist` 目录下的内容推送到 GitHub 仓库。

## 🎨 进阶修改
- **更换头像**：将图片放入 `client/public/images/` 目录，并在代码中引用。
- **修改样式**：编辑 `client/src/index.css` 修改全局配色或字体。
