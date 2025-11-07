import { Badge } from "@/components/ui/badge";
import Avatar from "./ui/avatar";
import NewsletterEmail from "./newsletter-email";
import { Toaster } from "sonner";

export default function Hero() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex max-w-4xl flex-col items-center text-center">
        <Badge
          variant="secondary"
          className="custom-rounded-full border-border rounded-full py-1"
          asChild
        >
          <div>
            <Avatar /> Join 10,000+ Coding Enthusiasts
          </div>
        </Badge>
        <h1
          className="mt-6 font-semibold tracking-tighter md:leading-[1.2]"
          style={{ fontSize: "clamp(2.25rem, 0.231rem + 6.731vw, 4rem)" }}
        >
          Code Smarter, Not Harder
        </h1>
        <p
          className="text-foreground/80 mt-6"
          style={{ fontSize: "clamp(1rem, 0.856rem + 0.481vw, 1.125rem)" }}
        >
          Stay ahead of the curve and be part of a growing community of
          passionate developers. Sign up now to get exclusive insights,
          practical advice, and time-saving coding hacks every week!
        </p>
        <div className="mt-16 flex items-center justify-center gap-4">
          <Toaster />
          <NewsletterEmail />
        </div>
      </div>
    </section>
  );
}
