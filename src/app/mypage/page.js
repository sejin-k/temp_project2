import MyPageMain from "@/components/layout/main/MyPageMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function MyPage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <MyPageMain />
    </PageWrapper>
  );
}
