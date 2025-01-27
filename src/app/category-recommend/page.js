import CategoryRecommendMain from "@/components/layout/main/CategoryRecommendMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function ProductRecommendPage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <CategoryRecommendMain />
    </PageWrapper>
  );
}
