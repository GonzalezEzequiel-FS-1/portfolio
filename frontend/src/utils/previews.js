export const previews = [
  {
    id: "dealer",
    title: "Dealer Dashboard",
    description:
      "A dashboard that helps users find real cars for sale in their area, providing images, prices, and contact information. Users can filter by brand and model. Fully self-hosted.",
    longDescription: `
      The Dealer Dashboard is a fully self-hosted web application designed to streamline
      the car buying experience for users. It aggregates car listings from multiple sources,
      displays images and pricing in a clean, responsive interface, and allows users to filter
      by brand, model, and location. The platform also includes administrative tools for
      managing listings, tracking user activity, and integrating with a MongoDB database for
      efficient data management. Built with modern web technologies, it ensures fast performance
      and a seamless experience across desktop and mobile devices.
    `,
    url:
      import.meta.env.VITE_DEALER_URL ||
      "https://www.egwebdev.com/showcase/dealer",
    previewImage: "/Imgs/nextridePreview.png",
    services: [
      "Car listings aggregation",
      "Search & filtering by brand/model",
      "Image and price display",
      "MongoDB Database Management",
    ],
  },
  {
    id: "agpgraphx",
    title: "AGPGraphx Website",
    description:
      "A front-end dashboard currently in use by a sign-making business, Built with ReactJs, and NodeJs. Self-hosted on custom infrastructure.",
    longDescription: `
      AGPGraphx Website serves as the primary front-end dashboard for a sign-making business,
      allowing for content management, client interaction, and project tracking. The platform
      is built with ReactJS for a reactive, component-driven UI and NodeJS for server-side
      operations. Self-hosted on custom infrastructure, it includes Firebase Authentication
      for secure user access, MongoDB for efficient data storage, and email management tools
      to support business communications. The dashboard is fully responsive and optimized for
      smooth performance across all devices.
    `,
    url: import.meta.env.VITE_AGPGRAPHX_URL || "https://www.agpgraphx.com",
    previewImage: "/Imgs/agpGraphxPreview.png",
    services: [
      "Hosting",
      "Email Management",
      "Firebase Authentication",
      "MongoDB Database Management",
    ],
  },
  {
    id: "switchstack",
    title: "SwitchStack Storefront",
    description:
      "A high-performance WooCommerce storefront built for speed, clean navigation, and modern product presentation. Fully customized for branding, SEO, and mobile-first performance.",
    longDescription: `
      SwitchStack is a professionally developed e-commerce storefront powered by WooCommerce,
      optimized for product presentation, responsiveness, and smooth checkout flow. The site
      includes custom product cards, refined UI elements, optimized images, high-precision
      branding, and global shipping options. Built with strong attention to detail, the store
      balances aesthetics, usability, and performance while remaining fully manageable through
      the WordPress admin panel.
    `,
    url:"http://switchstack.egwebdev.com/",
    previewImage: "/Imgs/switchstackPreview.png",
    services: [
      "WooCommerce Development",
      "Custom Product UI & Styling",
      "SEO Optimization",
      "Global Shipping Setup",
    ],
  },
  {
  id: "aesir",
  title: "Project Æsir",
  description:
    "A gamified AI development assistant that rewards thoughtful code review, refactoring, and improvement. Tracks XP, levels, and skill stats as you interact with AI-generated code.",
  longDescription: `
    Project Æsir is an innovative AI coding assistant designed to make developers
    more engaged and skilled. Unlike traditional code generators, Æsir rewards
    critical thinking and careful refinement of AI-suggested code. Users earn XP
    for actions like editing, refactoring, adding meaningful comments, and
    identifying bugs, while simply accepting code yields minimal growth. With
    a clear progression system, skill stats, and a visually engaging web UI,
    Æsir turns programming into a gameful learning experience. Fully self-hosted
    at aesir.egwebdev.com, built with modern web technologies for responsive
    performance across devices.
  `,
  url: import.meta.env.VITE_AESIR_URL || "https://aesir.egwebdev.com",
  previewImage: "/Imgs/aesirPreview.png", // you can add an image at this path
  services: [
    "Gamified AI code assistant",
    "XP & level tracking",
    "Critical code review rewards",
    "Skill stats & progression",
  ],
}
];

