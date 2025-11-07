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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
