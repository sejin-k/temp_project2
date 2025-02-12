import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/assets/css/icofont.min.css";
import "@/assets/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
// import "@/assets/css/responsive.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontInter",
});

export const metadata = {
  title: "셀파트너 - 셀러 활동의 파트너",
  description: "셀파트너 - 셀러 활동의 파트너",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className}`}>
        <AuthProvider>
          <ThemeProvider>
            {children}
            {modal}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
