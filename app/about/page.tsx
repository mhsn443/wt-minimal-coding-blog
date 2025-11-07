import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team-members";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="mt-20">
      <h1
        className="text-center font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        About
      </h1>
      <p className="text-foreground/80 mx-auto mt-4 max-w-5xl text-center">
        We’re a team of developers who believe in simplicity, clarity, and
        purpose in code. This blog shares ideas, tutorials, and insights
        highlighting minimal, efficient, and thoughtful approaches to
        programming.
      </p>
      <div className="mx-auto mt-10 flex max-w-(--breakpoint-xl) flex-col justify-center gap-16">
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Image
                src={member.image}
                alt={member.name}
                className="aspect-square w-full rounded-lg object-cover grayscale transition-all duration-700 hover:grayscale-0"
                width={600}
                height={600}
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.field}</p>
              <p className="mt-3">{member.quote}</p>
              <div className="mt-4 flex items-center gap-2.5">
                <Button
                  className="hover:text-accent-foreground bg-accent hover:bg-accent text-muted-foreground shadow-none transition-transform hover:scale-110"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <title>X</title>
                      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                    </svg>
                  </Link>
                </Button>
                <Button
                  className="hover:text-accent-foreground bg-muted hover:bg-muted text-muted-foreground shadow-none transition-transform hover:scale-110"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                </Button>
                <Button
                  className="hover:text-accent-foreground bg-muted hover:bg-muted text-muted-foreground shadow-none transition-transform hover:scale-110"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <title>Stack Overflow</title>
                      <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
