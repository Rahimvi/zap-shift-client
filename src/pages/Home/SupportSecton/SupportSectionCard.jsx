const SupportSectionCard = ({ title, description, image, reverse = false }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div
        className={`bg-white p-10 lg:p-14 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-12 border border-gray-50 ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Image/Illustration Container */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[280px] h-auto object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003d3d] mb-6">
            {title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[650px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportSectionCard;
