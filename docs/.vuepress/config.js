module.exports = {
    base: '/angular-ionic-docs/',
    dest: 'dist',
    title: 'Ionic Angular 开发文档',
    description: 'Ionic Angular 开发文档',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: `/icons/apple-touch-icon-152x152.png`
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/icons/safari-pinned-tab.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/icons/msapplication-icon-144x144.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    serviceWorker: false,
    themeConfig: {
        // 自动在导航栏右侧添加，github链接跳转按钮，此为路径
        repo: 'An-Haijun/angular-ionic-docs',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [{
            text: '我的博客',
            link: 'http://anhaijun.info'
        }, {
            text: 'VuePress',
            link: 'https://vuepress.vuejs.org/zh/guide/'
        }],
        // 左侧菜单栏
        sidebar: [{
            title: '基础',
            collapsable: false,
            children: [
                ['basic/', '说明'],
                'basic/setting'
            ]
        }, {
            title: '总结',
            collapsable: false,
            children: [
                ['problem/', '说明'],
                'problem/full-screen-back',
                'problem/android/keyboard-shade-input',
                'problem/android/gradle-download'
            ]
        }]
    }
}