type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const footerLinks: FooterLink[] = [
  {
    href: "https://mahdi-the-savior.pages.dev/",
    label: "Who is Imam Mahdi (a.j.)?",
    external: true,
  },
  {
    href: "/404-page",
    label: "404",
  },
  {
    href: "/mastering-react-18-for-modern-web-performance",
    label: "Article",
  },
];
