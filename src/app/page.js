import IndexMain from "@/components/layout/main/IndexMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <IndexMain />
    </PageWrapper>
  );
}
