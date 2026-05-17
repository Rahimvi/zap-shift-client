import Banner from "../banner/banner";
import BeMerchant from "../BeMerchant/BeMerchant";
import BrandSection from "../BrandSection/BrandSection";
import Faq from "../Faq/Faq";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import SupportSection from "../SupportSecton/SuportSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <BrandSection />
      <SupportSection />
      <BeMerchant />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
