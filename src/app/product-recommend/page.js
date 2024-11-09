import ProductRecommendMain from "@/containers/product-recommend/ProductRecommendMain"
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "About | Bastun- Business Consulting Next Js Template",
  description: "About | Bastun- Business Consulting Next Js Template",
};
export default function About() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ProductRecommendMain bg={"white"}/>
    </PageWrapper>
  );
}
