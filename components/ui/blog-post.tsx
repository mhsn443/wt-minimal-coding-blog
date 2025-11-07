import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PostList } from "@/data/posts-list";

export default function BlogPost({ postList }: { postList: PostList }) {
  return (
    <article>
      <Card className="mx-auto max-w-5xl gap-y-2 border-none bg-transparent p-5 shadow-none">
        <CardHeader className="flex items-center justify-between px-0">
          <span className="text-muted-foreground flex items-center gap-x-1.5 text-xs">
            {postList.date}
          </span>
          <Link href={postList.category.href}>
            <Badge variant="secondary">{postList.category.name}</Badge>
          </Link>
        </CardHeader>
        <CardContent className="flex grow flex-col justify-between p-0">
          <div>
            <h3 className="line-clamp-2 text-[1.4rem] font-semibold tracking-tight">
              {postList.title}
            </h3>
            <p className="text-muted-foreground mt-2 line-clamp-4 md:line-clamp-3 lg:line-clamp-2">
              {postList.summary}
            </p>
          </div>
          <div className="mt-12 flex items-center justify-between">
            <span className="text-muted-foreground text-xs">
              {postList.author}
            </span>
            <Link href={postList.href} className="group flex items-center">
              Read More{" "}
              <ArrowRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
