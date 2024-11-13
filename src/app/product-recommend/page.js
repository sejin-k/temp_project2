import ProductRecommendMain from "@/components/layout/main/ProductRecommendMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function ProductRecommendPage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <ProductRecommendMain />
    </PageWrapper>
  );
}
