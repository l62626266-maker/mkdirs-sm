import type { FooterConfig } from "@/types";

export const footerConfig: FooterConfig = {
  links: [
    {
      title: "导航",
      items: [
        { title: "搜索", href: "/search" },
        { title: "合集", href: "/collection" },
        { title: "分类", href: "/category" },
        { title: "标签", href: "/tag" },
      ],
    },
    {
      title: "内容",
      items: [
        { title: "博客", href: "/blog" },
      ],
    },
    {
      title: "关于",
      items: [
        { title: "关于我们", href: "/about" },
        { title: "隐私政策", href: "/privacy" },
        { title: "服务条款", href: "/terms" },
        { title: "网站地图", href: "/sitemap.xml" },
      ],
    },
  ],
};
