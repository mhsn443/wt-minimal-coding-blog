import type { Comment } from "@/data/comment";
import { Button } from "./button";
import { Reply } from "lucide-react";

export default function CommentReplies({
  comment,
  replies,
}: {
  comment: Comment;
  replies: Comment[];
}) {
  return (
    <div>
      {replies
        .filter((reply) => reply.parentId === comment.id) // فیلتر کردن پاسخ‌های مربوط به این نظر
        .map((reply) => (
          <div key={reply.id} className="mt-4">
            <div className="flex items-center gap-3 text-sm font-bold">
              {reply.name}
              <span className="bg-muted-foreground block h-0.5 w-0.5 rounded-full"></span>
              <span className="text-muted-foreground text-xs font-normal">
                {reply.date}
              </span>
            </div>

            <p className="mt-1">
              <span className="text-muted-foreground mr-1 text-xs">
                <span className="mr-0.5">@</span>
                {comment.name}
              </span>
              {reply.message}
            </p>

            <Button
              variant="ghost"
              className="group text-muted-foreground mt-1 flex items-center text-sm"
            >
              <Reply className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Reply
            </Button>

            <CommentReplies comment={reply} replies={replies} />
          </div>
        ))}
    </div>
  );
}
