import {
  DollarSign,
  ListChecks,
  MapPinCheck,
  ShieldCheckIcon,
  TimerIcon,
  UserCheck2,
} from "lucide-react";
import React from "react";

const services = [
  {
    title: "Experienced Professionals",
    description:
      "Our 50+ trained movers bring knowledge from thousands of successful relocations. Every member of our team is professionally trained to handle your move with expert care.",
    icon: <UserCheck2 width={30} height={30} className="b1" />, // Placeholder for a professional or expert icon
  },
  {
    title: "Quality & Safety Guaranteed",
    description:
      "We use high-quality packing materials and secure vehicles to guarantee the safety and security of your goods during transit.",
    icon: <ShieldCheckIcon width={30} height={30} className="b2" />, // Placeholder for a safety or shield icon
  },
  {
    title: "Efficient Service",
    description:
      "Our professional movers save you time and reduce stress. From planning to unloading, we execute each step quickly and efficiently, ensuring a smooth moving experience.",
    icon: <TimerIcon width={30} height={30} className="b2" />, // Placeholder for a fast or efficient icon
  },
  {
    title: "Comprehensive Services",
    description:
      "We offer a full range of residential moving solutions – from apartment and villa moving to packing, furniture installation, and single-item moves. You get all your needs covered by one reliable provider.",
    icon: <ListChecks width={30} height={30} className="b2" />, // Placeholder for a complete or comprehensive icon
  },
  {
    title: "Affordable Pricing",
    description:
      "Samana Movers provides competitive, transparent rates with no hidden fees. We are among the most affordable movers in UAE while maintaining top-quality service.",
    icon: <DollarSign width={30} height={30} className="b2" />, // Placeholder for an affordable or money icon
  },

  {
    title: "Local UAE Expertise",
    description:
      "Proudly serving Dubai, Abu Dhabi, Sharjah, and Ajman, we understand local routes and regulations. No matter where you move, we navigate the process smoothly for you.",
    icon: <MapPinCheck width={30} height={30} className="b2" />, // Placeholder for a location or local icon
  },
];

export const stats = [
  { label: "Satisfied Customers", value: "99%" },
  { label: "Successful Moves", value: "1000+" },
  { label: "On-Time Deliveries", value: "95%" },
  { label: "Years of Experience", value: "7+" },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="relative bg-[#182937]/90 mt-32">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: "url('/Samana-Movers.jpg')",
            opacity: 0.2,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide b-white">
            Our Services
          </p>
          <h2 className="md:text-4xl text-3xl font-bold mt-2 b-white">
            Why Choose Samana Movers
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={` p-5 ${
                index === 0 ? "b2-bg" : "border-b-2 border-[#fcd200]"
              } `}
            >
              <div className="flex items-center mb-4 flex-col gap-y-3">
                {service.icon}
                <h3
                  className={`text-xl  font-medium ${
                    index === 0 ? "b1" : "b-white"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <p className={`${index === 0 ? "b1" : "b-white"} text-sm`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="absolute md:-bottom-24 -bottom-40 left-1/2 transform -translate-x-1/2 w-11/12 bg-white rounded-lg shadow-lg md:p-8 p-3 flex md:justify-around justify-center items-center flex-wrap text-gray-900">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-4xl font-bold text-yellow-500">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
