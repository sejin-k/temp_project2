"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import heroStartupImage from "@/assets/img/herobaner/herobanner__startup.jpg";
import ProductRecommend from "@/components/sections/product-recommend/productRecoomend";
import Brands5 from "@/components/sections/brands/Brands5";

const ProductRecommendMain = () => {
  return (
    <main>
      <Hero2
        title={
          <>
            상품 <span className="text__gradient">추천</span>
          </>
        }
        img={heroStartupImage}
      />
      <Brands5 type={2} />
      <ProductRecommend />
      <div className="border__line"></div>
    </main>
  );
};

export default ProductRecommendMain;
