import KeywordDiscoveryMain from "@/components/layout/main/KeywordDiscoveryMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Keyword Discovery | SEO Analysis Tool",
  description: "Keyword Discovery and Analysis Tool",
};

export default function KeywordDiscovery() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <KeywordDiscoveryMain />
    </PageWrapper>
  );
} 