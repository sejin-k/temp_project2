import KeywordDiscoveryMain from "@/components/layout/main/KeywordDiscoveryMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function KeywordDiscoveryPage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <KeywordDiscoveryMain />
    </PageWrapper>
  );
}
