import TermsMain from "@/components/layout/main/TermsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Terms() {
  return (
    <PageWrapper>
      <ThemeController />
      <TermsMain />
    </PageWrapper>
  );
}
