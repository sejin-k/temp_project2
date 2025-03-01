"use client";
import Image from "next/image";
import contactImage2 from "@/assets/img/contact/contact__2.png";
import useSearch from "@/hooks/useSearch";
import CommonContext from "@/providers/CommonContext";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import getAllBlogs from "@/libs/getAllBlogs";

const TermsPrimary = () => {
  return (
    <div className="container">
      <div className="section__title" style={{ marginBottom: "40px" }}>
        <h2>셀파트너 이용약관</h2>
      </div>
      <div className="terms-content">
        <section className="mb-5">
          <h3>제1조 (목적)</h3>
          <p>
            본 약관은 셀파트너(이하 "회사"라 합니다)가 이용자에게 제공하는
            '셀파트너' 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무,
            책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="mb-5">
          <h3>제2조 (정의)</h3>
          <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
          <ol>
            <li>
              1."셀파트너" 또는 "서비스"라 함은 회사가 셀파트너
              웹사이트(https://sellpartner.kr/) 기타 플랫폼(이하 "플랫폼"이라
              합니다)을 통하여 회원에게 제공하는 일체의 서비스를 의미합니다.
            </li>
            <li>
              2."이용자"는 플랫폼에 접속하여 회사가 제공하는 서비스를 이용하는
              회원 및 비회원을 의미합니다.
            </li>
            <li>
              3."회원"은 본 약관에 동의하고 플랫폼 상의 회원가입 절차를 완료한
              자를 의미합니다.
            </li>
            <li>
              4."비회원"은 회원으로 가입하지 않고 서비스를 이용하는 이용자를
              의미합니다.
            </li>
            <li>
              5."계정(ID)"이라 함은 회원의 식별과 서비스 이용을 위하여 회원이
              선정하고 회사가 부여하는 문자, 숫자 또는 특수 문자의 조합을
              의미합니다.
            </li>
            <li>
              6."비밀번호"라 함은 회원이 부여 받은 계정(ID)과 일치되는 회원임을
              확인하고 회원의 정보 및 권익보호를 위해 회원 자신이 선정하여
              비밀로 관리하는 문자, 숫자 또는 특수 문자의 조합을 의미합니다.
            </li>
            <li>
              7."계정정보"라 함은 회원의 계정(ID), 비밀번호, 성명 등 회원이
              회사에 제공한 일반정보 및 서비스 이용정보 등 생성 정보를
              통칭합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제3조 (약관의 명시와 개정 등)</h3>
          <ol>
            <li>
              회사는 이 약관의 내용을 이용자가 알 수 있도록 플랫폼 상에
              게시하거나 연결화면을 제공하는 방법으로 이용자에게 공지합니다.
            </li>
            <li>
              회사는 「약관의 규제에 관한 법률」 등 관련 법령에 위배하지 않는
              범위에서 본 약관을 개정할 수 있습니다.
            </li>
            <li>
              회사는 약관을 개정할 경우에는 적용일자 및 개정내용, 개정 사유 등을
              명시하여 그 적용일자로부터 최소한 7일 이전(이용자에게 불리하거나
              중대한 항목 변경은 30일 이전)부터 그 적용일자 경과 후 상당한
              기간이 경과할 때까지 초기화면 또는 초기화면과의 연결화면을 통해
              공지합니다.
            </li>
            <li>
              회사는 약관을 개정할 경우에는 원칙적으로 개정약관 공지 후
              개정약관의 적용에 대한 이용자의 동의 여부를 확인합니다. 다만
              개정약관 공지 시 이용자가 동의 또는 거부의 의사표시를 하지 않으면
              승낙한 것으로 간주하겠다는 내용도 함께 공지한 경우에는 이용자가
              약관 시행일까지 거부의사를 표시하지 않는다면 개정약관에 동의한
              것으로 간주됩니다.
            </li>
            <li>
              이용자는 개정약관의 적용에 동의하지 않는 경우 회원의 경우 회사와의
              서비스 이용계약을 해지할 수 있으며, 이용자는 서비스 이용을 중단할
              수 있습니다.
            </li>
            <li>
              회사는 서비스 제공 및 운영을 위해 별도의 운영정책을 마련하여
              운영할 수 있으며, 이 경우 회사는 사전 공지 후 운영정책을 적용하며
              본 약관에 의한 이용자 모두에게 그 효력이 발생합니다. 회사는
              이용자가 운영정책의 내용을 서비스 내에서 확인할 수 있도록 합니다.
            </li>
            <li>
              본 약관에서 규정되지 않은 사항이나 해석에 대해서는 별도의
              운영정책, 관련법령 또는 상관례에 따릅니다. 또한 본 약관과
              운영정책이 내용상 충돌할 경우 별도 규정된 운영정책의 내용이 효력상
              우선합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제4조 (회원가입)</h3>
          <ol>
            <li>
              회원이 되려고 하는 자는 약관의 내용에 대하여 동의를 하고, 플랫폼
              상의 회원가입 페이지에서 제공하는 양식을 작성하여 회원가입 하는
              방법으로 이용신청을 하여야 합니다.
            </li>
            <li>
              회사는 회원이 되려고 하는 자에게 실명확인 및 본인인증, 기타 필요한
              정보를 요구할 수 있으며, 그 절차와 방식은 관련 법령에 따릅니다.
            </li>
            <li>
              회원이 되려고 하는 자는 이용신청 시 제1항에서 구하는 정보 항목에
              대하여 진실한 정보를 기재하여야 합니다. 실명 또는 정보를 허위로
              기재하거나 타인의 명의를 도용한 경우 이 약관에 의한 회원의 권리를
              주장할 수 없고, 회사는 별도 조치없이 서비스 이용계약을 취소하거나
              해지할 수 있습니다.
            </li>
            <li>
              회원가입은 회원의 약관에 대한 동의와 회원의 이용신청에 대한 회사의
              승낙으로 성립합니다. 이 약관에 관한 동의는 이용신청 당시 회사
              이용약관에 동의함을 선택하거나 기타 동의 버튼 또는 서명 등을 통해
              이루어집니다.
            </li>
          </ol>
        </section>
        <section className="mb-5">
          <h3>제5조 (이용신청의 승낙과 제한)</h3>
          <ol>
            <li>
              회원이 되려는 자가 제4조에서 정하는 바에 따라 정당하게 이용신청을
              한 경우에 회사는 상당한 이유가 없는 한 그 이용신청을 승낙합니다.
            </li>
            <li>
              제1항에도 불구하고, 회사는 다음 각 호의 어느 하나에 해당하는
              이용신청에 대해서 승낙을 하지 않을 수 있습니다.
              <ol>
                <li>제4조에 위반하여 이용신청을 하는 경우</li>
                <li>
                  자신에게 책임 있는 사유로 이용이 제한되었던 기록이 있는 자가
                  이용신청을 하는 경우
                </li>
                <li>
                  법령에서 금지하는 위법행위를 할 목적으로 이용신청을 하는 경우
                </li>
                <li>회사의 이익을 저해하려는 목적으로 이용신청을 하는 경우</li>
                <li>
                  이전에 회원의 자격을 상실한 적이 있는 자로서 회사의 회원
                  재가입 승낙을 얻지 못한 경우
                </li>
                <li>
                  그 밖에 1호 내지 5호에 준하는 사유로서 승낙이 부적절하다고
                  판단되는 경우
                </li>
              </ol>
            </li>
            <li>
              회사는 다음 각 호의 어느 하나에 해당하는 경우에는 그 사유가 해소될
              때까지 승낙을 유보할 수 있습니다.
              <ol>
                <li>
                  서비스 관련 제반 용량의 부족함 등 회사의 설비에 여유가 없는
                  경우
                </li>
                <li>기술상 장애 사유가 있는 경우</li>
                <li>
                  그 밖에 위 각 호에 준하는 사유로 이용신청의 승낙이 곤란한 경우
                </li>
              </ol>
            </li>
            <li>
              회원의 이용신청에 대하여 회사가 승낙한 경우, 회원이 본 약관 및
              관련 법령을 위반하지 않은 이상 회원과 회사 간에 유효하게 서비스
              이용계약이 체결된 것으로 봅니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제6조 (회원 계정(ID) 및 비밀번호)</h3>
          <ol>
            <li>
              회사는 회원에 대하여 서비스 이용에 필요한 계정(ID)을 부여합니다.
            </li>
            <li>
              회사는 계정정보를 통하여 당해 회원의 서비스 이용가능 여부 등을
              판단하는 등 제반 회원 관리업무를 수행할 권한이 있으며, 다음과 같은
              이유로 회원의 아이디 및 비밀번호 변경을 요구하거나 변경할 수
              있습니다.
              <ol>
                <li>
                  회원 아이디가 회원의 이메일, 전화번호 등으로 등록되어 사생활
                  침해가 우려되는 경우
                </li>
                <li>
                  타인에게 혐오감을 주거나 미풍양속에 저해할 목적으로 신청한
                  경우
                </li>
                <li>
                  보안 및 아이디 정책, 서비스의 원활한 제공 등의 목적으로 변경할
                  필요성이 있는 경우
                </li>
                <li>기타 회사가 필요하다고 인정하는 경우</li>
              </ol>
            </li>
            <li>
              회원은 자신의 계정정보를 선량한 관리자로서의 주의의무를 다하여
              관리하여야 합니다. 회원이 본인의 계정정보를 소홀히 관리하거나
              제3자에게 이용을 승낙함으로써 발생하는 손해에 대하여는 회원에게
              책임이 있으며, 회사에게 고의 또는 과실이 없는 한 회사는 관련
              책임을 부담하지 않습니다.
            </li>
            <li>
              비밀번호의 관리책임은 회원에게 있으며, 회원은 원하는 경우
              비밀번호를 언제든지 변경할 수 있습니다.
            </li>
            <li>회원은 정기적으로 비밀번호를 변경하여야 합니다.</li>
            <li>
              회원은 계정 정보가 도용되거나 제3자가 이를 사용하고 있음을 인지한
              경우 이를 즉시 회사에 통지하고 회사의 안내에 따라야 합니다. 회원이
              이를 인지하고서도 통지하지 않거나, 통지한 경우에도 회사의 안내에
              따르지 않아 발생한 피해에 대해 회사는 고의 또는 과실이 없는 한
              책임지지 않습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제7조 (회원 정보의 제공 및 변경)</h3>
          <ol>
            <li>
              회원은 본 약관에 의하여 회사에 정보를 제공하여야 하는 경우에는
              진실된 정보를 제공하여야 하며, 허위정보 제공으로 인해 발생한
              불이익에 대해서는 보호받지 못합니다.
            </li>
            <li>
              회원은 플랫픔을 통해 자신의 개인정보를 열람하고 수정할 수
              있습니다. 다만, 서비스 관리를 위해 필요한 실명, 계정(ID) 등은
              수정이 제한될 수 있습니다. 이러한 경우에는 새로운 계정(ID)으로
              재가입해 하며, 회원 탈퇴한 계정(ID)은 재가입이 제한됩니다.
            </li>
            <li>
              회원은 회사에 제공한 정보가 변경되었을 경우 지체 없이 온라인으로
              수정을 하거나 스스로 수정이 불가능한 경우 회사에 대하여 그
              변경사항을 알려야 합니다.
            </li>
            <li>
              회원이 회원정보의 변경사항을 제2항에 의하여 수정하지 아니하거나
              제3항에 의하여 회사에 알리지 아니하여 발생한 불이익에 대하여
              회사는 책임을 지지 아니하며, 수정하지 아니하여 발생하는 문제의
              책임은 회원에게 있습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제8조 (개인정보의 보호 및 관리)</h3>
          <ol>
            <li>
              회사는 관련 법령이 정하는 바에 따라 계정정보 등을 포함한 이용자의
              개인정보를 보호하기 위해 노력합니다. 이용자의 개인정보의 보호 및
              사용에 대해서는 관련 법령 및 회사가 별도로 공지하는 개인정보
              처리방침이 적용됩니다.
            </li>
            <li>
              회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보,
              신용정보의 보호를 위해 보안시스템을 갖추어야 하며
              개인정보처리방침을 공시하고 준수합니다. 회사는 관련 법령, 본 약관
              및 개인정보처리방침에서 정한 경우를 제외하고는 이용자의 개인정보가
              제3자에게 공개 또는 제공되지 않도록 합니다.
            </li>
            <li>
              회사는 이용자의 귀책사유로 인하여 노출된 계정정보를 포한 타인의
              모든 개인정보, 비밀정보에 대해서 일체의 책임을 지지 않습니다.
            </li>
            <li>
              회사는 서비스를 확장ᆞ추가하는 경우 이용자의 개인정보 및 데이터를
              이전할 수 있고, 이전한 개인정보 및 데이터를 이용할 수 있습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제9조 (회사의 의무)</h3>
          <ol>
            <li>
              회사는 관련 법령과 본 약관이 정하는 권리의 행사와 의무의 이행을
              신의에 좇아 성실하게 하여야 합니다.
            </li>
            <li>
              회사는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을
              하던 중 설비에 장애가 생기거나 데이터 등이 멸실된 때에는 천재지변,
              비상사태, 해결이 곤란한 기술적 결함 등 부득이한 사유가 없는 한
              지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다. 다만
              협력사의 설비에 장애가 생기거나 협력사의 고의 또는 과실로 인하여
              데이터 등이 멸실된 때에는 회사에 고의 또는 중과실 없는 한 회사는
              면책됩니다.
            </li>
            <li>
              회사가 제공하는 서비스로 인하여 이용자에게 손해가 발생한 경우
              그러한 손해가 회사의 고의나 과실에 기해 발생한 경우에 한하여
              책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다.
            </li>
            <li>
              회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정할
              경우에는 신속히 처리하여야 합니다. 다만, 신속한 처리가 곤란한
              경우에는 이용자에게 그 사유와 처리일정을 통보하여야 합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제10조 (이용자의 의무)</h3>
          <ol>
            <li>
              이용자는 다음 행위(또는 이에 준하는 행위를 포함함)를 하여서는 안
              됩니다.
              <ol>
                <li>
                  비정상적인 시스템 접근
                  <ul>
                    <li>
                      악성코드, 바이러스 등의 프로그램을 고의 또는 과실로 설치,
                      유포하는 행위
                    </li>
                    <li>
                      회사가 제공하는 프로그램 또는 서비스의 일부를 수정,
                      무단복제 하거나 리버스엔지니어링, 디컴파일, 디스어셈블 및
                      기타 일체의 가공행위를 통하여 복제, 분해 또는 모방 기타
                      변형하는 행위
                    </li>
                  </ul>
                </li>
                <li>
                  비정상적인 서비스 이용
                  <ul>
                    <li>
                      회사가 제공하는 서비스의 결과물을 불법적인 목적으로
                      사용하는 행위
                    </li>
                    <li>
                      회사의 동의 없이 영리, 영업, 광고, 정치활동 등을 목적으로
                      서비스를 사용하는 행위
                    </li>
                    <li>
                      실제 정보와 일치하지 않는 정보 또는 타인의 정보로
                      회원가입을 하는 행위
                    </li>
                    <li>다수의 계정으로 활동을 하는 행위</li>
                    <li>
                      계정 내 불리한 정보를 삭제하기 위해 의도적으로 계정을
                      탈퇴/재가입하는 행위
                    </li>
                  </ul>
                </li>
                <li>
                  허위 또는 과장된 정보 입력
                  <ul>
                    <li>허위 또는 과장된 정보를 입력하는 행위</li>
                  </ul>
                </li>
                <li>
                  공공질서 위반
                  <ul>
                    <li>
                      성별, 정치, 종교, 장애, 연령, 사회적 신분, 인종, 지역,
                      직업 등을 차별하거나 이에 대한 편견을 조장하는 행위
                    </li>
                    <li>
                      회사, 다른 이용자 또는 제3자를 차별 또는 비방하거나 명예를
                      훼손하는 행위
                    </li>
                    <li>
                      회사, 다른 이용자 또는 제3자에 대하여 욕설, 폭언, 협박
                      등을 하는 행위
                    </li>
                    <li>
                      과도한 신체 노출이나 음란한 행위를 묘사하거나, 성매매 관련
                      정보를 공유하거나, 타인에게 성적 수치심 또는 불쾌감을
                      유발할 수 있는 내용을 게시하는 등 미풍양속에 반하는 정보를
                      플랫폼 상에 등록하는 행위
                    </li>
                    <li>
                      혐오스러운 사진 또는 내용을 게시하거나, 욕설, 비속어,
                      은어를 사용하는 등 사회 통념에 반하는 비정상적인 활동을
                      하는 행위
                    </li>
                  </ul>
                </li>
                <li>
                  타인의 권리 침해
                  <ul>
                    <li>
                      회사, 다른 이용자 또는 제3자의 특허권, 상표권, 저작권 등
                      지식재산권을 침해하는 행위 또는 침해할 우려가 있는 행위
                    </li>
                    <li>타인의 개인정보를 침해하는 행위</li>
                    <li>
                      기타 웹 해킹 프로그램, 매크로 프로그램, 보이스 피싱을 위한
                      미러링 사이트 등 타인의 권리를 침해하거나 침해할 우려가
                      있는 모든 행위
                    </li>
                  </ul>
                </li>
                <li>
                  계정거래, 양도, 대리, 교환 등
                  <ul>
                    <li>
                      계정을 타인에게 판매, 양도, 대여하거나, 타인에게 그 이용을
                      허락 또는 이를 시도하는 행위 및 이를 알선하는 행위
                    </li>
                  </ul>
                </li>
                <li>
                  명의 사칭, 도용 등
                  <ul>
                    <li>
                      이용자가 다른 이용자, 제3자 또는 회사의 직원을 사칭하는
                      행위
                    </li>
                  </ul>
                </li>
                <li>
                  기타
                  <ul>
                    <li>회사가 게시한 정보를 무단으로 변경하는 행위</li>
                    <li>
                      자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를
                      가할 목적으로 허위의 정보를 유통시키는 행위
                    </li>
                    <li>
                      기타 관련 법령에서 금지하거나 선량한 풍속 기타 사회통념상
                      허용되지 아니하거나 원활한 서비스 제공에 악영향을 끼치는
                      일체의 행위
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              이용자는 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한
              주의사항, 회사가 통지하는 사항 등을 확인하고 준수할 의무가
              있습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제11조 (이용자의 의무 위반에 대한 제재)</h3>
          <ol>
            <li>
              이용자가 제10조의 의무를 위반한 경우에 회사는 사안의 중요성과
              회사, 다른 이용자 및 3자가 입은 손해에 따라 이용자에게 다음과 같은
              제재를 할 수 있습니다.
              <ol>
                <li>
                  서면경고
                  <br />
                  회사는 제10조의 의무를 위반한 이용자에게 의무 위반의 내용,
                  위반 시기 등을 기재하여 서면(이메일 기타 이용자가 회사에
                  제공한 연락수단 포함)으로 경고할 수 있습니다.
                </li>
                <li>
                  이용의 제한
                  <br />
                  회사는 일정한 기간을 정하여 서비스 이용과 로그인 등을 제한
                  또는 중지할 수 있습니다. 이 경우 회사는 해당 이용자의 접속을
                  금지할 수 있으며, 이용자가 게시한 내용의 전부 또는 일부를
                  임의로 삭제할 수 있습니다.
                </li>
                <li>
                  영구 정지
                  <br />
                  회사는 회원의 계정을 영구적으로 정지할 수 있으며, 비회원의
                  경우 서비스 이용을 영구적으로 제한, 중지할 수 있습습니다.
                </li>
              </ol>
            </li>
            <li>
              회사는 제10조의 의무를 위반하여 제재 대상이 된 이용자들에게 이메일
              등을 통하여 제재 내용을 고지합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제12조 (서비스 제공)</h3>
          <p>
            회사는 플랫폼을 통해 이용자에게 다음의 서비스를 제공할 수 있습니다.
            비회원의 경우 일부 서비스의 이용이 제한될 수 있습니다.
          </p>
          <ol>
            <li>
              정보제공서비스
              <ul>
                <li>아이템 뉴스 등 정보제공 서비스</li>
                <li>아이템 발굴 서비스</li>
                <li>키워드 분석 서비스</li>
                <li>아이템 랭킹, 가격 추적 서비스</li>
              </ul>
            </li>
            <li>위 1.의 정보제공서비스에 부수하는 서비스</li>
            <li>기타 회사가 정하는 서비스</li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제13조 (유료서비스의 이용조건 등)</h3>
          <ol>
            <li>
              회사는 서비스의 전부 또는 일부를 유료로 제공할 수 있으며, 이러한
              유료 서비스를 제공함에 있어 관련 법령상 허용되는 범위 내에서
              회사의 정책에 따라 이용자에게 유료서비스에 관한 이용료 또는 이용
              기한 등 이용 조건을 정할 수 있습니다. 이러한 유료 서비스의
              이용조건은 각 유료 서비스 세부 이용 운영정책 또는 개별 계약에서
              정하거나 각 유료 서비스 결제 화면 등에 게시하여 이용자에게
              공지합니다.
            </li>
            <li>
              이용자는 회사가 정한 방법(계좌이체, 신용카드, 기타 자동결제를
              포함하여 회사가 정하는 결제 수단)에 따라 서비스 이용과 관련한
              금원을 회사에 지급합니다.
            </li>
            <li>
              회사는 본 조의 유료서비스와 관련한 구체적인 이용조건을 각
              유료서비스의 세부이용지침 또는 개별 계약에서 정하거나 각
              유료서비스 결제 화면 등에 게시하여 이용자에게 공지합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제14조 (청약철회 및 유료서비스 해지)</h3>
          <ol>
            <li>
              회원은 유료서비스 이용 요금을 결제한 날부터 7일 이내까지 관계법령
              및 이용정책에서 정한 바에 따라 해당 유료서비스 이용계약에 관한
              청약을 철회(이하"청약철회")할 수 있습니다. 단, 유료서비스 이용을
              개시한 경우에는 청약철회가 제한됩니다.
            </li>
            <li>
              제1항에도 불구하고, 회원은 언제든지 유료서비스를 해지하고 환불을
              요구할 수 있습니다(이하 "유료서비스 해지"). 이 경우 회사는 회원이
              결제한 해당 월(해당 월의 유료서비스 이용개시일로부터 이용기간
              만료일까지를 말합니다; 이하 본 항에서 같습니다)의 전체 유료서비스
              이용 요금의 10% 상당액을 위약금 명목으로 공제한 후, 남은 잔액을
              해당 유료서비스의해당 월의 총 제공 기간 대비 회원이 해당
              유료서비스를 사용할 수 있었던 기간의 비율에 따라 일할 계산한
              금액을 공제하고 환불합니다. 구체적인 산식은 다음과 같습니다.
              <p className="mt-2">
                환불금액 = 해당 월의 유료서비스 이용요금(A) x 0.9 – {"{"}A x 0.9
                x (유료서비스를 사용할 수 있었던기간 / 해당 월의 유료서비스 총
                제공 기간){"}"}
              </p>
            </li>
            <li>
              전2항의 청약철회 또는 유료서비스 해지로 인하여 환불사유가 발생할
              시, 현금결제의 경우에는 3영업일 이내에 환불하고 카드결제의
              경우에는 즉시 결제가 취소됩니다. 결제의 취소는 이용한 결제수단의
              취소를 통해서만 가능합니다.
            </li>
            <li>
              회사는 유료서비스의 안내 화면에서 적용될 수 있는 환불정책을
              고지합니다. 회원의 유료서비스 해지 요청은 환불정책에 따라 제한될
              수 있습니다.
            </li>
            <li>
              회사는 청약철회 및 유료서비스 해지와 관련하여 전자상거래 등에서의
              소비자보호에 관한 법률, 소비자기본법 및 소비자분쟁해결기준을
              준수합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제15조 (서비스의 변경 및 내용 수정)</h3>
          <p>
            회사는 운영상, 기술상의 필요에 따라 서비스 내용을 수정하거나 변경할
            수 있으며, 이 경우 변경 사항을 플랫폼 상에 공지합니다. 이에 대하여
            회사는 이용자 또는 제3자에 어떠한 책임도 부담하지 않습니다.
          </p>
        </section>

        <section className="mb-5">
          <h3>제16조 (서비스의 제공 및 중단 등)</h3>
          <ol>
            <li>
              회사는 필요한 경우 일부 서비스의 제공을 특정 시점부터 개시할 수
              있습니다. 이러한 경우 회사는 사전 또는 사후에 이를 공지합니다.
              회사는 필요한 경우 일부 서비스를 특정 회원에게만 제공할 수
              있습니다. 회사는 서비스를 일정 범위로 분할하여 각 범위 별로 이용
              가능 기간을 별도로 정할 수 있습니다. 이 경우 그 내용을 사전 또는
              사후에 이를 사이트에 공시하거나 이용자에게 이를 통지합니다.
            </li>
            <li>서비스는 연중무휴, 1일 24시간을 원칙으로 합니다.</li>
            <li>
              제2항에도 불구하고, 다음 각 호의 어느 하나에 해당하는 경우에는
              일정한 시간 동안 서비스가 제공되지 아니할 수 있으며, 해당 시간
              동안 회사는 서비스를 제공할 의무가 없습니다.
              <ol>
                <li>
                  컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는
                  서비스의 수정을 위하여 필요한 경우
                </li>
                <li>
                  해킹 등의 전자적 침해사고, 통신 사고, 이용자들의 비정상적인
                  서비스 이용행태, 예상할 수 없는 서비스의 불안정성에 대응하기
                  위하여 필요한 경우
                </li>
                <li>
                  관련 법령에서 특정 시간 또는 방법으로 서비스 제공을 금지하는
                  경우
                </li>
                <li>
                  천재지변, 국가비상사, 정전, 서비스 설비의 장애 또는 서비스
                  이용의 폭주 등으로 정상적인 서비스 제공이 불가능할 경우
                </li>
                <li>
                  분할, 합병, 영업양도, 영업의 폐지, 당해 서비스의 수익 악화 등
                  회사의 경영상 중대한 필요에 의한 경우
                </li>
              </ol>
            </li>
            <li>
              회사는 제3항 각 호의 경우, 1주일 전에 그 사실을 이용자에게 개별
              서비스 초기 화면이나 플랫폼 상에 사전 고지하며, 이 기간 동안
              이용자가 고지 내용을 인지하지 못한데 대하여 회사는 책임을 부담하지
              아니합니다. 사전에 통지할 수 없는 부득이한 사정(긴급한 시스템
              점검ᆞ증설ᆞ교체, 시스템 관리자의 고의, 과실 없는 디스크 장애ᆞ시스템
              다운, 제3자인 통신회사, 기간통신사업자 등의 사정으로 인한 서비스
              제공의 불가 등 회사가 통제할 수 없는 사정)이 있는 경우에는 그
              사정이 종료된 후에 즉시 사후에 통지를 할 수 있습니다.
            </li>
            <li>
              회사는 1년 이상 휴면 회원에 대해 안내 메일 또는 공지사항 발표 후
              1주일 간의 통지기간을 거쳐 서비스 제공을 중지할 수 있습니다.
            </li>
            <li>
              본 조의 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 정보
              등이 보관되지 않거나 삭제, 미전송, 기타 통신 데이터의 손실이
              발생할 수 있으므로 이용자는 중요한 정보 등을 별도로 보관하고
              서비스 중지 기간 이후 해당 정보 등의 존재 여부를 스스로 확인하여야
              합니다. 회사의 고의 또는 과실이 없는 한 회사는 이에 대하여 책임을
              부담하지 않습니다.
            </li>
            <li>
              회사의 사정으로 서비스를 영구적으로 중단하여야 할 경우에는 제4항을
              준용하되, 다만 이 경우에는 사전 고지 기간을 1개월로 합니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제17조 (지식재산권)</h3>
          <ol>
            <li>
              회사가 제공하는 서비스 및 관련 소프트웨어(디자인, 코드 등 포함),
              서비스 제공 과정에서 발생하는 데이터, 정보 기타 일체의
              산출물(이용자의 키워드 검색내역 등 서비스 이용정보를 포함하며 이에
              제한되지 아니함)에 관한 지식재산권, 소유권 기타 일체의 권리는
              회사에게 귀속합니다. 회사는 관련법령상 허용되는 범위 내에서 이상의
              산출물을 서비스 개선 및 기타 회사의 영업상 목적에 활용할 수
              있습니다.
            </li>
            <li>
              서비스의 사용 또는 프로그램의 설치 등으로 인하여 서비스 및
              프로그램에 대한 지식재산권 등의 권리가 회사로부터 이용자에게
              이전되는 것은 아니며, 본 이용약관에 따른 사용권 허가는 서비스에
              대한 소유권 또는 지식재산권 등의 이전 또는 판매로 해석되지
              않습니다.
            </li>
            <li>
              회사는 이용자에게 회사 컨텐츠에 대한 어떠한 사용권이나 라이선스도
              부여하거나 보장하지 않습니다. 이용자가 저작권법 기타 관계 법령상
              허용되는 범위를 넘어 회사 컨텐츠를 이용하거나, 이를
              공표∙공연∙공중송신∙전시∙배포∙대여하는 등의 행위를 할 경우 그에
              대한 책임은 전적으로 해당 이용자에게 있습니다.
            </li>
            <li>
              이용자는 회사가 허용하는 목적 및 방법의 범위 내에서 서비스를
              이용하여야 하며, 그에 위반하여 제3자의 지식재산권 기타 권리를
              침해하여서는 아니됩니다. 이 경우, 제3자의 권리 침해에 관한 책임은
              전적으로 그 이용자에게 있으며, 회사는 이와 관련하여 어떠한 책임도
              부담하지 않습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제18조 (정보 제공 및 광고의 게재)</h3>
          <ol>
            <li>
              회사는 이용자의 편의를 위하여 이용자가 서비스 이용 중 필요하다고
              인정되는 다양한 정보 및 광고를 배너 게재, 전자우편, 서신우편,
              휴대폰 문자메시지, 전화 등의 방법으로 이용자에게 제공할 수
              있습니다. 이용자는 이를 원하지 않을 경우에 회사가 제공하는 방법에
              따라 수신을 거부할 수 있습니다.
            </li>
            <li>
              전항 단서에 따른 수신 거부 이용자의 경우라도 이용약관,
              개인정보보호정책, 기타 이용자의 이익에 영향을 미칠 수 있는 중요한
              사항의 변경 등 이용자가 반드시 알고 있어야 하는 사항에 대해서는
              전항의 방법으로 정보의 제공 등을 할 수 있습니다.
            </li>
            <li>
              서비스가 제공되는 플랫폼 상에는 배너와 링크(Link) 등 다양한 형태의
              광고가 포함될 수 있으며, 이는 제3자가 제공하는 페이지와 연결될 수
              있습니다.
            </li>
            <li>
              제3항에 따라 제3자가 제공하는 페이지로 연결될 경우 해당 페이지는
              회사의 서비스 영역이 아니므로 회사가 신뢰성, 안정성 등을 보장하지
              않으며 그로 인한 이용자의 손해에 대하여도 회사는 책임을 지지
              않습니다.
            </li>
            <li>
              회사는 서비스 상에 게재되어 있거나 서비스를 통한 제3자와의
              판촉활동에 이용자가 참여하거나 교신 또는 거래의 결과로서 발생하는
              모든 손실 또는 손해에 대해 관련 법에 특별한 규정이 있거나 회사의
              고의 또는 중과실로 인한 경우가 아닌 한 책임을 지지 않습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제19조 (회원의 해지)</h3>
          <p>
            회원은 회사와의 서비스 이용계약을 해지(이하 "회원 탈퇴"라 합니다)할
            수 있습니다. 회원이 회원 탈퇴를 신청한 경우 회사는 회원 본인의
            신청인지 여부를 확인할 수 있으며, 회사는 확인 완료 후에 회원의
            신청에 따른 조치를 취합니다.
          </p>
        </section>

        <section className="mb-5">
          <h3>제20조 (회사의 해지)</h3>
          <ol>
            <li>
              회사는 이용자가 본 약관을 위반한 경우 또는 다음 각 호의 경우에는
              이용자에 대하여 10일의 기간을 정하여 시정할 것을 최고하고 그 기간
              동안 시정되지 않을 경우 서비스 이용 계약을 해지할 수 있습니다.
              다만, 이용자가 현행법 위반 및 고의 또는 중대한 과실로 회사에
              손해를 입힌 경우에는 사전통보 없이 서비스 이용계약을 해지할 수
              있습니다.
              <ol>
                <li>
                  비 실명 가입, 주민등록번호의 도용 등 이용자가 제공한 데이터가
                  허위임이 판명된 경우
                </li>
                <li>범죄적 행위에 관련되는 경우</li>
                <li>
                  국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획
                  또는 실행할 경우
                </li>
                <li>타인의 서비스 아이디 및 비밀번호를 도용한 경우</li>
                <li>타인의 명예를 손상시키거나 불이익을 주는 경우</li>
                <li>같은 사용자가 다른 아이디로 이중 등록을 한 경우</li>
                <li>
                  서비스에 위해를 가하는 등 서비스의 건전한 이용을 저해하는 경우
                </li>
                <li>
                  기타 관련 법령에서 금지하거나 선량한 풍속 기타 사회통념상
                  허용되지 아니하거나 원활한 서비스 제공에 악영향을 끼치는
                  일체의 행위
                </li>
              </ol>
            </li>
            <li>
              제1항에 의하여 계약이 해지되는 경우 이용자에게 제공되는 서비스는
              모두 중지됩니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제21조 (양도 금지)</h3>
          <p>
            이용자는 본 약관에 의한 서비스의 이용권한, 회사-이용자간 서비스 계약
            등 기타 이용계약 상의 권리, 지위 등을 타인에게 양도 및 증여할 수
            없으며, 이를 담보로 제공할 수 없습니다.
          </p>
        </section>

        <section className="mb-5">
          <h3>제22조 (면책)</h3>
          <ol>
            <li>
              회사는 다음 각 호의 경우에는 면책됩니다.
              <ol>
                <li>
                  전시, 사변, 천재지변, 국가비상사태, 해결이 곤란한 기술적 결함
                  기타 불가항력적 사유로 서비스를 제공할 수 없는 경우
                </li>
                <li>
                  이용자의 귀책사유로 인한 서비스의 중지, 이용 장애 및 서비스
                  이용계약이 해지된 경우
                </li>
                <li>
                  기간통신 사업자가 전기통신서비스를 중지하거나 정상적으로
                  제공하지 아니한 경우
                </li>
                <li>
                  사전에 공지된 서비스용 설비의 보수점검, 교체, 정기점검 또는
                  서비스의 수정을 위하여 필요한 경우
                </li>
                <li>
                  해킹 등의 전자적 침해사고, 통신 사고, 이용자들의 비정상적인
                  서비스 이용행태, 예상할 수 없는 서비스의 불안정성에 대응하기
                  위하여 필요한 경우
                </li>
                <li>
                  관련 법령에서 특정 시간 또는 방법으로 서비스 제공을 금지하는
                  경우
                </li>
              </ol>
            </li>
            <li>
              이용자의 불법적인 행위 또는 본 약관에 위반되는 행위로 인하여
              회사에 손해가 발생하거나 수사기관, 행정청으로부터 형사처벌 또는
              제재를 받은 경우 이용자는 자신의 비용(손해배상금, 소송비용, 변호사
              비용 등을 포함하되 이에 한정하지 아니함)으로 손해를 전보하고
              회사를 면책하여야 합니다.
            </li>
            <li>
              그 밖에 회사는 법령상 허용되는 한도 내에서 서비스와 관련하여 본
              이용약관에 명시되지 않은 어떠한 구체적인 사항에 대한 약정이나
              보증을 하지 않습니다.
            </li>
          </ol>
        </section>

        <section className="mb-5">
          <h3>제23조 (손해배상)</h3>
          <p>
            회사는 서비스와 관련하여 이용자에게 어떠한 손해가 발생하더라도
            회사가 고의 또는 중과실에 의한 손해를 제외하고는 어떠한 책임도
            부담하지 아니합니다.
          </p>
        </section>

        <section className="mb-5">
          <h3>제24조 (재판관할)</h3>
          <p>
            회사의 서비스 제공과 관련하여 회사와 이용자 사이에 분쟁이 발생한
            경우, 회사와 이용자는 발생한 분쟁을 원만하게 해결하기 위하여 필요한
            모든 노력을 하여야 합니다. 발생한 분쟁에 대하여 소송이 제기될
            경우에는 당사자의 주소지를 관할하는 법원을 관할법원으로 하여 분쟁을
            해결합니다.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPrimary;
