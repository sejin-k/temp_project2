import footerImage1 from "@/assets/img/footer/footer_1.png";
import footerImage2 from "@/assets/img/footer/footer__bg__1.png";
import footerImage3 from "@/assets/img/footer/footer__bg__2.png";
import FooterBadge from "./FooterBadge";
import LogoFooter from "./LogoFooter";
import SupportFooter from "./SupportFooter";
import LinksFooter from "./LinksFooter";
import Copyright from "./Copyright";
import GalleryFooter from "./GalleryFooter";
import Copyright2 from "./Copyright2";
import ConsultingFooter from "./ConsultingFooter";
import Brands4 from "@/components/sections/brands/Brands4";
import CompanyInfo from "./CompanyInfo";

const Footer = ({ style, footerBg, copyright }) => {
  return (
    <footer
      className={`footer__area ${footerBg === "black" ? "bg__black" : ""}`}
      style={{
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <LinksFooter />
          <CompanyInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
