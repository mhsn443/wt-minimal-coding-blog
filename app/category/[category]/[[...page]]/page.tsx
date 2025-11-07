import PostsListPagination from "@/components/ui/posts-list-pagination";
import BlogPost from "@/components/ui/blog-post";
import { Separator } from "@/components/ui/separator";
import { postsList } from "@/data/posts-list";
import { notFound, redirect } from "next/navigation";
import { categories } from "@/data/category";
import { featuredCategories } from "@/data/featured-category";

type StaticParams = {
  category: string;
  page?: string[];
};

const allCategories = categories.concat(featuredCategories);
const POSTS_PER_PAGE = 8;

export const generateStaticParams = () => {
  return allCategories
    .map((category) => {
      const categoryPosts = postsList.filter(
        (post) =>
          post.category.slug === category.slug ||
          post.featuredCategories?.some(
            (featuredCategory) => featuredCategory.slug === category.slug,
          ),
      );

      const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);

      const pages: StaticParams[] = [];

      for (let page = 1; page <= totalPages; page++) {
        pages.push({
          category: category.slug,
          page: page === 1 ? [] : ["page", page.toString()],
        });
      }

      return pages;
    })
    .flat();
};

export default async function CategoryPosts({
  params,
}: {
  params: StaticParams;
}) {
  const { category, page } = await params;

  const pageTitle =
    allCategories.find((item) => item.slug === category)?.name || "";

  // Show 404 error if the page parameter exists but is not "page"
  if (page && (page?.length === 1 || page?.length > 2 || page?.[0] !== "page"))
    notFound();

  // Redirects URL "/page" or "/page/1" to category page
  if (page?.[0] === "page" && page?.[1] === "1") {
    redirect(`/category/${category}`);
  }

  let filteredPosts = postsList.filter((post) =>
    post.featuredCategories?.some(
      (featuredCategory) => featuredCategory.slug === category,
    ),
  );

  if (filteredPosts.length === 0) {
    filteredPosts = postsList.filter((post) => post.category.slug === category);
  }

  // Show 404 error if no posts are found or category doesn't exist
  if (!filteredPosts.length) notFound();

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

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
  const currentPostsList = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  return (
    <main className="mt-20">
      <h1
        className="text-center font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        {pageTitle}
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
        basePath={`/category/${category}`}
      />
    </main>
  );
}
