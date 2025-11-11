import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="mt-20 w-full">
      <h1
        className="text-center font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        Contact
      </h1>
      <p className="text-foreground/80 mx-auto mt-4 max-w-5xl text-center">
        Have a question or feedback? Feel free to reach out to us.
      </p>
      <section className="mt-10 w-full">
        <Card className="bg-accent py-0 shadow-none">
          <CardContent className="flex flex-col items-start gap-8 p-6 md:p-8 lg:flex-row">
            {/* Contact info */}
            <div className="bg-foreground text-background w-full rounded-lg px-6 py-8 lg:min-h-[310px] lg:w-fit">
              <h2
                className="font-medium"
                style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)" }}
              >
                Reach Out
              </h2>
              <p className="mt-1 text-sm">Here’s how to reach us.</p>
              <span className="mt-10 flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row">
                <Phone className="size-6 shrink-0" /> +1-800-555-1234
              </span>
              <span className="mt-5 flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row">
                <Mail className="size-6 shrink-0" /> email@example.com
              </span>
              <span className="mt-5 flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row">
                <MapPin className="size-6 shrink-0" /> 789 Maple Ave, Suite 305,
                Rivertown, TX 75001, USA
              </span>
            </div>

            {/* Contact form */}
            <Toaster />
            <ContactForm />
          </CardContent>
        </Card>
        <div>
          <p></p>
        </div>
      </section>
    </main>
  );
}
