import { BlogCategoryFilter } from "@/components/blog/blog-category-filter";
import Container from "@/components/container";
import { HeaderSection } from "@/components/shared/header-section";

export default async function BlogListLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="mt-8 w-full flex flex-col items-center justify-center gap-8">
        <HeaderSection
          labelAs="h1"
          label="博客"
          titleAs="h2"
          title="阅读最新文章"
        />

        <BlogCategoryFilter />
      </div>

      <Container className="mt-8">{children}</Container>
    </div>
  );
}
