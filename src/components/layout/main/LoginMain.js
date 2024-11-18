"use client";
import { useEffect } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import SocialLoginButton from "@/components/sellpartner/buttons/SocialLoginButton";
import "@/assets/css/login.css";

const LoginMain = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="login__page__wrapper theme__bg__3">
      <main className="login__area d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login__content text-center">
                {/* 타이틀 */}
                <div className="section__title text-center sp_bottom_20">
                  <div className="section__title__button">
                    <span className="text__gradient">
                      Welcome to Sellpartner
                    </span>
                  </div>
                  <div className="section__title__heading">
                    <h2
                      className="text-white"
                      style={{
                        fontSize: "24px",
                        lineHeight: "1.4",
                        marginBottom: "10px",
                      }}
                    >
                      셀파트너와 함께
                      <br />
                      매출상승을 경험해보세요!
                    </h2>
                  </div>
                </div>

                {/* 로그인/회원가입 텍스트 */}
                <div className="login__subtitle sp_bottom_20">
                  <p className="text-white opacity-75" style={{ marginTop: 0 }}>
                    로그인/회원가입
                  </p>
                </div>

                {/* 소셜 로그인 버튼들 */}
                <div className="login__buttons">
                  <SocialLoginButton provider="naver">
                    네이버로 시작하기
                  </SocialLoginButton>

                  <SocialLoginButton provider="kakao">
                    카카오로 시작하기
                  </SocialLoginButton>

                  <SocialLoginButton provider="google">
                    구글로 시작하기
                  </SocialLoginButton>
                </div>

                {/* 계정 정보 찾기 링크 */}
                {/* <div className="login__footer sp_top_30">
                  <Link
                    href="#"
                    className="text-white opacity-75 hover-underline"
                  >
                    계정 정보를 잊으셨나요? &gt;
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginMain;
