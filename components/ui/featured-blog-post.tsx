import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/data/posts";

export default function FeaturedBlogPost({ post }: { post: Post }) {
  return (
    <Card className="min-h-[356px] gap-y-3 p-5 shadow-none">
      <CardHeader className="flex items-center justify-between border-b px-0 !pb-4">
        <span className="text-muted-foreground flex items-center gap-x-1.5 text-xs">
          {post.date}
        </span>
        <Link href={post.category.href}>
          <Badge variant="secondary">{post.category.name}</Badge>
        </Link>
      </CardHeader>
      <CardContent className="flex grow flex-col justify-between p-0">
        <div>
          <h3 className="line-clamp-2 text-[1.4rem] font-semibold tracking-tight">
            {post.title}
          </h3>
          <p className="text-muted-foreground mt-2 line-clamp-4">
            {post.summary}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">{post.author}</span>
          <Link href={post.href} className="group flex items-center">
            Read More{" "}
            <ArrowRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
