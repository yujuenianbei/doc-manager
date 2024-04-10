import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/demo/': [
    {
      text: '测试页面',
      children: [
        // '/demo/README.md',
        '/demo/demo1.md',
        '/demo/demo2.md',
      ],
    },
    {
      text: '测试页面',
      children: [
        // '/demo/README.md',
        '/demo/demo3.md',
        '/demo/demo4.md',
      ],
    },
  ],
  '/software/': [
    {
      text: '软件工程基础知识',
      children: [
        '/software/软件工程基础知识-概述和过程模型.md',
        '/software/软件工程基础知识-需求分析和系统设计.md',
        '/software/软件工程基础知识-软件质量.md',
        '/software/软件工程基础知识-软件项目管理.md',
      ],
    },
    // {
    //   text: 'Cookbook',
    //   children: [
    //     '/advanced/cookbook/README.md',
    //     '/advanced/cookbook/usage-of-client-config.md',
    //     '/advanced/cookbook/adding-extra-pages.md',
    //     '/advanced/cookbook/making-a-theme-extendable.md',
    //     '/advanced/cookbook/passing-data-to-client-code.md',
    //     '/advanced/cookbook/markdown-and-vue-sfc.md',
    //   ],
    // },
  ],
  '/reference/': [
    {
      text: '核心',
      collapsible: true,
      children: [
        '/reference/cli.md',
        '/reference/config.md',
        '/reference/frontmatter.md',
        '/reference/components.md',
        '/reference/plugin-api.md',
        '/reference/theme-api.md',
        '/reference/client-api.md',
        '/reference/node-api.md',
      ],
    },
    {
      text: '打包工具',
      children: [
        '/reference/bundler/vite.md',
        '/reference/bundler/webpack.md',
      ],
    },
    {
      text: '生态系统',
      children: [
        {
          text: '默认主题',
          link: 'https://ecosystem.vuejs.press/themes/default/',
        },
        {
          text: '插件',
          link: 'https://ecosystem.vuejs.press/plugins/',
        },
      ],
    },
  ],
}