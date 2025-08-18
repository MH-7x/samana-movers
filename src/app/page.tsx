import { type Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowUpRightFromSquare,
  CalendarCheck2,
  Check,
  Gift,
  LucideListChecks,
  PhoneCall,
  Play,
  Truck,
} from "lucide-react";
import TestimonialSlider from "@/components/TestimonialsSlider";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { FAQs } from "@/components/FAQs";

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
        <section className="mt-32 h-[450px] overflow-hidden bg-fixed relative">
          <Image
            src={"/ocal-moving-sharjah-movers-2.jpg"}
            alt="Samana Movers Truck Parked on Street in Sharjah"
            fill
            className="absolute object-cover object-center "
          />
          <div className=" w-full h-full left-0 right-0 md:px-0 px-3 text-center bg-[#182937]/85 absolute flex flex-col items-center justify-center">
            <p className="b2 font-medium text-lg">READY 24 HOURS</p>
            <h2 className="mt-3 font-black md:text-5xl text-2xl b-white">
              24/7 Moving Services In UAE
            </h2>
            <p className="max-w-3xl mt-5 b-white mx-auto text-center">
              Samana Movers offers reliable 24/7 moving services in UAE,
              ensuring safe and hassle-free relocations anytime you need.
              Whether day or night, our trained team is ready to handle your
              house shifting with care and efficiency.
            </p>
            <Button variant={"secondary"} size={"lg"} className="mt-5 px-12">
              CONTACT US
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 md:w-96 w-32 b2-bg origin-top-right transform -skew-x-[36deg] -mr-[350px] " />
        </section>
        <section className="h-[600px]  relative mt-40">
          <Image
            src={"/movers-background.jpg"}
            alt="background image for movers"
            fill
            className="absolute object-cover object-center"
          />
          <div className="bg-white/70 md:px-0 px-3 md:py-0 py-10 absolute top-0 left-0 w-full h-full md:pr-20 grid md:grid-cols-2 grid-cols-1 items-center ">
            <div className="md:h-full md:block hidden relative">
              <Image
                src={"/mover-man.png"}
                fill
                alt="Samana Movers Member"
                className="object-contain object-top absolute drop-shadow-2xl"
              />
            </div>
            <div>
              <p className="b2 font-medium md:text-lg">TESTIMONIALS</p>
              <h2 className="md:text-5xl text-3xl font-black b1 mt-3">
                What Our Client&apos;s Said
              </h2>
              <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-3 b-text mt-5">
                <li className="flex items-center gap-x-2">
                  <Check size={20} /> <span>Your Requirement Is Our Wish</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check size={20} /> <span>Save & Secure Move</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check size={20} /> <span>Save & Secure Move</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check size={20} /> <span>Moving Is Quick & Easy</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check size={20} /> <span>Delivery On Time</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Check size={20} /> <span>Best Transportation</span>
                </li>
              </ul>
              <TestimonialSlider />
            </div>
          </div>
        </section>

        <section className="md:w-11/12 mx-auto mt-32 md:px-0 px-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="b2 font-medium md:text-lg">OUR BLOGS</p>
              <h2 className="md:text-5xl text-3xl font-black b1 mt-3">
                Latest News
              </h2>
            </div>
            <Button variant={"secondary"} size={"lg"} className="md:px-12">
              ALL NEWS
            </Button>
          </div>
          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-y-10">
            <div className="col-span-2 grid md:grid-cols-2 grid-cols-1 gap-10">
              <BlogCard
                image="/ocal-moving-sharjah-movers-2.jpg"
                category="Commercial Moving"
                title="Load Boards Show Flat Demand & Higher Rates"
                date="April 6, 2021"
                excerpt="Duis dictum vestibulum ante vitae ullamcorper. Risusque phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magna."
                href="#"
              />
              <BlogCard
                image="/ocal-moving-sharjah-movers-2.jpg"
                category="Commercial Moving"
                title="Load Boards Show Flat Demand & Higher Rates"
                date="April 6, 2021"
                excerpt="Duis dictum vestibulum ante vitae ullamcorper. Risusque phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magna."
                href="#"
              />
            </div>
            <div className="b1-bg p-10 flex flex-col gap-y-8 w-full grid-cols-1">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index}>
                  <Link href={"#"}>
                    <h4 className="line-clamp-2 hover:underline hover:underline-offset-2  font-medium b-white text-xl">
                      Load Boards Show Flat Demand & Higher Rates
                    </h4>
                  </Link>
                  <div>
                    <div className="flex items-center gap-x-2 text-gray-500 text-sm mt-2">
                      <CalendarCheck2 size={17} />
                      <span>April 6, 2025</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant={"secondary"} size={"lg"} className="w-full">
                VIEW ALL
              </Button>
            </div>
          </div>
        </section>
        <FAQs
          faqs={[
            {
              question: "How far in advance should I schedule my move?",
              answer: (
                <>
                  <p>
                    We recommend booking at least 1–2 weeks before your desired
                    moving date. This gives us time to secure the moving date
                    and prepare our team.
                  </p>
                  <p>
                    We also try to accommodate urgent moves on shorter notice
                    whenever possible.
                  </p>
                </>
              ),
            },
            {
              question: "Do you provide packing materials and services?",
              answer: (
                <>
                  <p>
                    Yes. We offer full packing services in the UAE. Our movers
                    come with high-quality boxes, bubble wrap, and tape to
                    protect your items.
                  </p>
                  <p>
                    If you prefer, you can pack some belongings yourself and
                    we’ll handle the rest.
                  </p>
                </>
              ),
            },
            {
              question: "Is Samana Movers insured?",
              answer: (
                <>
                  <p>
                    Absolutely. All moves include basic insurance at no extra
                    cost. You can also purchase additional insurance for
                    valuable items.
                  </p>
                  <p>
                    If any damage occurs, file a claim with us and we will
                    handle it promptly and professionally
                  </p>
                </>
              ),
            },
            {
              question: "What items can’t be moved by Samana Movers?",
              answer: (
                <>
                  <p>
                    We move almost all household items, but for safety and legal
                    reasons we cannot transport hazardous materials (like
                    flammables, chemicals, or gases).
                  </p>
                  <p>
                    We also advise you to carry valuables (cash, jewelry) with
                    you. Just ask us if you’re unsure about any specific item.
                  </p>
                </>
              ),
            },
          ]}
        />
        <section className="mt-32 b1-bg md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
          <div>
            <h2 className="md:text-4xl text-3xl font-black b-white">
              Ready To Get Moving? Get Your Free Quote Now
            </h2>
            <p className="b-white mt-4">
              Let Samana Movers take the stress out of your next move. Call or
              WhatsApp us today to get a free quote from the leading movers and
              packers in the UAE.
            </p>
            <h3 className="md:text-2xl text-lg mt-5 font-medium b-white">
              CALL TO MOVERS : <span className="b2">(+971) 50123456</span>
            </h3>
          </div>
          <div className="z-20 relative md:h-[420px] h-96">
            <Image
              src={"/cta-image.png"}
              alt="cta image"
              fill
              className="absolute object-contain object-center"
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 b2-bg origin-top-right transform -skew-x-[45deg] -mr-[500px] " />
        </section>
      </main>
    </>
  );
}
