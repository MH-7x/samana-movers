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
      title: "Movers and Packers in UAE | House Shifting Services",
      desc: "Samana Movers is top rated moving company in UAE with over 15+ years of expertise in moving with UAE. We offer affordable moving services for homes, offices and single furnitures.",
    },
    image: {
      path: "/local-moving-sharjah-movers.jpg",
      alt: "Samana Movers Company Trucks",
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
              <Link href={"/about-us"}>
                <Button size={"lg"}>ABOUT US</Button>
              </Link>
              <Link href={"/contact-us"}>
                <Button variant={"secondary"} size={"lg"}>
                  GET A QUOTE
                </Button>
              </Link>
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
        <section className="mt-32 md:w-11/12 mx-auto md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 items-center gap-10">
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
        </section>
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
            <Button
              callBtn
              variant={"secondary"}
              size={"lg"}
              className="mt-5 px-12"
            >
              CALL NOW
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
            <Link href={"/blogs"}>
              {" "}
              <Button variant={"secondary"} size={"lg"} className="md:px-12">
                ALL NEWS
              </Button>
            </Link>
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
              question:
                "How much do movers and packers charge in Dubai and UAE?",
              answer: (
                <>
                  <p>
                    The cost of professional movers and packers in UAE typically
                    ranges from AED 500 to AED 1500 for local moves within the
                    city, depending on several factors.
                  </p>
                  <p>
                    At Samana Movers, we provide transparent, competitive
                    pricing based on your specific requirements including
                    apartment size, distance, number of items, and additional
                    services needed. We offer free quotations with no hidden
                    charges, ensuring you get the best value for your money.
                  </p>
                </>
              ),
            },
            {
              question:
                "What services do professional movers and packers in UAE provide?",
              answer: (
                <>
                  <p>
                    Professional moving companies in UAE offer comprehensive
                    relocation solutions. At Samana Movers, our services
                    include:
                  </p>
                  <ul>
                    <li>Professional packing using high-quality materials</li>
                    <li>Safe loading and unloading</li>
                    <li>Secure transportation with GPS-tracked vehicles</li>
                    <li>Furniture dismantling and reassembly</li>
                    <li>Unpacking and arrangement at your new location</li>
                    <li>Storage solutions for short and long-term needs</li>
                    <li>Special handling for fragile and valuable items</li>
                    <li>Post-move cleaning services</li>
                  </ul>
                </>
              ),
            },
            {
              question:
                "Do movers and packers in UAE provide insurance for damaged items?",
              answer: (
                <>
                  <p>
                    Yes, reputable moving companies offer comprehensive
                    insurance coverage. At Samana Movers, we prioritize the
                    safety of your belongings with full insurance options,
                    giving you complete peace of mind.
                  </p>
                  <p>
                    Our trained professionals handle your items with utmost
                    care, but in the rare event of damage, you&lsquo;re fully
                    protected.
                  </p>
                </>
              ),
            },
            {
              question:
                "How far in advance should I book movers and packers in Dubai?",
              answer: (
                <>
                  <p>
                    For the best availability and rates, we recommend booking
                    your moving service at least 2-3 weeks in advance,
                    especially during peak moving seasons.
                  </p>
                  <p>
                    However, Samana Movers also offers emergency moving services
                    and can often accommodate last-minute requests.
                  </p>
                </>
              ),
            },
            {
              question:
                "What packing materials do movers use to protect my belongings?",
              answer: (
                <>
                  <p>
                    At Samana Movers, we utilize premium packing materials,
                    including:
                  </p>
                  <ul>
                    <li>Double-walled corrugated boxes in various sizes</li>
                    <li>Premium bubble wrap for fragile items</li>
                    <li>Stretch film for furniture protection</li>
                    <li>Moving blankets for large items</li>
                    <li>Special wardrobe boxes for clothes</li>
                    <li>Custom crating for artwork and antiques</li>
                  </ul>
                  <p>
                    All packing materials are included in our moving packages –
                    no hidden costs!
                  </p>
                </>
              ),
            },
            {
              question:
                "Can movers and packers handle office relocation in UAE?",
              answer: (
                <>
                  <p>
                    Absolutely! Samana Movers specializes in both residential
                    and commercial relocations. Our office moving services
                    include:
                  </p>
                  <ul>
                    <li>
                      Minimal business disruption with weekend/after-hours moves
                    </li>
                    <li>IT equipment handling and setup</li>
                    <li>Secure document transportation</li>
                    <li>Furniture dismantling and installation</li>
                    <li>Floor planning assistance</li>
                    <li>Employee workstation relocation</li>
                  </ul>
                </>
              ),
            },
            {
              question:
                "Do you offer same-day moving services in Dubai and Abu Dhabi?",
              answer: (
                <>
                  <p>
                    Yes, Samana Movers provides emergency same-day moving
                    services across UAE for urgent relocation needs. Our rapid
                    response team is equipped to handle last-minute moves
                    efficiently without compromising quality.
                  </p>
                  <p>
                    While same-day services are subject to availability, we
                    maintain a large fleet and professional crew to accommodate
                    urgent requests.
                  </p>
                </>
              ),
            },
            {
              question:
                "What items are not allowed to be moved by packers and movers in UAE?",
              answer: (
                <>
                  <p>
                    For safety and legal compliance, certain items cannot be
                    transported:
                  </p>
                  <ul>
                    <li>Hazardous materials (chemicals, paints, gasoline)</li>
                    <li>Perishable foods</li>
                    <li>Plants (require special permits)</li>
                    <li>Pets (need specialized pet relocation services)</li>
                    <li>Jewelry and cash (recommend personal transport)</li>
                    <li>Important documents (passports, certificates)</li>
                    <li>Firearms and ammunition</li>
                  </ul>
                </>
              ),
            },
            {
              question:
                "How long does it take to complete a house move in Dubai?",
              answer: (
                <>
                  <p>The duration depends on the size of the move:</p>
                  <ul>
                    <li>Studio apartment: 2-4 hours</li>
                    <li>1-2 bedroom apartment: 4-6 hours</li>
                    <li>3-4 bedroom villa: 6-10 hours</li>
                    <li>Large villa: 1-2 days</li>
                  </ul>
                  <p>
                    At Samana Movers, our efficient team ensures timely
                    completion with minimal disruption.
                  </p>
                </>
              ),
            },
            {
              question:
                "Do movers and packers provide storage facilities in UAE?",
              answer: (
                <>
                  <p>
                    Yes, Samana Movers provides secure and flexible storage
                    solutions in Abu Dhabi and Dubai. Our facilities include:
                  </p>
                  <ul>
                    <li>Climate-controlled storage units</li>
                    <li>24/7 security surveillance</li>
                    <li>Flexible rental periods (daily, weekly, monthly)</li>
                    <li>Various unit sizes</li>
                    <li>Easy access to your belongings</li>
                    <li>Inventory management systems</li>
                  </ul>
                </>
              ),
            },
            {
              question:
                "Are there female packers available for moving services in UAE?",
              answer: (
                <>
                  <p>
                    Yes, Samana Movers provides female packing staff upon
                    request. Our lady packers are trained to handle all
                    household items with special attention to personal
                    belongings, clothing, and delicate items.
                  </p>
                  <p>
                    This service is particularly popular among families and
                    ensures comfort during the packing process.
                  </p>
                </>
              ),
            },
            {
              question: "What is the best time of year to move in UAE?",
              answer: (
                <>
                  <p>The optimal moving periods in UAE are:</p>
                  <ul>
                    <li>
                      <strong>October to April</strong>: Cooler weather, easier
                      moving conditions
                    </li>
                    <li>
                      <strong>Weekdays</strong>: Lower rates, better
                      availability
                    </li>
                    <li>
                      <strong>Avoid month-end</strong>: High demand periods
                    </li>
                  </ul>
                  <p>
                    Samana Movers operates year-round with climate-controlled
                    vehicles and offers off-season discounts during summer.
                  </p>
                </>
              ),
            },
            {
              question:
                "Can movers help with international relocation from UAE?",
              answer: (
                <>
                  <p>
                    Yes, Samana Movers facilitates international relocations
                    with comprehensive services including:
                  </p>
                  <ul>
                    <li>Custom clearance assistance</li>
                    <li>International packing standards</li>
                    <li>Air and sea freight options</li>
                    <li>Documentation support</li>
                    <li>Door-to-door delivery</li>
                    <li>Tracking systems</li>
                    <li>Partner networks worldwide</li>
                  </ul>
                </>
              ),
            },
            {
              question: "How can I prepare for the movers and packers arrival?",
              answer: (
                <>
                  <p>To ensure a smooth moving day, here are some tips:</p>
                  <ul>
                    <li>Create an inventory list</li>
                    <li>Separate items you&lsquo;ll carry personally</li>
                    <li>Defrost and clean refrigerator 24 hours prior</li>
                    <li>Backup computer data</li>
                    <li>Label boxes for fragile items</li>
                    <li>Clear pathways for easy access</li>
                    <li>Arrange parking permits if needed</li>
                    <li>Keep children and pets secure</li>
                  </ul>
                </>
              ),
            },
            {
              question:
                "Why should I choose professional movers instead of doing it myself?",
              answer: (
                <>
                  <p>Hiring Samana Movers offers significant advantages:</p>
                  <ul>
                    <li>
                      <strong>Save Time</strong>: Complete move in hours vs.
                      days
                    </li>
                    <li>
                      <strong>Prevent Injuries</strong>: Professional equipment
                      and techniques
                    </li>
                    <li>
                      <strong>Insurance Protection</strong>: Full coverage for
                      your belongings
                    </li>
                    <li>
                      <strong>Cost-Effective</strong>: No hidden costs for truck
                      rental, fuel, materials
                    </li>
                    <li>
                      <strong>Stress-Free</strong>: We handle everything while
                      you relax
                    </li>
                    <li>
                      <strong>Professional Expertise</strong>: Experienced
                      handling of all item types
                    </li>
                    <li>
                      <strong>Single Point of Contact</strong>: One company,
                      complete accountability
                    </li>
                  </ul>
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
            <Link href={"tel:+971563560017"}>
              {" "}
              <h3 className="md:text-2xl text-lg mt-5 font-medium b-white">
                CALL TO MOVERS : <span className="b2">(+971) 56356017</span>
              </h3>
            </Link>
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
