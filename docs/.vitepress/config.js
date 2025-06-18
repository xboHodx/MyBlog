// docs/.vitepress/config.js
export default {
	// 站点级选项
	title: "xboHodx的博客", // 网站标题
	description: "神秘的地方", // 网站描述
	base: '/MyBlog/', // 如果想用 https://xboHodx.github.io/Myblog/ 访问，那么这句话必填

	head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: 'logo.jpg' }],
  ],

	// 主题级选项
	themeConfig: {
		nav: [ // 页面右上角的导航
			{ text: '关于', link: '/src/about' },
			{ text: 'Rust', link: '/src/RustLearning' },
			{ text: 'Cpp', link: '/src/cppLearning' },
			{
				text: '算法',
				items: [
					{
						text: "图论", items: [
							{ text: "Floyd", link: "/src/算法/图论/Floyd.md" },
						]
					},
					{ text: "图论", link: "/src/算法/图论/" },
					{ text: "字符串", link: "/src/算法/字符串/" },
				]
			}
		],

		sidebar: {
			"/src/算法/": {
				text: "算法",
				items: [
					{ text: "图论", link: "/src/算法/图论" },
					{ text: "字符串", link: "/src/算法/字符串" },
				],
			},
		},

		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
	}
};