import { ChangeEvent, useId } from "react";

import { Textarea } from "@/components/ui/textarea";

type TextareaWithAnimationProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextareaWithAnimation({
  value,
  onChange,
}: TextareaWithAnimationProps) {
  const id = useId();
  return (
    <div className="group relative mt-3">
      <label
        htmlFor={id}
        className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[+textarea:not(:placeholder-shown)]:text-foreground dark:has-aria-invalid:ring-destructive/40 absolute top-0 block translate-y-2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium"
      >
        <span className="bg-background inline-flex px-2">Comment</span>
      </label>
      <Textarea
        id={id}
        placeholder=" "
        rows={8}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
