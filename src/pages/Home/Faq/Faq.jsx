import { GoArrowUpRight } from "react-icons/go";
import FaqItem from "./FaqItems";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
      defaultOpen: true,
    },
    {
      id: 2,
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, our product is designed with adjustable straps to fit various body shapes and sizes comfortably, suitable for both adults and teenagers.",
      defaultOpen: false,
    },
    {
      id: 3,
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely! Regular use helps muscle memory, reducing the strain on your spine and easing chronic back pain over time.",
      defaultOpen: false,
    },
    {
      id: 4,
      question: "Does it have smart features like vibration alerts?",
      answer:
        "This specific model focuses on physical support, but we do have a 'Pro' version that includes smart sensor vibration alerts.",
      defaultOpen: false,
    },
    {
      id: 5,
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up for our newsletter or click the 'Notify Me' button on the product page to get an instant email alert.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="py-10 bg-[#F0F4F4]">
      <div className="max-w-[1282px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003d3d] mb-5">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-[15px] leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* FAQ Items Wrapper */}
        <div className="max-w-[900px] mx-auto">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={faq.defaultOpen}
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-3 bg-[#C5E766] hover:bg-[#b3d455] transition-all py-3 pl-8 pr-2 rounded-full group">
            <span className="font-bold text-[#003d3d]">See More FAQ's</span>
            <div className="bg-[#1E1E1E] text-white p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
              <GoArrowUpRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
