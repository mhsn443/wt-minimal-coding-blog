"use client";

import PostsListPagination from "@/components/ui/posts-list-pagination";
import BlogPost from "@/components/ui/blog-post";
import { Separator } from "@/components/ui/separator";
import { postsList } from "@/data/posts-list";
import { notFound, redirect, useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();

  // Show 404 error if the page parameter exists but is not "page"
  if (params.page && params.page?.[0] !== "page") notFound();

  if (Number(params.page?.[1]) === 1) {
    redirect("/blog");
  }

  const page = params.page ? Number(params.page[1]) : 1;
  const POSTS_PER_PAGE = 8;

  const totalPages = Math.ceil(postsList.length / POSTS_PER_PAGE);

  // Show 404 error if the page number is invalid or out of range
  if (isNaN(page) || page > totalPages) notFound();

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
      <PostsListPagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/blog"
      />
    </main>
  );
}
