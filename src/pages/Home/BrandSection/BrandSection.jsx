import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";

const BrandSection = () => {
  return (
    <div className="py-10 bg-gray-100 mt-4 mb-4">
      <h2 className="text-center text-black text-2xl font-bold mb-6">
        We.ve helped thousands of sales teams
      </h2>

      {/* Marquee Wrapper */}
      <Marquee
        gradient={true}
        gradientColor="white"
        speed={50}
        pauseOnHover={true}
      >
        <div className="flex gap-10">
          <img src={logo1} alt="Logo" className="h-10 mx-8" />
          <img src={logo2} alt="Logo" className="h-10 mx-8" />
          <img src={logo3} alt="Logo" className="h-10 mx-8" />
          <img src={logo4} alt="Logo" className="h-10 mx-8" />
          <img src={logo5} alt="Logo" className="h-10 mx-8" />
          <img src={logo6} alt="Logo" className="h-10 mx-8" />
          <img src={logo7} alt="Logo" className="h-10 mx-8" />
        </div>
      </Marquee>
    </div>
  );
};

export default BrandSection;
