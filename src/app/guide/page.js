import GuideMain from "@/components/layout/main/GuideMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "가이드 | 셀파트너",
  description: "셀파트너 이용 가이드",
};

export default function Guide() {
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
