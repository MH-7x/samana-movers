"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Omar Khalid",
    role: "Moved from Dubai to Sharjah",
    image: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    feedback:
      "Samana Movers did an amazing job with our villa relocation. They packed everything with care, transported safely, and unpacked on time. I highly recommend Samana Movers for anyone moving in the UAE.",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Moved from Abu Dhabi to Dubai",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    feedback:
      "We had a smooth experience with Samana Movers. Their team was professional, on time, and handled all fragile items carefully. Truly one of the best moving companies in the UAE.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "Moved within Sharjah",
    image: "https://i.pravatar.cc/100?img=13",
    rating: 5,
    feedback:
      "Samana Movers made my local move stress-free. The staff was polite, packed my furniture neatly, and set it all up in my new villa. Very reliable moving company in Sharjah.",
  },
  {
    id: 4,
    name: "Jessica Lee",
    role: "Moved from Dubai Marina to Palm Jumeirah",
    image: "https://i.pravatar.cc/100?img=14",
    rating: 5,
    feedback:
      "I booked Samana Movers for a villa move, and they exceeded my expectations. Their packing was professional, and the team worked quickly. Excellent service and fair pricing.",
  },
  {
    id: 5,
    name: "Mohammed Ali",
    role: "Moved from Sharjah to Abu Dhabi",
    image: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    feedback:
      "Samana Movers provided the best moving service I’ve ever used. Everything arrived safely, and they even helped with furniture assembly. I’ll definitely use Samana Movers again.",
  },
  {
    id: 6,
    name: "Rachel Green",
    role: "Moved from Dubai to Ras Al Khaimah",
    image: "https://i.pravatar.cc/100?img=16",
    rating: 5,
    feedback:
      "From start to finish, Samana Movers handled everything perfectly. They were careful with fragile items and made the long-distance move hassle-free. I trust them completely.",
  },
  {
    id: 7,
    name: "Hassan Javed",
    role: "Moved within Abu Dhabi",
    image: "https://i.pravatar.cc/100?img=17",
    rating: 5,
    feedback:
      "Samana Movers is very professional and reliable. Their team was quick and respectful, and they made sure every item was placed properly in the new villa. Highly recommended!",
  },
  {
    id: 8,
    name: "Emily Carter",
    role: "Moved from Dubai to Al Ain",
    image: "https://i.pravatar.cc/100?img=18",
    rating: 5,
    feedback:
      "I was nervous about moving, but Samana Movers made it so easy. They packed, moved, and unpacked everything flawlessly. I appreciate their attention to detail.",
  },
  {
    id: 9,
    name: "Salman Khan",
    role: "Moved from Sharjah to Dubai",
    image: "https://i.pravatar.cc/100?img=19",
    rating: 5,
    feedback:
      "Excellent service from Samana Movers! The crew was friendly and efficient, and all my furniture was delivered without a scratch. Best movers in the UAE.",
  },
  {
    id: 10,
    name: "Huda Farooq",
    role: "Moved from Dubai to Ajman",
    image: "https://i.pravatar.cc/100?img=20",
    rating: 5,
    feedback:
      "Samana Movers handled my villa move professionally. The team arrived on time, packed everything carefully, and made sure nothing was damaged. Great experience overall!",
  },
];
export default function TestimonialSlider({
  reviews,
}: {
  reviews?: typeof testimonials;
}) {
  return (
    <div className="w-full mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
      >
        {reviews
          ? reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white/20 shadow-lg p-6 relative text-start">
                  {/* Stars */}
                  <div className="flex justify-start mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full border"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <Image
                      src={"/google-reviews-badge.png"}
                      alt="verified review badge"
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-600 ">{item.feedback}</p>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-5xl text-gray-400">
                    ❝
                  </div>
                </div>
              </SwiperSlide>
            ))
          : testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white/20 shadow-lg p-6 relative text-start">
                  {/* Stars */}
                  <div className="flex justify-start mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full border"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                    <Image
                      src={"/google-reviews-badge.png"}
                      alt="verified review badge"
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-600 ">{item.feedback}</p>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-5xl text-gray-400">
                    ❝
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
