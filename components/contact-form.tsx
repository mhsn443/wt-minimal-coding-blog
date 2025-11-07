"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = () => {
    // Basic validation: checks if name or comment are empty
    if (!name || !email || !message) {
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
    } else if (!isEmailValid) {
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
    <div className="w-full">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-x-8 gap-y-4 md:flex-row">
          <div className="w-full">
            <Label htmlFor="name">Name</Label>
            <Input
              placeholder="Name"
              id="name"
              className="h-10 bg-white shadow-none"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              className="h-10 bg-white shadow-none"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Message"
            className="bg-white shadow-none"
            rows={6}
            value={message}
            onChange={handleMessageChange}
          />
        </div>
      </div>
      <Button className="mt-6 w-full" size="lg" onClick={handleSubmitMessage}>
        Send Message
      </Button>
    </div>
  );
}
