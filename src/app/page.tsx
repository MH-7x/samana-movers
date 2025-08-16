import { type Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowUpRightFromSquare,
  Gift,
  ListTodo,
  LucideListChecks,
  PhoneCall,
  Play,
  Truck,
} from "lucide-react";

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers | House Shifting Services in UAE",
      desc: "Samana Movers is top rated moving company in UAE with over 15+ years of experties in moving with UAE. We offer affordable moving services for homes, offices and single furnitures.",
    },
    image: {
      path: "/nice-movers-transport-trucks.jpg",
      alt: "Nice Movers Company Trucks",
    },
    path: "",
  },
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1400px] mx-auto">
        <HeroSection />
        <ContactSection />
        <WhyChooseUs />
        <Services />
        <section className="mt-32 grid md:grid-cols-2 grid-cols-1 items-center md:w-11/12 mx-auto">
          <div className="bg-green-400 md:h-[600px] h-[400px] relative">
            <Image
              src={"/professional-workers-helping-with-moving.jpg"}
              alt="two samana movers team members"
              fill
              className="absolute object-cover object-top"
            />
          </div>
          <div className="md:px-20 px-3 py-14 bg-white drop-shadow-xl md:-ml-16 z-10">
            <p className="b2 md:text-start text-center font-medium uppercase">
              hire best movers in uae
            </p>
            <h2 className="md:text-5xl text-3xl md:text-start text-center font-black b1 mt-4">
              Hire Best Movers & Packers In UAE
            </h2>

            <p className="md:mt-7 mt-5 text-[#5e5e5e]">
              Let Samana Movers take the stress out of your next move. Call or
              WhatsApp us today to get a free quote from the leading movers and
              packers in the UAE. Our friendly team is available 24/7 to assist
              with your house shifting services.
            </p>

            <div className="flex gap-x-5 mt-8 md:justify-start justify-center ">
              <Button size={"lg"}>ABOUT US</Button>
              <Button variant={"secondary"} size={"lg"}>
                GET A QUOTE
              </Button>
            </div>
          </div>
        </section>
        <section className="mt-32 md:w-11/12 mx-auto md:px-0 px-3">
          <div className="flex items-end justify-between flex-wrap md:gap-0 gap-y-10">
            <div>
              <p className="b2 md:text-lg font-medium">WORK PROCESS</p>
              <h2 className="md:text-5xl text-3xl font-black b1 mt-4">
                Our 3-Step Moving Process
              </h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-14 h-14 rounded-full b2-bg flex items-center justify-center">
                <Play className="b1" />
              </div>
              <p className="b-text">Video Introduction</p>
            </div>
          </div>
          <div className="mt-20  grid md:grid-cols-3 grid-cols-1 gap-16">
            <div className="flex items-center justify-center flex-col gap-y-3 relative">
              <div className="w-24 h-24 border-2 rounded-full border-[#fcd200] flex items-center justify-center">
                {" "}
                <LucideListChecks
                  width={35}
                  height={35}
                  strokeWidth={1.5}
                  className="b1"
                />
              </div>
              <h3 className="font-medium b1 md:text-2xl text-xl mt-5">
                Plan & Quote
              </h3>
              <p className="text-[#5e5e5e] text-center text-sm">
                Contact us with your moving details. We’ll assess your needs and
                provide a free, transparent quote. We work with you to schedule
                a convenient moving date.
              </p>
              <Image
                className="absolute md:block hidden -right-[38%] top-1/5"
                width={200}
                height={200}
                src={"/arrow.png"}
                alt="right arrow"
              />
            </div>
            <div className="flex items-center justify-center flex-col gap-y-3 relative">
              <div className="w-24 h-24 border-2 rounded-full border-[#fcd200] flex items-center justify-center">
                {" "}
                <Truck
                  width={35}
                  height={35}
                  strokeWidth={1.5}
                  className="b1"
                />
              </div>
              <h3 className="font-medium b1 md:text-2xl text-xl mt-5">
                Pack & Transport
              </h3>
              <p className="text-[#5e5e5e] text-center text-sm">
                On moving day, our trained team arrives on time. We carefully
                pack your items using top-quality materials, then load them into
                our secure trucks. We handle heavy lifting and transportation
                with professional care.
              </p>
              <Image
                className="absolute md:block hidden -right-[38%] top-1/5"
                width={200}
                height={200}
                src={"/arrow.png"}
                alt="right arrow"
              />
            </div>
            <div className="flex items-center justify-center flex-col gap-y-3">
              <div className="w-24 h-24 border-2 rounded-full border-[#fcd200] flex items-center justify-center">
                {" "}
                <Gift width={35} height={35} strokeWidth={1.5} className="b1" />
              </div>
              <h3 className="font-medium b1 md:text-2xl text-xl mt-5">
                Unload & Setup
              </h3>
              <p className="text-[#5e5e5e] text-center text-sm">
                At your new home, we unload everything carefully. We reassemble
                furniture and place boxes where you want them. You inspect the
                delivery to ensure satisfaction, and then you can enjoy your new
                space!
              </p>
            </div>
          </div>
        </section>
        <div className="mt-32 md:w-11/12 mx-auto md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center gap-10">
          <div>
            <p className="b2 text-lg font-medium">OUR BRANCHES</p>
            <h2 className="md:text-5xl text-3xl font-black b1 mt-4">
              We Provide Moving Services In All Over UAE
            </h2>
            <p className="mt-5 text-[#5e5e5e]">
              We moving services in all UAE including Dubai, Sharjah, Abu Dhabi
              and Ajman. You can get our moving services by call us or fill the
              quote form.We will call you back from nearest branch .
            </p>
            <div className="mt-5 pt-5 border-t-2 border-[#d8d8d8] grid md:grid-cols-4 grid-cols-2">
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-[#5e5e5e] mb-1 text-sm">
                  Movers in Dubai
                </p>
                <div className="flex gap-x-2">
                  <Button variant={"ghost"} size={"icon"}>
                    <PhoneCall />
                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <ArrowUpRightFromSquare />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-[#5e5e5e] mb-1 text-sm">
                  Movers in Sharjah
                </p>
                <div className="flex gap-x-2">
                  <Button variant={"ghost"} size={"icon"}>
                    <PhoneCall />
                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <ArrowUpRightFromSquare />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-[#5e5e5e] mb-1 text-sm">
                  Movers in Abu Dhabi
                </p>
                <div className="flex gap-x-2">
                  <Button variant={"ghost"} size={"icon"}>
                    <PhoneCall />
                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <ArrowUpRightFromSquare />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-[#5e5e5e] mb-1 text-sm">
                  Movers in Ajman
                </p>
                <div className="flex gap-x-2">
                  <Button variant={"ghost"} size={"icon"}>
                    <PhoneCall />
                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <ArrowUpRightFromSquare />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-80 h-72 relative">
            <Image
              src={"/uae-map.png"}
              alt="UAE Map"
              fill
              className="absolute object-center md:object-cover object-contain"
            />
          </div>
        </div>
        <div className="min-h-screen" />
      </main>
    </>
  );
}
