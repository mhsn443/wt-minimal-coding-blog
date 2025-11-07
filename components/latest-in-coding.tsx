import BlogPost from "./ui/blog-post";
import { posts } from "@/data/posts";
import { Separator } from "./ui/separator";

export default function LatestInCoding() {
  return (
    <section>
      <h2
        className="mt-40 font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        Latest In Coding
      </h2>

      <div className="mt-1">
        {posts.slice(0, 3).map((post) => (
          <div key={post.id}>
            <BlogPost post={post} />
            {post.id !== 3 && <Separator className="mx-auto my-7 max-w-5xl" />}
          </div>
        ))}
      </div>
    </section>
  );
}
