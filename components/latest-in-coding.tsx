import BlogPost from "./ui/blog-post";
import { posts } from "@/data/posts";

export default function LatestInCoding() {
  return (
    <section>
      <h2
        className="mt-40 font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        Latest In Coding
      </h2>

      {posts.slice(0, 3).map((post) => (
        <BlogPost key={post.id} post={post} isLast={post.id === 3} />
      ))}
    </section>
  );
}
