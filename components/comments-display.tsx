import type { Comment } from "@/data/comment";
import { Reply } from "lucide-react";
import { Button } from "./ui/button";
import CommentReplies from "./ui/comment-replies";

type CommentDisplayProps = {
  comments: Comment[];
  postId: number;
};

export default function CommentDisplay({
  comments,
  postId,
}: CommentDisplayProps) {
  const postComments = comments.filter((comment) => comment.postId === postId);

  const mainComments = postComments.filter(
    (comment) => comment.parentId == null,
  );
  const replies = postComments.filter((comment) => comment.parentId !== null);

  return (
    <div>
      {mainComments.map((comment) => (
        <div key={comment.id} className="mt-10">
          <div className="flex items-center gap-3 text-sm font-bold">
            {comment.name}
            <span className="bg-muted-foreground block h-0.5 w-0.5 rounded-full"></span>
            <span className="text-muted-foreground text-xs font-normal">
              {comment.date}
            </span>
          </div>

          <p className="mt-1">{comment.message}</p>

          <Button
            variant="ghost"
            className="group text-muted-foreground mt-1 flex items-center text-sm"
          >
            <Reply className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Reply
          </Button>

          <div className="ml-4 border-l pl-4">
            <CommentReplies comment={comment} replies={replies} />
          </div>
        </div>
      ))}
    </div>
  );
}
