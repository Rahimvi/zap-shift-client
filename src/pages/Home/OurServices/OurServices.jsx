import {
  FaBoxOpen,
  FaGlobe,
  FaHandHoldingDollar,
  FaHandshake,
  FaRotateLeft,
  FaTruckFast,
} from "react-icons/fa6";
import ServiceCard from "./ServiceCard"; // Import the card component

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      icon: <FaTruckFast className="text-[#F24E1E]" />,
      active: false,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      icon: <FaGlobe className="text-[#003d3d]" />,
      active: true,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <FaBoxOpen className="text-[#F24E1E]" />,
      active: false,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaHandHoldingDollar className="text-[#F24E1E]" />,
      active: false,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: <FaHandshake className="text-[#F24E1E]" />,
      active: false,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <FaRotateLeft className="text-[#F24E1E]" />,
      active: false,
    },
  ];

  return (
    <section className="py-24 bg-[#002B2B]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
