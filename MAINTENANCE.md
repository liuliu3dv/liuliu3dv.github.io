# 个人主页维护指南

本主页采用 **React + Tailwind CSS** 构建，数据与代码分离。所有内容数据存储在 `src/client/src/data.json` 中。

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

### 2. 更新动态 (News)
在 `news` 数组的**最前面**添加新的动态：

```json
{
  "date": "2026-02",
  "content": "One paper accepted to CVPR 2026!"
}
```

### 3. 修改个人信息
直接修改 `profile` 对象中的字段，如 `bio`、`affiliation` 等。

## 如何构建与发布

```bash
cd src
pnpm install    # 安装依赖
pnpm run dev    # 本地预览 (http://localhost:3000)
pnpm run build  # 构建生产版本
```

构建完成后，将 `src/dist/` 目录下的内容复制到仓库根目录（覆盖 `index.html` 和 `assets/`），然后推送到 GitHub 即可。
