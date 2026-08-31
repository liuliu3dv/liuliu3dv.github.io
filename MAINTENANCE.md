# 个人主页维护指南

本主页采用 **React + Tailwind CSS** 构建，数据与代码分离。所有内容数据存储在 `src/client/src/data.json` 中，首次访问默认英文，并支持中文 / English 双语切换。用户选择的语言会保存在浏览器中，后续访问优先使用已保存的选择。

## 页面结构

- `#/`：首页，展示研究方向、开源项目、代表性发表物和近期动态。
- `#/publications`：完整发表物列表，论文标题保持英文原题。
- `#/about`：个人介绍、工作经历、教育背景与专业任职。

采用 hash 路由，直接访问或刷新子页面时无需 GitHub Pages 的服务器路由支持。

## 头像与访问统计

头像保存在 `src/client/public/profile-dscf1311.jpg`，使用本人提供的 `DSCF1311.JPG` 原图；首页与个人介绍页均在名字左侧通过 CSS 居中显示为方形头像，不修改原始照片。

访问统计由 `VisitorCounter.tsx` 中的 [Hits](https://hits.sh/docs/) 图片计数器提供，无需注册或后端。统计的是页面加载次数，不是去重人数；本地预览不计数，部署到网站域名后自动启用。统计面板为 `https://hits.sh/liuliu3dv.github.io/`。该第三方服务的可用性不由本仓库保证。

## 文件结构

```
├── index.html              # 部署入口（构建产物）
├── assets/                 # 构建产物（JS/CSS）
├── .nojekyll               # GitHub Pages 配置
├── MAINTENANCE.md          # 本文件
└── src/                    # 源码目录
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    └── client/
        ├── index.html      # Vite 入口模板
        └── src/
            ├── main.tsx
            ├── App.tsx
            ├── data.json           # 核心数据文件（修改这里即可更新内容）
            ├── types.ts            # 数据类型定义
            ├── index.css           # 全局样式 / 主题色
            ├── lib/utils.ts        # 工具函数
            ├── contexts/ThemeContext.tsx
            ├── pages/Home.tsx      # 主页布局
            └── components/
                ├── ProfileCard.tsx      # 个人信息卡片
                ├── LanguageToggle.tsx   # 中英语言切换
                ├── ResearchFocusSection.tsx # 研究方向
                ├── ExperienceSection.tsx    # 工作经历
                ├── NewsSection.tsx      # 动态列表
                ├── PublicationList.tsx  # 论文列表
                ├── ErrorBoundary.tsx    # 错误边界
                └── ui/                 # 基础 UI 组件
                    ├── badge.tsx
                    └── button.tsx
```

## 如何更新内容

### 1. 添加新论文
打开 `src/client/src/data.json`，在 `papers` 数组的**最前面**添加新的论文对象：

```json
{
  "title": "论文标题",
  "authors": "Liu Liu, Co-Author A, Co-Author B",
  "venue": "CVPR",
  "year": 2026,
  "paper_link": "https://arxiv.org/abs/xxxx",
  "code_link": "https://github.com/xxxx",
  "project_page": "https://xxxx.github.io",
  "tags": ["Oral", "3D Vision"]
}
```

如果某个链接不存在（如代码未开源），将该字段设为 `""` 即可，图标会自动隐藏。

论文可选填 `roles`，标注本人已确认的角色：`"project_lead"`（项目负责人）与 `"corresponding_author"`（通讯作者）。例如 `"roles": ["project_lead", "corresponding_author"]`；未确认的条目不填。角色在首页代表发表物和完整列表中同步显示，支持双语。

### 2. 更新动态 (News)
在 `news` 数组的**最前面**添加新的动态：

```json
{
  "date": "2026-02",
  "content": "One paper accepted to CVPR 2026!",
  "content_zh": "一篇论文被 CVPR 2026 接收！"
}
```

### 3. 修改双语内容

英文内容使用原字段，中文内容使用带 `_zh` 后缀的字段，例如 `bio` / `bio_zh`、`content` / `content_zh`。论文题目和作者保持原始英文，不做翻译。

### 4. 修改研究方向与工作经历

分别编辑 `research_focus`、`experience`、`education` 和 `service` 数组。每一项均提供英文与中文字段；新增内容时请同步维护两种语言。

## 如何构建与发布

```bash
cd src
npm ci          # 安装锁定版本依赖
npm run dev     # 本地预览
npm run check   # TypeScript 检查
npm run build   # 构建生产版本
```

构建完成后，将 `src/dist/` 目录下的内容复制到仓库根目录（覆盖 `index.html` 和 `assets/`），然后推送到 GitHub 即可。
