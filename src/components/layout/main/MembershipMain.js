"use client";
import Pricing from "@/components/sections/pricing/Pricing";

const MembershipMain = () => {
  return (
    <main className="membership__area theme__bg__3">
      <Pricing plan={2} tag={"멤버쉽"} isGrdient={true} />
    </main>
  );
};

export default MembershipMain;
