"use client";

import { useState } from "react";
import NameInputWithAnimation from "./ui/name-input-with-animation";
import ShareYourThoughtsButton from "./ui/share-your-thoughts-button";
import TextareaWithAnimation from "./ui/textarea-input-with-animation";
import { Toaster } from "./ui/sonner";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Toaster />
      <NameInputWithAnimation value={name} onChange={handleNameChange} />
      <TextareaWithAnimation value={comment} onChange={handleCommentChange} />
      <ShareYourThoughtsButton name={name} comment={comment} />
    </>
  );
}
