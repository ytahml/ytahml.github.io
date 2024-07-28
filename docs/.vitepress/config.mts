import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3';
// 导入主题的配置
import { blogTheme } from './blog-theme'

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base: '/blog/',
  lang: 'zh-cn',
  title: '花木凋零成兰',
  description: '成功始于方法,巩固才能提高',
  ignoreDeadLinks: true,
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/ok.ico' }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css' }]
  ],

  // Latex渲染
  markdown: {
    config: (md) => {
      md.use(mathjax3 as any)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },

  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/ok.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },

    // 全局配置
    darkModeSwitchTitle: 'before',
    

    // 导航栏
    nav: [
      { text: '力扣', link: '/Leetcode/' },
      {
        text: '我的',
        items: [
          { text: 'Github', link: 'https://github.com/YTAZWC' },
          { text: 'Gitee', link: 'https://gitee.com/ytaml' },
          { text: 'CSDN', link: 'https://blog.csdn.net/qq_61457746' },
          { text: '旧博客', link: 'https://ytazwc.top' },
          { text: '邮箱', link: 'mailto:18570354653@163.com' }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      "/Leetcode/": [
        {
          text: '热题100',
          collapsed: false,
          items: [
            { text: '1.两数之和', link: '/Leetcode/Hot100/1.两数之和.md' },
            { text: '11.盛最多水的容器', link: '/Leetcode/Hot100/11.盛最多水的容器.md' },
            { text: '15.三数之和', link: '/Leetcode/Hot100/15.三数之和.md' },
            { text: '42.接雨水', link: '/Leetcode/Hot100/42.接雨水.md' },
            { text: '49.字母异位词分组', link: '/Leetcode/Hot100/49.字母异位词分组.md' },
            { text: '128.最长连续序列', link: '/Leetcode/Hot100/128.最长连续序列.md' },
            { text: '283.移动零', link: '/Leetcode/Hot100/283.移动零.md' },
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/YTAZWC/blog'
      },
    ],
    
  }
})
