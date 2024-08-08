---
relates:
  - Demo: /demo/starter/11
  - KaTeX: https://katex.org/
tags: [代码块, 语法]
description: |
  在 KaTex 驱动下，Slidev 开箱即用地支持 LaTex。
---

# LaTeX

Slidev 开箱即用地支持 LaTeX，基于 [KaTeX](https://katex.org/)。

## 行内公式 {#inline}

在 LaTeX 公式左右各加一个 `$`，以渲染行内公式。

```md
$\sqrt{3x-1}+(1+x)^2$
```

## 块级公式 {#block}

当使用两个 (`$$`) 时，会进行块级渲染。这种模式会使用更大的符号，并将结果居中。

```latex
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

## 逐行高亮

要想高亮特定行，只需在括号 `{}` 中添加行号即可。行号默认从 1 开始。

```latex
$$ {1|3|all}
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

LaTeX 块也可以使用 [代码块](#line-highlighting) 的 `at` 和 `finally` 选项。

## 化学方程式

为了能够呈现化学方程式，需要加载 KaTeX 的扩展 [mhchem](https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem)。

创建包含以下内容的 `vite.config.ts` ：

```ts
import 'katex/contrib/mhchem'

export default {}
```

现在化学方程式可以被正常渲染了。

```latex
$$
\displaystyle{\ce{B(OH)3 + H2O <--> B(OH)4^- + H+}}
$$
```

了解更多： [mhchem 语法](https://mhchem.github.io/MathJax-mhchem)

---

<TheTweet id="1392246507793915904" />
