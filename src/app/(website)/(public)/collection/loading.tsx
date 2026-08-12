import { CollectionGridSkeleton } from "@/components/collection/collection-grid";
import Container from "@/components/container";
import { HeaderSection } from "@/components/shared/header-section";

export default function Loading() {
  return (
    <div className="mb-16">
      <div className="mt-8">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <HeaderSection
            labelAs="h1"
            label="合集"
            titleAs="h2"
            title="浏览精选合集"
          />
        </div>
      </div>

      <Container className="mt-8">
        <CollectionGridSkeleton />
      </Container>
    </div>
  );
}
