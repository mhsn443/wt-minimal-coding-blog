"use client";

import BlogPagination from "@/components/ui/blog-pagination";
import BlogPost from "@/components/ui/blog-post";
import { Separator } from "@/components/ui/separator";
import { postsList } from "@/data/posts-list";
import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();

  const page = params.page ? Number(params.page[1]) : 1;
  const POSTS_PER_PAGE = 8;

  const totalPages = Math.ceil(postsList.length / POSTS_PER_PAGE);

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const currentPostsList = postsList.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  return (
    <main className="mt-20">
      <h1
        className="text-center font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        Blog
      </h1>
      <div className="mt-4">
        {currentPostsList.map((postList, index) => (
          <div key={postList.id}>
            <BlogPost postList={postList} />
            {index !== currentPostsList.length - 1 && (
              <Separator className="mx-auto my-7 max-w-5xl" />
            )}
          </div>
        ))}
      </div>
      <BlogPagination currentPage={page} totalPages={totalPages} />
    </main>
  );
}
