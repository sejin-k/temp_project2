import Home7Main from "@/components/layout/main/Home7Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 7 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 7 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home7Onepage() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"} isOnepage={true}>
      <ThemeController />
      <Home7Main />
    </PageWrapper>
  );
}