const links = {
  twitter: "https://twitter.com/nemo",
  github: "https://github.com/nemo",
  githubAccount: "https://github.com/nemo",
  discord: "https://discord.com/users/nemo",
  calDotCom: "https://cal.com/nemo",
};

export const siteConfig = {
  name: "NemoShop",
  description: "An open source starter for project",
  url: "https://nemo.com",
  ogImage: "https://nemo.png",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
  ],
  links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
  ],
};
