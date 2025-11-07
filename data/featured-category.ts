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
    href: "/category/trending-now",
    slug: "trending-now",
  },
  {
    name: "Community Picks",
    value: "Community Picks",
    href: "/category/community-picks",
    slug: "community-picks",
  },
  {
    name: "Pro Tips",
    value: "Pro Tips",
    href: "/category/pro-tips",
    slug: "pro-tips",
  },
  {
    name: "Deep Dives",
    value: "Deep Dives",
    href: "/category/deep-dives",
    slug: "deep-dives",
  },
];
