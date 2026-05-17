import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = ({ review, isActive }) => {
  return (
    <div
      className={`transition-all duration-500 p-6 rounded-[30px] border border-gray-100 flex flex-col h-[300px] ${
        isActive
          ? "bg-white shadow-xl scale-105 z-10"
          : "bg-white/60 opacity-50 scale-95"
      }`}
    >
      {/* Quote Icon */}
      <div className="text-[#C5E766] text-4xl mb-4">
        <FaQuoteLeft />
      </div>

      {/* Comment */}
      <p className="text-gray-600 text-[15px] leading-relaxed grow italic">
        "{review.comment}"
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-200 my-6"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover bg-teal-800"
        />
        <div>
          <h4 className="font-bold text-[#003d3d] text-lg">{review.name}</h4>
          <p className="text-gray-400 text-sm">{review.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
