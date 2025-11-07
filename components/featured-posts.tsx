import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredCategories } from "@/data/featured-category";
import { FeaturedPostsCarousel } from "./ui/featured-posts-carousel";

export default function FeaturedPosts() {
  return (
    <section>
      <Tabs defaultValue={featuredCategories[0].value} className="w-full">
        <TabsList className="bg-background mt-40 w-full max-w-3xl justify-start space-x-2 overflow-x-auto rounded-none p-0">
          {featuredCategories.map((featuredCategory) => (
            <TabsTrigger
              key={featuredCategory.value}
              value={featuredCategory.value}
              className="bg-secondary data-[state=active]:border-primary h-full min-w-40 rounded-md border-b-2 border-transparent data-[state=active]:shadow-none"
            >
              <code className="text-[13px]">{featuredCategory.name}</code>
            </TabsTrigger>
          ))}
        </TabsList>

        {featuredCategories.map((featuredCategory) => (
          <TabsContent
            key={featuredCategory.value}
            value={featuredCategory.value}
          >
            <FeaturedPostsCarousel featuredCategory={featuredCategory} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
