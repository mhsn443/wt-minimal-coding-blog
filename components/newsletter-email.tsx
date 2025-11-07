"use client";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterEmail() {
  const [email, setEmail] = useState("");
  const id = useId();

  const handleSubmitEmail = () => {
    // Basic validation: checks if email is valid
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      // Display error message if validation fails
      toast.error("Please enter a valid email.", {
        style: {
          "--normal-bg":
            "color-mix(in oklab, var(--destructive) 10%, var(--background))",
          "--normal-text": "var(--destructive)",
          "--normal-border": "var(--destructive)",
        } as React.CSSProperties,
        position: "top-center",
      });
    } else {
      // Display success message if validation succeed
      toast.success("You're all set. Welcome to the community!", {
        style: {
          "--normal-bg":
            "color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))",
          "--normal-text":
            "light-dark(var(--color-green-600), var(--color-green-400))",
          "--normal-border":
            "light-dark(var(--color-green-600), var(--color-green-400))",
        } as React.CSSProperties,
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          type="email"
          placeholder="Email address"
          className="-me-px h-11 rounded-r-none shadow-none focus-visible:z-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button className="h-11 rounded-l-none" onClick={handleSubmitEmail}>
          Subscribe
        </Button>
      </div>
    </div>
  );
}
