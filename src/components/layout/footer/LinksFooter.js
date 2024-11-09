import Link from "next/link";

const LinksFooter = () => {
  const links = [
    {
      title: "회사소개",
      url: "/about",
    },
    {
      title: "이용약관",
      url: "/terms",
    },
    {
      title: "개인정보처리방침",
      url: "/privacy",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
    {
      title: "제휴 문의 및 상담",
      url: "/contact",
    },
  ];

  return (
    <div className="col-xl-12">
      <div
        className="footer__links text-center"
        style={{
          marginBottom: "20px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingBottom: "20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: index === 2 ? "bold" : "normal",
                  opacity: 0.8,
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinksFooter;
