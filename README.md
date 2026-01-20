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
pnpm i
pnpm dev
```

接着访问提示的网址即可。

或者安装 [VSCode 的 Vite 插件](https://marketplace.visualstudio.com/items?itemName=antfu.vite) 快速启动开发服务器。

### 📝 参与贡献

感谢您的参与!

- **翻译新增内容** / **修正翻译错误**: 请向 [slidevjs/docs-cn:main](https://github.com/slidevjs/docs-cn/tree/main) 分支提交 PR
- **修改英文原版**: 请向 [slidevjs/slidev:main](https://github.com/slidevjs/slidev/tree/main) 提交 PR

目前 Slidev 中文文档翻译已全部完成。欢迎中文社区的朋友们加入我们的（半官方）QQ 群 978643067，讨论 Slidev 相关话题。

### 翻译新增内容

相关的一些 Git 分支包括：

- [slidev/slidev:main](https://github.com/slidevjs/slidev/tree/main): Slidev 主仓库，英文原版
- [slidevjs/docs-cn:main](https://github.com/slidevjs/docs-cn/tree/main): Slidev 中文翻译主分支，对外发布
- [slidevjs/docs-cn:upstream](https://github.com/slidevjs/docs-cn/tree/upstream): 每天自动从 [slidev/slidev:main](https://github.com/slidevjs/slidev/tree/main) 同步的英文文档

新增翻译内容时，推荐操作如下：

1. 在你的 fork 中，添加官方仓库为上游远程仓库（如未添加）：

```sh
git remote add upstream https://github.com/slidevjs/docs-cn.git
git fetch upstream
```

2. 以 slidevjs/docs-cn:main 为基础创建新分支：`git checkout -b sync-1 upstream/main`
3. 将 slidevjs/docs-cn:upstream 合入：`git merge upstream/upstream`
4. 处理 Merge 产生的冲突
5. 上传分支并向本仓库提交 PR

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
