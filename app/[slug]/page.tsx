import { post } from "@/data/post";
import { Quote } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ButtonGroup } from "@/components/ui/button-group";
import CopyLinkButton from "@/components/ui/copy-link-button";
import ShareViaEmailButton from "@/components/ui/share-via-email-button";
import ShareOnXButton from "@/components/ui/share-on-x-button";
import ShareOnRedditButton from "@/components/ui/share-on-reddit-button";
import CommentForm from "@/components/comment-form";
import CommentsDisplay from "@/components/comments-display";
import { comments } from "@/data/comment";
import CustomCodeBlock from "@/components/ui/custom-code-block";

type StaticParams = {
  slug: string;
};

export const generateStaticParams = () => {
  return post.map((p) => ({
    slug: p.slug,
  }));
};

export default async function SinglePost({ params }: { params: StaticParams }) {
  const url = await params;

  const article = post.find((p) => p.slug === url.slug) || notFound();

  return (
    <main className="mx-auto mt-20 max-w-5xl">
      <article>
        <header>
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex h-4 gap-x-2 text-xs">
              <span>{article.author}</span>
              <Separator orientation="vertical" />
              <span>{article.date}</span>
            </div>
            <Link href={article.category.href}>
              <Badge variant="secondary">{article.category.name}</Badge>
            </Link>
          </div>
          <h1
            className="mt-2 mb-12 font-semibold tracking-tighter md:leading-[1.2]"
            style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
          >
            {article.title}
          </h1>
        </header>
        <section>
          {article.content.map((block, index) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2
                    key={index}
                    className="mt-6 -mb-3.5 font-semibold"
                    style={{
                      fontSize: "clamp(1.5rem, 1.059rem + 1.471vw, 2rem)",
                    }}
                  >
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3
                    key={index}
                    className="mt-6 -mb-3.5 font-semibold"
                    style={{
                      fontSize: "clamp(1.125rem, 0.794rem + 1.103vw, 1.5rem)",
                    }}
                  >
                    {block.text}
                  </h3>
                );
              case "p":
                return (
                  <p key={index} className="mt-5">
                    {block.text}
                  </p>
                );
              case "ul":
                return (
                  <ul
                    key={index}
                    className="mt-4 ml-4 list-inside list-disc space-y-1"
                  >
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case "blockquote":
                return (
                  <blockquote
                    key={index}
                    className="bg-secondary border-foreground relative mx-auto my-5 flex max-w-2xl flex-col rounded-md border-l-8 p-4 pl-14"
                  >
                    <Quote className="absolute top-4 left-4 scale-[-1]" />
                    <p className="italic">{block.text}</p>
                    <footer className="mt-3 text-right text-lg font-semibold">
                      - {block.quoteAuthor}
                    </footer>
                  </blockquote>
                );
              case "code":
                if (!block.code) return null;
                return (
                  <div key={index} className="my-5">
                    <CustomCodeBlock data={block.code} />
                  </div>
                );
              default:
                return null;
            }
          })}

          <div className="mx-auto mt-12 w-fit">
            <ButtonGroup>
              <CopyLinkButton />
              <ShareViaEmailButton />
              <ShareOnXButton />
              <ShareOnRedditButton />
            </ButtonGroup>
          </div>
        </section>
      </article>
      <section className="mt-40">
        <h2
          className="text-center font-semibold tracking-tighter md:leading-[1.2]"
          style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
        >
          Your Thoughts
        </h2>
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="mx-auto max-w-3xl">
            <CommentForm />
          </div>
          <div className="mt-16">
            <CommentsDisplay comments={comments} postId={article.postId} />
          </div>
        </div>
      </section>
    </main>
  );
}
