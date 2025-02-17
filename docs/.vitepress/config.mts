import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LLM is All You Need",
  description: "已深度思考（用时0秒）\n服务器繁忙，请稍后再试。",
  lastUpdated: true,
  srcExclude: ['**/README.md', '**/TODO.md'],
  head: [
    ['link', {rel: 'icon', type: 'image/jpg', href: 'image/logo.jpeg'}],
  ],
  markdown: {
    // theme: 'material-theme-palenight',
    lineNumbers: true,
    math: true,
    image: {
      lazyLoading: true
    }
  },
  sitemap: {
    hostname: 'https://sirly.cc'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'image/logo.jpeg',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2025 YanhuiAILab'
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'GFFO1SH5M7',
        apiKey: 'b1ff265f4a03fa9372a165b898584929',
        indexName: 'sirly_cc_gffo1sh5m7_pages'
      }
    },

    editLink: {
      pattern: 'https://github.com/YanhuiAILab/YanhuiAILab.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    externalLinkIcon: true,

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    nav: [
      { text: 'Get Started', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YanhuiAILab' }
    ]
  }
})
