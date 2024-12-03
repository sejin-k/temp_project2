import OpenMarketBestMain from "@/components/layout/main/OpenMarketBestMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function OpenMarketBest() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <OpenMarketBestMain />
    </PageWrapper>
  );
}
