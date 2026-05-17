const HowItWorks = () => {
  const services = [
    { id: 1, title: "Booking Pick & Drop" },
    { id: 2, title: "Cash On Delivery" },
    { id: 3, title: "Delivery Hub" },
    { id: 4, title: "Booking SME & Corporate" },
  ];

  return (
    <section className="py-16 bg-[#eaeced]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#003d3d] mb-10">
          How it Works
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Icon/Image Placeholder */}
              <div className="mb-6">
                <div className="w-12 h-12 text-[#003d3d]">
                  {/* Ekhane tumi tomari SVG ba Lucide-react icon use korte paro */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#003d3d] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
