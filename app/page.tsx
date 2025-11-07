import FeaturedPosts from "@/components/featured-posts";
import Hero from "@/components/hero";
import LatestInCoding from "@/components/latest-in-coding";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPosts />
      <LatestInCoding />
    </main>
  );
}
