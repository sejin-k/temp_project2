import Image from "next/image";
import logoImage1 from "@/assets/img/logo/Logo_1.png";
import logoImage2 from "@/assets/img/logo/Logo_2.png";
import logoImage7 from "@/assets/img/logo/Logo__7.png";
import logoImage8 from "@/assets/img/logo/Logo__8.png";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const LogoHeader = () => {
  const { style, bodyBg } = useHeaderContex();
  return (
    <div className="headerarea__component">
      <div className="headerarea__logo">
        <Link href="/">
          <Image
            placeholder="blur"
            className={style === 4 ? "logo-image7" : "logo-image8"}
            // className="logo"
            src={style === 4 && bodyBg !== "black" ? logoImage7 : logoImage8}
            alt="Bastun Logo"
          />
          {style === 4 ? (
            <Image
              placeholder="blur"
              className={style === 4 ? "logo-image7" : "logo-image8"}
              src={style === 4 && bodyBg === "black" ? logoImage8 : logoImage7}
              alt="Bastun Logo"
            />
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
