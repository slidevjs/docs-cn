---
relates:
  - guide/ui
  - CLI: builtin/cli
  - Cloudflare Quick Tunnels: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/
tags: [远程控制, 工具]
description: |
  在 Slidev 的远程访问特性加持下远程访问你的演示。
---

# 远程访问

你可以使用 `--remote` 选项以远程访问的方式运行演示文稿：

::: code-group

```bash [npm]
npm run dev -- --remote
# 等同于 slidev --remote
```

```bash [pnpm]
pnpm dev -- --remote
# 等同于 slidev --remote
```

```bash [yarn]
yarn dev --remote
# 等同于 slidev --remote
```

:::

## 密码保护

如果你想分享幻灯片，但不想让其他人访问演示者模式，你可以向该选项传递密码，即`--remote=your_password`。然后，访问演示者模式时需要密码。


## 远程隧道

你可以开启一个 [Cloudflare Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/) 将你的本地服务器开放到公网（内网穿透）。这样，你就可以在不搭建服务端的情况下与他人共享幻灯片。

::: code-group

```bash [npm]
npm run dev -- --remote --tunnel
# 等同于 slidev --remote --tunnel
```

```bash [pnpm]
pnpm dev -- --remote --tunnel
# 等同于 slidev --remote --tunnel
```

```bash [yarn]
yarn dev --remote --tunnel
# 等同于 slidev --remote --tunnel
```

:::
