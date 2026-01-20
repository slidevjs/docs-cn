<br>
<p align="center">
<a href="https://cn.sli.dev" target="_blank">
<img src="https://sli.dev/logo-title.png" alt="Slidev" height="250" width="250"/>
</a>
</p>

<p align="center">
为开发者打造的演示文稿工具 🧑‍💻👩‍💻👨‍💻
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@slidev/cli" target="__blank"><img src="https://img.shields.io/npm/v/@slidev/cli?color=2B90B6&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@slidev/cli" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@slidev/cli?color=349dbe&label="></a>
<a href="https://cn.sli.dev/" target="__blank"><img src="https://img.shields.io/static/v1?label=&message=%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3&color=45b8cd" alt="Docs & Demos"></a>
<a href="https://cn.sli.dev/themes/gallery.html" target="__blank"><img src="https://img.shields.io/static/v1?label=&message=%E4%B8%BB%E9%A2%98&color=4ec5d4" alt="Themes"></a>
<br>
<a href="https://github.com/slidevjs/slidev" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/slidevjs/slidev?style=social"></a>
</p>

## Slidev 中文文档

欢迎来到 Slidev 中文文档站点！本文档是 https://github.com/slidevjs/slidev/tree/main/docs 的中文翻译版本。

### 开发预览

若需要本地预览网站效果，可执行如下命令：

```bash
# 全局安装 pnpm
npm i -g pnpm

# 克隆中文文档仓库
git clone git@github.com:slidevjs/docs-cn.git

# 在主仓目录使用 pnpm 安装依赖，并启动文档
pnpm i
pnpm dev
```

接着访问提示的网址（一般为 `http://localhost:5173/`）即可，你可以在 `docs-cn` 目录下对中文文档进行更新和翻译。

或者安装 [VSCode 的 Vite 插件](https://marketplace.visualstudio.com/items?itemName=antfu.vite) 快速启动开发服务器。

### 📨 如何与官网文档（英文）进行同步

目前 Slidev 中文文档翻译已全部完成。欢迎中文社区的朋友们加入我们的（半官方）QQ 群 978643067，讨论 Slidev 相关话题。

当前中文文档基于如下分支维护：

- [slidev/slidev:main](https://github.com/slidevjs/slidev/tree/main): Slidev 主仓库，英文原版
- [slidevjs/docs-cn:main](https://github.com/slidevjs/docs-cn/tree/main): Slidev 中文翻译主分支,对外发布
- [slidevjs/docs-cn:upstream](https://github.com/slidevjs/docs-cn/tree/upstream): 每天自动从 [slidev/slidev:main](https://github.com/slidevjs/slidev/tree/main) 同步的英文文档

> **文档翻译同步原理**：
> 
> 每天，主仓库 [slidev/slidev:main](https://github.com/slidevjs/slidev/tree/main) 的 `docs` 目录会通过 [GitHub Actions](./.github/workflows/autosync.yml) 自动提取到本仓库的 `upstream` 分支。经由人工不定期从 `upstream` 分支合并到 `main` 分支，完成同步、翻译、校对工作。

### 📝 参与贡献

感谢您的参与!

- **翻译新增内容** / **修正翻译错误**: 请向 [slidevjs/docs-cn:main](https://github.com/slidevjs/docs-cn/tree/main) 分支提交 PR
- **修改英文原版**: 请向 [slidevjs/slidev:main](https://github.com/slidevjs/slidev/tree/main) 提交 PR，修改会在下次自动同步时更新到 [slidevjs/docs-cn:upstream](https://github.com/slidevjs/docs-cn/tree/upstream) 分支

#### 英文文档同步流程

```
slidevjs/slidev (英文)
    ↓ 每天自动同步
slidevjs/docs-cn:upstream 分支 (英文最新)
    ↓ 更新到 Fork 或本地（应始终与 slidevjs/docs-cn:upstream 同步）
Fork/本地 upstream 分支 (英文最新)
```

#### 中文文档同步/贡献流程

```
Fork/本地 main 分支（中文文档分支，应始终与 slidevjs/docs-cn:main 同步）
    ↓ 检出新分支，命名参考 sync-cn-日期、如 sync-cn-20260101
Fork/本地 sync-cn-20260101 分支
    ↓ 翻译完成后推送至 Fork 仓库，并向 slidevjs/docs-cn:main 提交 PR
slidevjs/docs-cn:main (对外发布)
```

#### 提交规范

请参考如下提交信息标题格式:

```
docs: correct translation errors in `guide/index.md`
docs(features): translate new content in `mdc.md`
```

**提交前检查**:

- [ ] 不包含对英文原版的扩展、删减或演绎
- [ ] 已在本地预览验证
- [ ] 选择了正确的目标分支

### 贡献者

感谢各位贡献者的付出（以下排名不分先后）：

新版文档：

| _Kerman | wemsx | XiaoDong | 诺墨 |
| :-: | :-: | :-: | :-: |
| [![](https://avatars.githubusercontent.com/u/63178754?s=120&v=4)](https://github.com/kermanx) | [![](https://avatars.githubusercontent.com/u/84974015?s=120&v=4)](https://github.com/wemsx) | [![](https://avatars.githubusercontent.com/u/84657208?s=120&v=4)](https://github.com/xiaodong2008) | [![](https://avatars.githubusercontent.com/u/6902432?s=120&v=4)](https://github.com/normal-coder) |

初版文档：

| Anthony Fu | QiChang Li | 清秋 | Chuck | Songhn | ArcherGu |
| :-----: | :-------: | :-----: | :-----: | :-----: | :-----: |
| [![antfu](https://avatars.githubusercontent.com/u/11247099?s=120&v=4)](https://github.com/antfu) | [![QC-L](https://avatars.githubusercontent.com/u/13861040?s=120&v=4)](https://github.com/QC-L) | [![Ivocin](https://avatars.githubusercontent.com/u/16836801?s=120&v=4)](https://github.com/Ivocin) | [![ChuanfengZhang](https://avatars.githubusercontent.com/u/18238800?s=120&v=4)](https://github.com/ChuanfengZhang) | [![songhn233](https://avatars.githubusercontent.com/u/47357585?s=120&v=4)](https://github.com/songhn233) | [![ArcherGu](https://avatars.githubusercontent.com/u/34826812?s=120&v=4)](https://github.com/ArcherGu) | [![KimYang](https://avatars.githubusercontent.com/u/32960305?s=120&v=4)](https://github.com/KimYangOfCat)|
| Jacob | Qiang | raintygao | 六个骨头 | Kim Yang | KnowsCount |
| [![jacob-lcs](https://avatars.githubusercontent.com/u/40483898?s=120&v=4)](https://github.com/jacob-lcs) | [![iDestin](https://avatars.githubusercontent.com/u/36811055?s=120&v=4)](https://github.com/iDestin) | [<img src="https://avatars.githubusercontent.com/u/42465692?s=120&v=4" width="120" height="120">](https://github.com/raintygao) | [![zrr1999](https://avatars.githubusercontent.com/u/46243324?s=120&v=4)](https://github.com/zrr1999) |[![KimYangOfCat](https://avatars.githubusercontent.com/u/32960305?s=120&v=4)](https://github.com/KimYangOfCat) |[![KnowsCount](https://avatars.githubusercontent.com/u/56480008?s=120&v=4)](https://github.com/KnowsCount) | 
| ZhengX |
|[![Megrax](https://avatars.githubusercontent.com/u/56376387?s=120&v=4)](https://github.com/Megrax) |
