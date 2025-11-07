type SocialLinks = {
  x: string;
  github: string;
  stackoverflow: string;
};

type TeamMembers = {
  image: string;
  name: string;
  field: string;
  quote: string;
  social: SocialLinks;
};

export const teamMembers: TeamMembers[] = [
  {
    image: "/member-avatar-01.webp",
    name: "Sophia Brown",
    field: "Frontend Developer",
    quote: "I create clean, responsive, and accessible web designs.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-02.webp",
    name: "James Walker",
    field: "Backend Developer",
    quote: "Building scalable, reliable backend systems.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-03.webp",
    name: "Michael Clark",
    field: "Software Engineer",
    quote: "Writing clean and efficient code.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-04.webp",
    name: "Chloe Harris",
    field: "DevOps Engineer",
    quote: "Automating processes for better workflows.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-05.webp",
    name: "Olivia Taylor",
    field: "Data Engineer",
    quote: "Turning raw data into useful insights.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-06.webp",
    name: "Daniel Smith",
    field: "Full Stack Developer",
    quote: "Building scalable, full-stack solutions.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-07.webp",
    name: "Emily Davis",
    field: "Mobile Developer",
    quote: "Creating intuitive mobile applications.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  {
    image: "/member-avatar-08.webp",
    name: "John Mitchell",
    field: "Security Engineer",
    quote: "Securing applications with preventive measures.",
    social: {
      x: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
];
