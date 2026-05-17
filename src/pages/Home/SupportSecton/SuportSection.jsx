// Image gulo import kore nao
import trackingImg from "../../../assets/live-tracking.png";
import supportImg from "../../../assets/safe-delivery.png";
import safeImg from "../../../assets/tiny-deliveryman.png";
import SupportSectionCard from "./SupportSectionCard";

const SupportSection = () => {
  const featureData = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: trackingImg,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeImg,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: supportImg,
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16">
      {featureData.map((item) => (
        <SupportSectionCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          // reverse={item.id % 2 === 0} // Optional: alternate side korar jonno eita on korte paro
        />
      ))}
    </section>
  );
};

export default SupportSection;
