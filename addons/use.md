---
title: 使用扩展插件
---

# 使用扩展插件 {#use-addon}

扩展插件是你可以在演示文稿中使用的附加组件、布局、样式、配置等集。

它们与 [主题](/themes/use) 相似，但总而言之：

* 它们不影响幻灯片的全局样式
* 你可以在同一演示文稿中使用多个插件

为了使用扩展插件，你必须通过以下方式手动安装它们：

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

然后，你需要在 frontmatter 中声明你的扩展插件：

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

或者在你的文件 `package.json` 中：

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2",
    ]
  }
}
```
