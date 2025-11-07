export type FeaturedCategory = {
  name: string;
  value: string;
  href: string;
  slug: string;
};

export const featuredCategories: FeaturedCategory[] = [
  {
    name: "Trending Now",
    value: "Trending Now",
    href: "/categories/trending-now",
    slug: "trending-now",
  },
  {
    name: "Community Picks",
    value: "Community Picks",
    href: "/categories/community-picks",
    slug: "community-picks",
  },
  {
    name: "Pro Tips",
    value: "Pro Tips",
    href: "/categories/pro-tips",
    slug: "pro-tips",
  },
  {
    name: "Deep Dives",
    value: "Deep Dives",
    href: "/categories/deep-dives",
    slug: "deep-dives",
  },
];
