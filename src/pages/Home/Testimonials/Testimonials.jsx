import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import customar from "../../../assets/customer-top.png";
import TestimonialCard from "./TestimonialCard";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Awlad Hossin",
      designation: "Senior Product Designer",
      comment:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      photo: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Rasel Ahmed",
      designation: "CTO",
      comment:
        "Excellent service and quality. The delivery was fast and the product is exactly what I needed for my daily office work.",
      photo: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Nasir Uddin",
      designation: "CEO",
      comment:
        "I've been using this for a month now. My back pain has significantly decreased. Highly recommended for professionals.",
      photo: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Ariful Islam",
      designation: "Software Engineer",
      comment:
        "The build quality is premium. It's comfortable to wear even for long hours at the desk.",
      photo: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "Sumaiya Akter",
      designation: "HR Manager",
      comment:
        "The customer support was very helpful in choosing the right size. Great experience overall.",
      photo: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      name: "Tanvir Rahman",
      designation: "Operations Head",
      comment:
        "Fastest delivery in town. The packaging was secure and the product works like a charm.",
      photo: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      name: "Farhana Khan",
      designation: "Marketing Lead",
      comment:
        "I love the design and the material. It doesn't feel itchy like other correctors.",
      photo: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 8,
      name: "Mehedi Hasan",
      designation: "Full Stack Developer",
      comment:
        "Helps me stay focused without worrying about my sitting posture. A must-have for devs.",
      photo: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 9,
      name: "Jarin Tasnim",
      designation: "Creative Director",
      comment:
        "Very stylish and effective. I can wear it under my clothes easily.",
      photo: "https://i.pravatar.cc/150?u=9",
    },
    {
      id: 10,
      name: "Kamrul Hassan",
      designation: "Project Manager",
      comment:
        "This has become a part of my daily routine. My posture has improved noticeably.",
      photo: "https://i.pravatar.cc/150?u=10",
    },
  ];

  return (
    <section className="py-10 bg-[#F0F4F4] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src={customar} alt="delivery boxes" className="h-16 w-auto" />
          </div>
          <h2 className="text-4xl font-bold text-[#003d3d] mb-4 font-inter">
            What our customers are sayings
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-[15px]">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative pt-10 px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper overflow-visible!"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <TestimonialCard review={item} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation & Pagination Controls */}
          <div className="flex flex-col items-center mt-12 gap-6">
            <div className="custom-pagination flex gap-2"></div>

            <div className="flex gap-4">
              <button className="prev-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white transition-all shadow-sm bg-white/50">
                <FaArrowLeft />
              </button>
              <button className="next-btn w-12 h-12 rounded-full bg-[#C5E766] flex items-center justify-center text-[#003d3d] hover:shadow-lg transition-all">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for pagination dots styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #003d3d;
          opacity: 0.2;
          margin: 0 4px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background: #003d3d;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
