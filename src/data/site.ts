export const siteConfig = {
  name: "d0ucube",
  domain: "d0ucube.com",
  description: "记录网安学习、CTF Writeup、旅行见闻和情绪随笔。",
  typewriterText: "我希望写点有意思的东西",

  nav: [
    { label: "主页", href: "/" },
    { label: "归档", href: "/archive" },
    { label: "关于我", href: "/about" },
    { label: "链接", href: "/links" },
    { label: "留言板", href: "/message-board" },
  ],

  socialLinks: [
    { label: "B站", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "QQ", href: "#" },
  ],

  categories: [
    {
      title: "网安学习",
      slug: "security",
      description: "Web 安全、Linux、内网、漏洞复现、安全工具与学习笔记。",
    },
    {
      title: "CTF Writeup",
      slug: "ctf",
      description: "记录比赛题目、解题过程、踩坑、复盘和思路整理。",
    },
    {
      title: "情绪随笔",
      slug: "essay",
      description: "一些不一定成体系，但真实存在的想法和情绪。",
    },
    {
      title: "旅游记录",
      slug: "travel",
      description: "城市、风景、照片、路上的人，以及一些记忆碎片。",
    },
  ],

  tags: [
    "Web安全",
    "Linux",
    "Nginx",
    "Astro",
    "Tailwind",
    "CTF",
    "Pwn",
    "Crypto",
    "Reverse",
    "随笔",
    "旅行",
    "生活",
  ],
};
