---
relates:
  - Vue's Named Slots: https://v3.vuejs.org/guide/component-slots.html
tags: [布局, 语法]
description: |
  针对布局中具名插槽的语法糖。
---

# 布局插槽语法糖

一些布局可以通过 [Vue 具名插槽](https://vuejs.org/guide/components/slots.html) 提供多个可插入的位点。

例如，在 [`two-cols` 布局](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue)中，你可以创建一左一右的双栏布局。

```md
---
layout: two-cols
---

<template v-slot:default>

# 左

这会在左边显示

</template>
<template v-slot:right>

# 右

这会在右边显示

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>左</h3>
<p>这会在左边显示</p>
</div>
<div>
<h3>右</h3>
<p>这会在右边显示</p>
</div>
</div>

我们还为插槽名称提供了一个简写语法糖 `::name::`。下面的示例与前面的示例完全相同：

```md
---
layout: two-cols
---

# 左

这会在左边显示

::right::

# 右

这会在右边显示
```

你还可以明确指定默认插槽，并按自定义顺序排列。

```md
---
layout: two-cols
---

::right::

# 右

这会在右边显示

::default::

# 左

这会在左边显示
```
