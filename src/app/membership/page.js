import MembershipMain from "@/components/layout/main/MembershipMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "멤버십 | 셀파트너",
  description: "셀파트너 멤버십 플랜",
};

export default function Membership() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
    >
      <MembershipMain />
    </PageWrapper>
  );
}
