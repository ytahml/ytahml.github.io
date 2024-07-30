// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // markdown 图表支持（会增加一定的构建耗时）
  mermaid: true,

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: 'MIT License | 花木凋零成兰',
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: '花木凋零成兰',

  // 友链
  friend: [
    {
      nickname: 'Hexo旧博客',
      des: '成功始于方法,巩固才能提高.',
      avatar:
        'https://ytazwc.top/blog/images/ok.avif',
      url: 'https://ytazwc.top',
    },
    {
      nickname: 'vuepress旧博客',
      des: '成功始于方法,巩固才能提高.',
      avatar:
        'https://ytazwc.top/blogs/images/ok.avif',
      url: 'https://ytazwc.top/blogs',
    },
    {
      nickname: '@sugarat/theme',
      des: '博客主题',
      avatar: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://theme.sugarat.top/'
    },
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 推荐文章的展示卡片
  recommend: false,

  // 热门文章
  hotArticle: {
    title: '🔥 精选文章',
    nextText: '换一组',
    pageSize: 9,
    empty: '暂无精选内容'
  },

  // 公告
  popover: {
    title: '公告',
    duration: -1,
    mobileMinify: false,
    reopen: true,
    twinkle: false,
    body: [
      { type: 'text', content: '👇 我的微信 👇---👇 我的 QQ 👇' },
      {
        type: 'image',
        src: 'https://github.com/YTAZWC/picx-images-hosting/raw/master/杂记/wechat.webp',
        style: 'display: inline-block;width:46%;padding-right:6px'
      },
      {
        type: 'image',
        src: 'https://github.com/YTAZWC/picx-images-hosting/raw/master/杂记/qq.webp',
        style: 'display: inline-block;width:46%;padding-left:6px'
      },
      {
        type: 'text',
        content: '欢迎大家私信交流(备注:博客)'
      }
      // {
      //   type: 'text',
      //   content: '文章首/文尾有群二维码',
      //   style: 'padding-top:0'
      // },
      // {
      //   type: 'button',
      //   content: '作者博客',
      //   link: 'https://sugarat.top'
      // },
      // {
      //   type: 'button',
      //   content: '作者邮箱',
      //   // props: {
      //   //   type: 'success'
      //   // },
      //   link: '18570354653@163.com',
      // }
    ],
  },

  comment: {
    repo: 'YTAZWC/YTAZWC.github.io',
    repoId: 'R_kgDOMcKScw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOMcKSc84ChPpf',
    inputPosition: 'top',
  }

})

export { blogTheme }
