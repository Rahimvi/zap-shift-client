const ServiceCard = ({ service }) => {
  const { title, description, icon, active } = service;

  return (
    <div
      className={`group card p-10 rounded-[25px] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-sm cursor-pointer ${
        active
          ? "bg-[#D1F06B] text-[#003d3d]" // Initially Active Card
          : "bg-white text-[#003d3d] hover:bg-[#D1F06B]" // White turns Lime Green on hover
      }`}
    >
      {/* Icon Container */}
      <div className="relative mb-8">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${
            active ? "bg-white/50" : "bg-[#F3F4F6] group-hover:bg-white/50" // Hover korle icon background white/50 hobe
          }`}
        >
          <span className="text-3xl">{icon}</span>
        </div>
        {/* Background soft glow effect */}
        <div className="absolute inset-0 bg-blue-200/30 blur-xl rounded-full scale-150 opacity-50"></div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold mb-4 leading-tight min-h-14 flex items-center">
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-[15px] leading-relaxed font-medium transition-colors duration-500 ${
          active
            ? "text-[#003d3d]/80"
            : "text-gray-500 group-hover:text-[#003d3d]/80" // Hover korle text color change hobe
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
