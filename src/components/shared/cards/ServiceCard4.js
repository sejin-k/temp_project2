import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard4 = ({ service }) => {
  const { id, title, desc, img, duration, url } = service;
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="service__single__4 single__transform">
        <div className="service__img__4">
          <Image src={img} alt="" />
        </div>
        <div className="service__heading__4">
          <h3 style={{ fontSize: "20px" }}>{title}</h3>
        </div>
        <div className="service__content__4">
          <p>{desc}</p>
        </div>
        <div className="service__icon">
          <Link className="direction__btn" href={`${url}`}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                stroke="#0A0624"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.9902 23.0107L22.8908 11.1101"
                stroke="#0A0624"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard4;
