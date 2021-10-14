module.exports = {
  title: "Vuepress-boilerplate", // 사이트 타이틀
  description: "설정은 내맘대로임",
  base: "/vuepress-boilerplate/",
  head: [
    ["link", { rel: "stylesheet", href:"http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css" }],
    ["link", { rel: "stylesheet", href:"https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" }],
    ["link", { rel: "stylesheet", href:"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" }]
  ],
  themeConfig: {
    nav: [
      { text: "홈", link: "/" },
      { text: "첫번째", link: "/pages/first/" },
      { text: "두번째", link: "/pages/second/" },
    ],
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      "/pages/first/": [
        {
          title: "첫페이지 첫 제목",
          collapsable: false,
          children: [
            "/pages/first/child-1/"
          ]
        },
        {
          title: "첫페이지 두번째 제목",
          collapsable: false,
          children: [
            "/pages/first/child-2/",
            "/pages/first/child-3/"
          ]
        }
      ],
      "/pages/second/": [
        {
          title: "두번째 페이지",
          collapsable: false,
          children: [
            "/pages/second/child/",
          ],
        },
      ]
    },
  },
  markdown: {
    extractHeaders: ["h2", "h3", "h4"],
  },
};
