import { createRequire } from 'node:module'
import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'

import { sidebarZh } from './components/index.js'
const __dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'
export default defineUserConfig({
    // Markdown 代码块
    markdown: {
        importCode: {
            handleImportPath: (importPath) => {
                // handle @vuepress packages import path
                if (importPath.startsWith('@vuepress/')) {
                    const packageName = importPath.match(/^(@vuepress\/[^/]*)/)![1]
                    return importPath
                        .replace(
                            packageName,
                            path.dirname(require.resolve(`${packageName}/package.json`)),
                        )
                        .replace('/src/', '/lib/')
                        .replace(/hotKey\.ts$/, 'hotKey.d.ts')
                }
                return importPath
            },
        },
    },
    // 输出根目录
    dest: './dist',
    // 站点目录
    base: '/',
    bundler: viteBundler(),
    theme: defaultTheme({
        // 主题模式
        colorModeSwitch: true,
        // logo
        logo: '/images/panda.png',
        docsDir: 'docs/demo',
        // repo: 'vuepress/core',
        // docsRepo: 'vuepress/docs',

        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },

        navbar: [{
            text: '首页',
            link: '/',
        }, {
            text: '测试',
            link: '/demo/',
        }, {
            text: '软件工程',
            children: [
                '/software/软件工程基础知识-概述和过程模型.md',
                '/software/软件工程基础知识-需求分析和系统设计.md',
                '/software/软件工程基础知识-软件质量.md',
                '/software/软件工程基础知识-软件项目管理.md',
            ],
        }],
        locales: {
            '/': {
                // navbar
                // navbar: navbarZh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                // sidebar
                sidebar: sidebarZh,
                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
            '/en/': {
                selectLanguageName: 'English',
                // page meta
                editLinkText: 'Edit this page on GitHub',
                // 侧边栏深度
                sidebarDepth: 1,
                // 侧边栏
                // sidebar: 'auto',
                sidebar: sidebarZh,
                // sidebar: [
                //     {
                //         text: 'demo1',
                //         children: [
                //             {
                //                 text: 'VuePress',
                //                 children: [
                //                     {
                //                         text: 'CLI',
                //                         link: '/demo/demo1.md',
                //                     },
                //                     '/demo/demo2.md',
                //                 ],
                //             },
                //         ],
                //     },
                //     {
                //         text: '软件工程基础知识',
                //         children: [
                //             '/software/软件工程基础知识-概述和过程模型.md',
                //             '/software/软件工程基础知识-需求分析和系统设计.md',
                //             '/software/软件工程基础知识-软件质量.md',
                //             '/software/软件工程基础知识-软件项目管理.md',
                //         ],
                //     }
                // ],
            },
        }
    }),
    head: [
        ['meta', { name: 'msapplication-TileImage', content: '/images/panda.png' }],
        ["link", { rel: "icon", href: '/images/panda.png' }],
    ],
    lang: 'zh-CN',
    title: '你好， 欢迎阅读 ！',
    description: '这是我的第一个 VuePress 站点',

    // 多语言
    // locales: {
    //     '/': {
    //         lang: 'zh-CN',
    //         title: '你好， 欢迎阅读 ！',
    //         description: '这是我的第一个 VuePress 站点',
    //     },
    //     '/en': {
    //         lang: 'en-US',
    //         title: 'Welcome, Read!',
    //         description: 'read websit',
    //     },
    // },
    plugins: [
        // 需要部署后使用  https://docsearch.algolia.com/apply
        // docsearchPlugin({
        //     appId: '34YFD9IUQ2',
        //     apiKey: '9a9058b8655746634e01071411c366b8',
        //     indexName: 'vuepress',
        //     searchParameters: {
        //         facetFilters: ['tags:v2'],
        //     },
        //     locales: {
        //         '/zh/': {
        //             placeholder: '搜索文档',
        //             translations: {
        //                 button: {
        //                     buttonText: '搜索文档',
        //                     buttonAriaLabel: '搜索文档',
        //                 },
        //                 modal: {
        //                     searchBox: {
        //                         resetButtonTitle: '清除查询条件',
        //                         resetButtonAriaLabel: '清除查询条件',
        //                         cancelButtonText: '取消',
        //                         cancelButtonAriaLabel: '取消',
        //                     },
        //                     startScreen: {
        //                         recentSearchesTitle: '搜索历史',
        //                         noRecentSearchesText: '没有搜索历史',
        //                         saveRecentSearchButtonTitle: '保存至搜索历史',
        //                         removeRecentSearchButtonTitle: '从搜索历史中移除',
        //                         favoriteSearchesTitle: '收藏',
        //                         removeFavoriteSearchButtonTitle: '从收藏中移除',
        //                     },
        //                     errorScreen: {
        //                         titleText: '无法获取结果',
        //                         helpText: '你可能需要检查你的网络连接',
        //                     },
        //                     footer: {
        //                         selectText: '选择',
        //                         navigateText: '切换',
        //                         closeText: '关闭',
        //                         searchByText: '搜索提供者',
        //                     },
        //                     noResultsScreen: {
        //                         noResultsText: '无法找到相关结果',
        //                         suggestedQueryText: '你可以尝试查询',
        //                         reportMissingResultsText: '你认为该查询应该有结果？',
        //                         reportMissingResultsLinkText: '点击反馈',
        //                     },
        //                 },
        //             },
        //         },
        //     },
        // }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        // only enable shiki plugin in production mode
        isProd
            ? shikiPlugin({
                langs: ['bash', 'diff', 'json', 'md', 'ts', 'vue'],
                theme: 'dark-plus',
            })
            : [],
    ],
    // 静态资源公共文件夹
    public: path.resolve(__dirname, './docs/assert'),
    // 别名
    alias: {
        '@alias': path.resolve(__dirname, './docs/assert'),
    },
    port: 9090,
    // host: '172.16.1.233',
})