import LoginMain from "@/components/layout/main/LoginMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "로그인 | 셀파트너",
  description: "셀파트너 로그인 페이지",
};

export default function Login() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg="theme-3"
      footerBg="theme-3"
      className="theme__bg__3"
    >
      <div className="theme__bg__3">
        <LoginMain />
      </div>
    </PageWrapper>
  );
}
