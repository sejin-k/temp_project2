import GuideMain from "@/components/layout/main/GuideMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function GuidePage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <GuideMain />
    </PageWrapper>
  );
}
