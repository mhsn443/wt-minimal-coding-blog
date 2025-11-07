import { Button } from "@/components/ui/button";
import Link from "next/link";
import { categories } from "@/data/category";
import { ChevronRight } from "lucide-react";

export default function Categories() {
  return (
    <main className="mx-auto mt-20 w-full max-w-5xl grow">
      <h1
        className="text-center font-semibold tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)" }}
      >
        Categories
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link key={index} href={category.href} className="group h-fit">
            <Button
              variant="outline"
              className="flex h-24 w-full cursor-pointer justify-between rounded-xl px-6 text-base"
            >
              {category.name}
              <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        ))}
      </div>
    </main>
  );
}
