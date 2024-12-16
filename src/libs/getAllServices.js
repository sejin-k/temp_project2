// import serviceImage1 from "@/assets/img/service/service__1.png";
// import serviceImage2 from "@/assets/img/service/service__2.png";
// import serviceImage3 from "@/assets/img/service/service__3.png";
// import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
import serviceImage1 from "@/assets/img/service/service_1.png";
import serviceImage2 from "@/assets/img/service/service_2.png";
import serviceImage3 from "@/assets/img/service/service_3.png";
import serviceImage4 from "@/assets/img/service/service_4.png";
const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "Agency Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
    },
    {
      id: 2,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Cost Reduction Analysis",
      duration: "1700",
    },
    {
      id: 3,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage13,
      img: serviceImage8,
      category: "Strategic Planning",
      duration: "1900",
    },
    {
      id: 4,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage12,
      img: serviceImage6,
      category: "Cost Reduction Analysis",
      duration: "2100",
    },
    {
      id: 5,
      title: "Agency Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage11,
      img: serviceImage7,
      category: "Business Process",
      duration: "2400",
    },

    {
      id: 6,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage8,
      category: "Supply Chain Optimization",
      duration: "2700",
    },

    {
      id: 7,
      title: "Agency Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage14,
      img: serviceImage1,
      category: "Financial Restructuring",
      duration: "1500",
    },
    {
      id: 8,
      title: "HR Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage13,
      img: serviceImage2,
      category: "Supply Chain Optimization",
      duration: "1700",
    },
    {
      id: 9,
      title: "IT Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage12,
      img: serviceImage3,
      category: "Strategic Planning",
      duration: "1900",
    },
    {
      id: 10,
      title: "Legal Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage11,
      img: serviceImage4,
      category: "Supply Chain Optimization",
      duration: "2100",
    },
    {
      id: 11,
      title: "Agency Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Market Entry Strategy",
      duration: "1500",
    },
    {
      id: 12,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Strategic Planning",
      duration: "1900",
    },
    {
      id: 13,
      title: "Legal Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage13,
      img: serviceImage8,
      category: "Market Entry Strategy",
      duration: "2100",
    },

    {
      id: 14,
      title: "Agency Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage12,
      img: serviceImage13,
      category: "Business Process",
      duration: "1500",
    },
    {
      id: 15,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage11,
      img: serviceImage14,
      category: "Market Entry Strategy",
      duration: "1700",
    },
    {
      id: 16,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage15,
      category: "Business Process",
      duration: "1900",
    },
    {
      id: 17,
      title: "Legal Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage1,
      category: "Financial Restructuring",
      duration: "2100",
    },
    {
      id: 18,
      title: "오픈마켓 베스트 상품",
      desc: "스마트스토어, 쿠팡, 11번가 등 주요 오픈마켓에서 각 카테고리별 베스트 상품 정보를 제공",
      detailsImg: projectImage13,
      img: serviceImage1,
      category: "Business Process",
      duration: "1500",
    },
    {
      id: 19,
      title: "트렌드 키워드 정보",
      desc: "소비자들이 많이 찾는 키워드와 관련된 데이터(상품 수, 검색량, 광고 수 등) 제공",
      detailsImg: projectImage12,
      img: serviceImage2,
      category: "Financial Restructuring",
      duration: "1700",
    },
    {
      id: 20,
      title: "AI 기반 상품 추천",
      desc: "상품 데이터과 셀파트너 AI 알고리즘으로 판매 가능성이 높은 상품 추천",
      detailsImg: projectImage11,
      img: serviceImage3,
      category: "Cost Reduction Analysis",
      duration: "1900",
    },
    {
      id: 21,
      title: "개발 예정 서비스",
      desc: "오픈마켓 상품등록, 카테고리 추천, 상품명 추천, SEO 최적화 , 상세 페이지 제작 등",
      detailsImg: projectImage15,
      img: serviceImage4,
      category: "Cost Reduction Analysis",
      duration: "2100",
    },
  ];
  return services;
};

export default getAllServices;
