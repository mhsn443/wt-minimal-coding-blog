import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-3xl">Page Not Found</p>
      <p className="text-muted-foreground mt-2">
        This page got lost in a refactor. Don’t worry, the homepage survived!
      </p>
      <Link href={"/"} className="mt-8">
        <Button className="cursor-pointer">Return to Homepage</Button>
      </Link>
    </section>
  );
}
