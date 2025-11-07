"use client";

import { post } from "@/data/post";
import { Quote } from "lucide-react";
import { useParams } from "next/navigation";
import type { BundledLanguage } from "@/components/ui";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/ui";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ButtonGroup } from "@/components/ui/button-group";
import CopyLinkButton from "@/components/ui/copy-link-button";
import ShareViaEmailButton from "@/components/ui/share-via-email-button";
import ShareOnXButton from "@/components/ui/share-on-x-button";
import ShareOnRedditButton from "@/components/ui/share-on-reddit-button";

export default function SinglePost() {
  const params = useParams();
  const article = post.find((p) => p.slug === params.slug) || notFound();

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
                return (
                  <div key={index} className="my-5">
                    <CodeBlock
                      data={block.code ?? []}
                      defaultValue={block.code?.[0].language ?? "ts"}
                      className=""
                    >
                      <CodeBlockHeader>
                        <CodeBlockFiles>
                          {(item) => (
                            <CodeBlockFilename
                              key={item.language}
                              value={item.language}
                            >
                              {item.filename}
                            </CodeBlockFilename>
                          )}
                        </CodeBlockFiles>
                        <CodeBlockSelect>
                          <CodeBlockSelectTrigger>
                            <CodeBlockSelectValue />
                          </CodeBlockSelectTrigger>
                          <CodeBlockSelectContent>
                            {(item) => (
                              <CodeBlockSelectItem
                                key={item.language}
                                value={item.language}
                              >
                                {item.language}
                              </CodeBlockSelectItem>
                            )}
                          </CodeBlockSelectContent>
                        </CodeBlockSelect>
                        <CodeBlockCopyButton
                          onCopy={() => console.log("Copied code to clipboard")}
                          onError={() =>
                            console.error("Failed to copy code to clipboard")
                          }
                        />
                      </CodeBlockHeader>
                      <CodeBlockBody>
                        {(item) => (
                          <CodeBlockItem
                            key={item.language}
                            value={item.language}
                          >
                            <CodeBlockContent
                              language={item.language as BundledLanguage}
                            >
                              {item.code}
                            </CodeBlockContent>
                          </CodeBlockItem>
                        )}
                      </CodeBlockBody>
                    </CodeBlock>
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
    </main>
  );
}
