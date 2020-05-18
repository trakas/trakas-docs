---
id: installation
title: Installation
sidebar_label: Installation
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const packageTabs = [
  { label: "npm", value: "npm" },
  { label: "Yarn", value: "yarn" },
  { label: "pnpm", value: "pnpm" },
]

export const groupManager = "package-managers"

Trakas is designed as a [monorepo](https://en.wikipedia.org/wiki/Monorepo)
with multiple [packages](https://github.com/trakas/trakas/tree/master/packages)

## Requirements

* [Node.js](https://nodejs.org/) version ≥ 10.9 (which can be checked by running `node -v`).
* [Yarn](https://yarnpkg.com/) version ≥ 1.5 (which can be checked by running `yarn version`)
* [pnpm](https://pnpm.js.org/)

:::important Choose version
Stable version are highly recommended for all tools.
:::

## JavaScript

All JavaScript/TypeScript utilities will be placed here.

<Tabs
  groupId={groupManager}
  defaultValue="yarn"
  values={packageTabs}
>

<TabItem value="npm">

```bash
npm i @trakas/js
```

</TabItem>

<TabItem value="yarn">

```bash
yarn add @trakas/js
```

</TabItem>

<TabItem value="pnpm">

```bash
pnpm add @trakas/js
```

</TabItem>

</Tabs>

## React

All React utilities will be placed here.

<Tabs
  groupId={groupManager}
  defaultValue="yarn"
  values={packageTabs}
>

<TabItem value="npm">

```bash
npm i @trakas/react
```

</TabItem>

<TabItem value="yarn">

```bash
yarn add @trakas/react
```

</TabItem>

<TabItem value="pnpm">

```bash
pnpm add @trakas/react
```

</TabItem>

</Tabs>

:::important
`react` and `react-dom` must be installed as peer dependencies.
:::
