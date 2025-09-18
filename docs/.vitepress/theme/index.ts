import BlogTheme from '@sugarat/theme'

// 引入不蒜子 浏览量统计插件
// import { inBrowser } from 'vitepress'
// import busuanzi from 'busuanzi.pure.js'
// import bsz from "./components/bsz.vue"
// import { h } from 'vue'

// 自定义样式重载
import './style.scss'

// 自定义字体
// import './custom-font.css'

import 'cn-fontsource-lxgw-wen-kai-screen-r/font.css'
import './custom.css'

// 自定义主题色
// import './user-theme.css'

// import busuanzi from 'busuanzi.pure.js'
// import { inBrowser } from 'vitepress'
// export default  {
//   ...BlogTheme,
//
//   // 不蒜子
//   enhanceApp({ app , router }) {
//     if (inBrowser) {
//       router.onAfterRouteChanged = () => {
//         busuanzi.fetch()
//       }
//     }
//   },
//   // Layout: bsz,
//
//
// }

export default BlogTheme
