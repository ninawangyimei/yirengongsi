import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '一人公司手册',
  description: '',
  appearance: 'dark',
  base: "/yirengongsi/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '👬 加入社区', link: '/docs/about.md' },
    ],
    sidebar: [
      {
        text: '博客精华',
        items: [
          {
            text: '卡颂（一）：不会编程的国企员工不是好魔术师',
            link: '/docs/podcast/kasong01.md',
          },
          {
            text: '卡颂（二）：在我这个很小的领域，我是没有竞争对手的',
            link: '/docs/podcast/kasong02.md',
          },
          {
            text: '卡颂（三）：提供价值是启动副业的关键',
            link: '/docs/podcast/kasong03.md',
          },
          {
            text: '卡颂（四）：如何做到每天只工作 2 小时',
            link: '/docs/podcast/kasong04.md',
          },
        ],
      },
      {
        text: '案例拆解',
        items: [
          // { text: '案例一', link: '/docs/example/unknown.md' },
          { text: '案例一', link: '/docs/unknown.md' },
        ],
      },
      {
        text: '相关资料推荐',
        items: [
          // { text: '书籍', link: '/docs/information/unknown.md' },
          { text: '书籍', link: '/docs/unknown.md' },
        ],
      },
      {
        text: '更多',
        items: [
          // { text: '个人经验', link: '/docs/more/personal.md' },
          { text: '个人经验', link: '/docs/unknown.md' },
          { text: '目的', link: '/docs/unknown.md' },
        ],
      },
      {
        text: '共创团队',
        items: [{ text: '共创团队', link: '/docs/unknown.md' }],
      },
    ],
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://hm.baidu.com/hm.js?ab1409dcf9087d7086bb89d6cc5657af',
      },
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];  
  `,
    ],
  ],
});
