import BlogPost from "./ui/blog-post";
import { postsList } from "@/data/posts-list";
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
        {postsList.slice(0, 3).map((postList) => (
          <div key={postList.id}>
            <BlogPost postList={postList} />
            {postList.id !== 3 && (
              <Separator className="mx-auto my-7 max-w-5xl" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
