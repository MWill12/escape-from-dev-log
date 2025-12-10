import Image from "next/image";
import Cone from "@/public/construction_cone.svg";
const Landing = () => {
  return (
    <div className="flex text-black justify-center items-center bg-yellow">
      <p className="flex text-3xl font-black">
        <Image src = {Cone} alt="pixel construction cone" className=""/>
        <div className="py-2">
          Site Under Construction
        </div>
        <Image src = {Cone} alt="pixel construction cone"/>
      </p>
    </div>
  );
};

export default Landing;
