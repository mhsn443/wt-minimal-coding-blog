"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type SonnerButtonProps = {
  name: string;
  comment: string;
};

export default function ShareYourThoughtsButton({
  name,
  comment,
}: SonnerButtonProps) {
  const handleSubmitComment = () => {
    // Basic validation: checks if name or comment are empty
    if (!name || !comment) {
      // Display error message if validation fails
      toast.error("Please fill in all fields.", {
        style: {
          "--normal-bg":
            "color-mix(in oklab, var(--destructive) 10%, var(--background))",
          "--normal-text": "var(--destructive)",
          "--normal-border": "var(--destructive)",
        } as React.CSSProperties,
        position: "top-center",
      });
    } else {
      // Display success message if all fields are filled
      toast.success("Your thoughts shared successfully!", {
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
    <Button className="mt-3 w-full" size="lg" onClick={handleSubmitComment}>
      Share Your Thoughts
    </Button>
  );
}
