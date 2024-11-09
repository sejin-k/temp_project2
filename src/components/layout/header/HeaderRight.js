import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const HeaderRight = () => {
  const { style } = useHeaderContex();

  return (
    <div className="headerarea__component">
      <div className="headerarea__right">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link href="/membership" className="btn btn-outline">
              멤버쉽
            </Link>
          </li>
          <li className="header__nav-item">
            <Link href="/guide" className="btn btn-outline">
              가이드
            </Link>
          </li>
          <li className="header__nav-item">
            <Link href="/login" className="btn btn-primary">
              로그인/가입
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderRight;
