import {defineConfig} from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3';
// import { SearchPlugin } from 'vitepress-plugin-search'
// import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
// 导入主题的配置
import { blogTheme } from './blog-theme'
// const customElements = [
//   'mjx-container',
//   'mjx-assistive-mml',
//   'math',
//   'maction',
//   'maligngroup',
//   'malignmark',
//   'menclose',
//   'merror',
//   'mfenced',
//   'mfrac',
//   'mi',
//   'mlongdiv',
//   'mmultiscripts',
//   'mn',
//   'mo',
//   'mover',
//   'mpadded',
//   'mphantom',
//   'mroot',
//   'mrow',
//   'ms',
//   'mscarries',
//   'mscarry',
//   'mscarries',
//   'msgroup',
//   'mstack',
//   'mlongdiv',
//   'msline',
//   'mstack',
//   'mspace',
//   'msqrt',
//   'msrow',
//   'mstack',
//   'mstack',
//   'mstyle',
//   'msub',
//   'msup',
//   'msubsup',
//   'mtable',
//   'mtd',
//   'mtext',
//   'mtr',
//   'munder',
//   'munderover',
//   'semantics',
//   'math',
//   'mi',
//   'mn',
//   'mo',
//   'ms',
//   'mspace',
//   'mtext',
//   'menclose',
//   'merror',
//   'mfenced',
//   'mfrac',
//   'mpadded',
//   'mphantom',
//   'mroot',
//   'mrow',
//   'msqrt',
//   'mstyle',
//   'mmultiscripts',
//   'mover',
//   'mprescripts',
//   'msub',
//   'msubsup',
//   'msup',
//   'munder',
//   'munderover',
//   'none',
//   'maligngroup',
//   'malignmark',
//   'mtable',
//   'mtd',
//   'mtr',
//   'mlongdiv',
//   'mscarries',
//   'mscarry',
//   'msgroup',
//   'msline',
//   'msrow',
//   'mstack',
//   'maction',
//   'semantics',
//   'annotation',
//   'annotation-xml',
// ];

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/blog/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base: '/',
  lang: 'zh-cn',
  title: '花木凋零成兰',
  description: '成功始于方法,巩固才能提高',
  ignoreDeadLinks: true,
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-Aj2Rp56aLq' }],
    ['meta', { name: 'sogou_site_verification', content: 'BwQr1kj0CD' }],
    ['link', {rel: 'canonical', href: 'https://www.ytazwc.top' }],
    // ['', { name: 'baidu-site-verification', content: 'codeva-Aj2Rp56aLq' }],
  ],
  
  // Sitemap
  sitemap: {
    hostname: 'https://www.ytazwc.top',
    lastmodDateOnly: false
  },
  
  // Latex渲染
  markdown: {
    math: true,
  },
  
  themeConfig: {
    // 官方vitePress内置搜索
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'O57HYNLTB4',
    //     apiKey: 'f2e6bea3ad9c32ac475c192dfe52365c',
    //     indexName: 'ytazwc',
    //     placeholder: '请输入要搜索的内容...'
    //   }
    // },
    
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
    logo: '/ok-modified.webp',
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
      { text: '卡码网', link: '/KamaCoder/' },
      { text: '多线程练习题', link: '/MultiThread/exercises/' },
      { text: 'MySQL', link: '/Database/MySQL' },
      { text: '杂记', link: '/MisNotes/' },
      { text: '读书随记', link: '/读书随记/' },
      {
        text: '我的',
        items: [
          { text: 'Github', link: 'https://github.com/YTAZWC' },
          { text: 'Gitee', link: 'https://gitee.com/ytaml' },
          { text: 'CSDN', link: 'https://blog.csdn.net/qq_61457746' },
          { text: '旧博客', link: 'https://ytazwc.top/blog' },
        ]
      },
      {
        text: '常用工具与网站',
        items: [
          { text: 'PicX图床', link: 'https://picx.xpoet.cn/#/upload' },
          { text: '阿里图标库', link: 'https://www.iconfont.cn/?spm=a313x.home_index.i3.d4d0a486a.d6e53a81Ww99Z9' },
          { text: '开发常用网址', link: 'https://doc.istio.tech/index.html' },
          { text: 'Google 翻译', link: 'https://translate.google.com.hk/?hl=zh-CN&sourceid=cnhp&sl=en&tl=zh-CN&op=translate' },
          { text: '图标在线生成器', link: 'https://www.logosc.cn/favicon-generator' },
          { text: '在线图像编辑工具', link: 'https://imageonline.co/cn/' },
          { text: 'Mermaid 中文网', link: 'https://mermaid.nodejs.cn/' },
          { text: '视频无损压缩90%', link: 'https://tools.rotato.app/compress' },
        ]
      },
    ],
    // 侧边栏
    sidebar: {
      
      "/Database/MySQL": [
        { text: 'MySQL 触发器', link: '/Database/MySQL/MySQL执行SQL时权限检查在哪个阶段？.md' },
        { text: 'MySQL执行SQL时权限检查在哪个阶段？', link: '/Database/MySQL/MySQL执行SQL时权限检查在哪个阶段？' },
      
      ],
      
      "/MultiThread/exercises/": [
        { text: '双线程轮流打印1-100', link: '/MultiThread/exercises/双线程轮流打印1-100' },
        { text: '三线程顺序打印1-100', link: '/MultiThread/exercises/三线程顺序打印1-100' },
        { text: '三线程分别打印1、2、3', link: '/MultiThread/exercises/三线程分别打印1、2、3' },
        { text: '100个线程各累加100次', link: '/MultiThread/exercises/100个线程各累加100次' },
        { text: '线程交叉打印12A34B56C等', link: '/MultiThread/exercises/线程交叉打印12A34B56C等' },
        { text: '两线程交替打印字母大小写', link: '/MultiThread/exercises/两线程交替打印字母大小写' },
        { text: '两个线程交替打印a1b2...z26', link: '/MultiThread/exercises/两个线程交替打印a1b2...z26' },
        { text: '两线程交替打印a1b2c3d4十轮', link: '/MultiThread/exercises/两线程交替打印a1b2c3d4十轮' },

      ],
      
      "/MisNotes/": [
        { text: 'Java并发的happens-before规则', link: '/MisNotes/Java并发的happens-before规则' },
        { text: '乐观锁和悲观锁', link: '/MisNotes/乐观锁和悲观锁' },
        { text: 'Synchronized关键字', link: '/MisNotes/Synchronized关键字' },
        { text: '为什么要使用双亲委派机制？', link: '/MisNotes/为什么要使用双亲委派机制？' },
        { text: 'Spring的配置类分为Full和Lite两种模式', link: '/MisNotes/Spring的配置类分为Full和Lite两种模式' },
        
      ],
      
      "/Leetcode/": [
        {
          text: '热题100',
          collapsed: false,
          items: [
            { text: '1.两数之和', link: '/Leetcode/Hot100/1.两数之和' },
            { text: '49.字母异位词分组', link: '/Leetcode/Hot100/49.字母异位词分组' },
            { text: '128.最长连续序列', link: '/Leetcode/Hot100/128.最长连续序列' },
            { text: '283.移动零', link: '/Leetcode/Hot100/283.移动零' },
            { text: '11.盛最多水的容器', link: '/Leetcode/Hot100/11.盛最多水的容器' },
            { text: '15.三数之和', link: '/Leetcode/Hot100/15.三数之和' },
            { text: '42.接雨水', link: '/Leetcode/Hot100/42.接雨水' },
          ]
        }
      ],
      "/KamaCoder/": [
        {
          text: '题库',
          collapsed: false,
          items: [
            { text: '1.A+B问题I', link: '/KamaCoder/题库/1.A+B问题I' },
            { text: '2.A+B问题II', link: '/KamaCoder/题库/2.A+B问题II' },
            { text: '3.A+B问题III', link: '/KamaCoder/题库/3.A+B问题III' },
            { text: '4.A+B问题IV', link: '/KamaCoder/题库/4.A+B问题IV' },
            { text: '5.A+B问题VII', link: '/KamaCoder/题库/5.A+B问题VII' },
            { text: '6.A+B问题VIII', link: '/KamaCoder/题库/6.A+B问题VIII' },
            { text: '8.摆平积木', link: '/KamaCoder/题库/8.摆平积木' },
            { text: '9.奇怪的信', link: '/KamaCoder/题库/9.奇怪的信' },
            { text: '10.运营商活动', link: '/KamaCoder/题库/10.运营商活动' },
            { text: '11.共同祖先', link: '/KamaCoder/题库/11.共同祖先' },
            { text: '12.打印数字图形', link: '/KamaCoder/题库/12.打印数字图形' },
            { text: '13.镂空三角形', link: '/KamaCoder/题库/13.镂空三角形' },
            { text: '14.句子缩写', link: '/KamaCoder/题库/14.句子缩写' },
            { text: '15.神秘字符', link: '/KamaCoder/题库/15.神秘字符' },
            { text: '16.位置互换', link: '/KamaCoder/题库/16.位置互换' },
            { text: '17.出栈合法性', link: '/KamaCoder/题库/17.出栈合法性' },
            { text: '18.链表的基本操作', link: '/KamaCoder/题库/18.链表的基本操作' },
            { text: '19.单链表反转', link: '/KamaCoder/题库/19.单链表反转' },
            { text: '20.删除重复元素', link: '/KamaCoder/题库/20.删除重复元素' },
            { text: '21.构造二叉树', link: '/KamaCoder/题库/21.构造二叉树' },
            { text: '46.携带研究材料', link: '/KamaCoder/题库/46.携带研究材料' },
            { text: '54.替换数字', link: '/KamaCoder/题库/54.替换数字' },
            { text: '55.右旋字符串', link: '/KamaCoder/题库/55.右旋字符串' },
          ]
        }
      ],
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1723361685490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2753" width="256" height="256"><path d="M983.899806 785.385782V224.886223h0.180631l-0.180631-4.696419c-0.180632-5.238314-0.722526-10.476627-1.806315-15.714941-2.890104-25.469042-21.675781-44.977245-45.519139-47.686717H122.287529c-11.741048 0-23.482096 1.625684-34.861881 5.238314-30.346093 10.295996-50.757453 40.100194-50.576821 74.058917v534.849885c-0.361263 21.314518 5.780208 42.087141 17.701887 59.789028l0.361263 0.722526 5.418946 3.973893c18.243782 21.856412 44.977245 34.319986 73.517022 34.500618H904.421944c37.751984 0 70.265655-27.094726 79.477862-66.291763l0.180631-0.541894c0.361263-5.96084 0.361263-11.741048-0.180631-17.701888zM390.16405 547.494091l55.453872 49.854295 43.893456 40.100194c5.418945 5.96084 13.005468 9.57347 21.133886 9.57347 7.947786 0 15.534309-3.431999 21.133886-9.57347l101.153642-91.941436 272.753572 263.721997H126.622685L390.16405 547.494091z m120.119951 30.346092L111.449638 216.03528H115.604163c214.409596-0.903158 703.559711-2.890104 793.875463-0.361263l-399.195625 362.166166z m165.458458-69.72376l251.619686-227.956959v474.518963L675.742459 508.116423z m-328.568707 0.180631L93.205856 760.278003V278.895043l253.967896 229.402011z" fill="#BB3837" p-id="2754"></path></svg>'
        },
        link: 'mailto:18570354653@163.com'
      },
      {
        icon: 'github',
        link: 'https://github.com/YTAZWC/YTAZWC.github.io'
      },
    ],
    
  }
})
