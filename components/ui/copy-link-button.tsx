"use client";

import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button variant="outline" onClick={handleCopy}>
      {copied ? (
        <Check size={16} aria-hidden="true" />
      ) : (
        <Copy size={16} aria-hidden="true" />
      )}
      <span className="max-sm:sr-only">Copy link</span>
    </Button>
  );
}
