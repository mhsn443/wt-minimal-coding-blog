import { useId } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterEmail() {
  const id = useId();

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          type="email"
          placeholder="Email address"
          className="-me-px h-11 rounded-r-none shadow-none focus-visible:z-1"
        />
        <Button className="h-11 rounded-l-none">Subscribe</Button>
      </div>
    </div>
  );
}
