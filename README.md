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

- 📝 [**Markdown 支持**](https://cn.sli.dev/guide/syntax.html) —— 使用你最喜欢的编辑器和工作流编写 Markdown 文件
- 🧑‍💻 [**对开发者友好**](https://cn.sli.dev/guide/syntax.html#code-blocks) —— 内置代码高亮、实时编码等功能
- 🎨 [**可定制主题**](https://cn.sli.dev/themes/gallery.html) —— 以 npm 包的形式共享、使用主题
- 🌈 [**灵活样式**](https://cn.sli.dev/guide/syntax.html#embedded-styles) —— 使用 [Windi CSS](https://windicss.org/) 按需使用的实用类和易用的内嵌样式表
- 🤹 [**交互**](https://cn.sli.dev/custom/directory-structure.html#components) —— 无缝嵌入 Vue 组件
- 🎙 [**演示者模式**](https://cn.sli.dev/guide/presenter-mode.html) —— 可以使用另一个窗口，甚至是你的手机来控制幻灯片
- 🧮 [**LaTeX 支持**](https://cn.sli.dev/guide/syntax.html#latex) —— 内置了对 LaTeX 数学公示的支持
- 📰 [**图表支持**](https://cn.sli.dev/guide/syntax.html#diagrams) —— 使用文本描述语言创建图表
- 🌟 [**图标**](https://cn.sli.dev/guide/syntax.html#icons) —— 能够直接从任意图标库中获取图标
- 💻 [**编辑器**](https://cn.sli.dev/guide/editors.html) —— 集成的编辑器，或者使用 [VS Code 扩展](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**录制**](https://cn.sli.dev/guide/recording.html) —— 内置录制功能和摄像头视图
- 📤 [**跨平台**](https://cn.sli.dev/guide/exporting.html) —— 能够导出 PDF、PNG 文件，甚至是一个可以托管的单页应用
- ⚡️ [**快速**](https://vitejs.dev) —— 基于 [Vite](https://vitejs.dev) 的即时重载
- 🛠 [**可配置**](https://cn.sli.dev/custom/config-vite.html) —— 支持使用 Vite 插件、Vue 组件以及任何的 npm 包

### 📨 与官网文档同步

目前 Slidev 中文文档翻译已全部完成。

**同步原理**：每天，[主仓库](https://github.com/slidevjs/slidev)的 `docs` 目录会被提取到本仓库的 `upstream` 分支。本仓库的 `sync` 分支会在需要时从 `main` 和 `upstream` 分支合并，并在完成翻译后发起 PR 到主仓库的 `main` 分支。

### 📝 参与贡献

感谢您的参与！若要修正翻译错误，请向 main 分支提交 PR；若要帮助翻译新增内容，请向 sync 分支提交 PR；若英文原版即有需要修改之处，请向[主仓库](https://github.com/slidevjs/slidev)提交 PR。

若需要本地预览网站效果，可执行如下命令：

```bash
# 全局安装 pnpm
$ npm i -g pnpm

# 安装依赖，使用 pnpm
$ pnpm i
# 启动文档
$ pnpm run dev
```

接着访问提示的网址（一般为 `http://localhost:5173/`）即可。

或者安装 [VSCode 的 Vite 插件](https://marketplace.visualstudio.com/items?itemName=antfu.vite) 快速启动开发服务器。

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
