import PostsListPagination from "@/components/ui/posts-list-pagination";
import BlogPost from "@/components/ui/blog-post";
import { Separator } from "@/components/ui/separator";
import { postsList } from "@/data/posts-list";
import { notFound, redirect } from "next/navigation";

type StaticParams = {
  page?: string[];
};

const POSTS_PER_PAGE = 8;
const totalPages = Math.ceil(postsList.length / POSTS_PER_PAGE);

export const generateStaticParams = () => {
  const pages = Array.from({ length: totalPages }, (_, index) => ({
    page: [(index + 1).toString()],
  }));

  return pages;
};

export default async function Blog({ params }: { params: StaticParams }) {
  // Show 404 error if no posts are found or category doesn't exist
  if (!postsList.length) notFound();

  const { page } = await params;

  // Show 404 error if the page parameter exists but is not "page"
  if (page && (page?.length === 1 || page?.length > 2 || page?.[0] !== "page"))
    notFound();

  // Redirects URL "/page" or "/page/1" to category page
  if (page?.[0] === "page" && page?.[1] === "1") {
    redirect("/blog");
  }

  // Show 404 error if the page number is invalid or out of range
  if (
    page &&
    (isNaN(Number(page?.[1])) ||
      Number(page?.[1]) > totalPages ||
      Number(page?.[1]) < 1)
  )
    notFound();

  const pageNumber = Number(page?.[1]) || 1;
  const startIndex = (pageNumber - 1) * POSTS_PER_PAGE;
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
        currentPage={pageNumber}
        totalPages={totalPages}
        basePath="/blog"
      />
    </main>
  );
}
