import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import React from "react";
import imageSrc from "../../../../public/long-distance/Samana-Movers-Hero-Dubai.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceRighSidebar from "@/components/ServiceRighSidebar";
import { Check, CheckCircle, Pill, Star } from "lucide-react";
import { Section } from "../apartment-movers-uae/page";
import TestimonialSlider from "@/components/TestimonialsSlider";
import { FAQs } from "@/components/FAQs";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Long Distance Movers in Dubai | Move Anywhere in UAE",
      desc: "Move anywhere in UAE with samana movers, a trusted long distance moving company. Get a free quote today! or call us +971 56 356017",
    },
    path: "/long-distance-movers-dubai",
    image: {
      path: "long-distance/Samana-Movers-Hero-Dubai.jpg",
      alt: "Samana Movers Dubai professional moving team carrying sofa — branded truck visible",
    },
  },
});

const LongDistanceMovers = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <section className="w-full h-[500px] relative ">
        <Image
          src={imageSrc}
          alt="Samana Movers Dubai professional moving team carrying sofa — branded truck visible"
          fill
          placeholder="blur"
          loading="eager"
          className="absolute object-cover object-center"
        />
        <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75  md:to-white/25 to-white/50 md:px-20 px-3">
          <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
            Long Distance Movers in Dubai: Samana Movers
          </h1>
          <p className="mt-5 b-text max-w-2xl md:text-lg">
            When searching for reliable long distance movers in Dubai, choosing
            the right company can make all the difference between a stressful
            ordeal and a seamless relocation experience.
          </p>
          <p className="mt-1 b-text max-w-2xl md:text-lg">
            Samana Movers stands as your trusted partner for professional long
            distance moving services, offering comprehensive solutions for
            residential and commercial relocations across the UAE and beyond.
          </p>
          <div className="mt-5 flex gap-x-5">
            <Button size={"lg"} callBtn variant={"secondary"}>
              Call Now
            </Button>
            <Link href={"/contact-us"}>
              <Button size={"lg"}>Get A Quote</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-7 items-start mt-32 md:px-0 px-3 md:w-11/12 mx-auto">
        <div className="lg:col-span-2 col-span-1 b-text">
          <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,#fcd200aa,transparent_100%)]" />
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6  pb-16 pt-20">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Pill>Licensed & Insured</Pill>
                <Pill>Friendly, Professional Crew</Pill>
                <Pill>Whole UAE Coverage</Pill>
              </div>
              <h2 className=" text-3xl font-extrabold tracking-tight sm:text-4xl">
                Best Long Distance Movers in UAE
              </h2>
              <p className="max-w-3xl  text-base leading-7 text-gray-700 sm:text-lg">
                With our experienced team, modern equipment, and
                customer-centric approach, we ensure your belongings reach their
                destination safely and on time, making us the preferred choice
                among Dubai movers.{" "}
                <Link
                  className="font-medium underline"
                  href={"#customers-testimonials"}
                >
                  See what our customers say
                </Link>
              </p>
              <div className=" max-w-3xl  text text-gray-600">
                Moving long distances requires meticulous planning, specialized
                equipment, and experienced professionals who understand the
                complexities of inter-emirate and international relocations.
              </div>
              <div className=" max-w-3xl  text text-gray-600">
                Whether you&lsquo;re relocating your family home from Dubai to
                Abu Dhabi or moving your business operations across the country,
                Samana Movers provides end-to-end moving solutions tailored to
                your specific needs.
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  id="quote"
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-xl b1-bg px-5 py-3 text-sm font-semibold text-white  transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Get a Free Quote
                </a>
                <a
                  href="https://wa.me/+97156356017"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900  transition hover:bg-gray-50"
                >
                  Talk to a Specialist
                </a>
              </div>
            </div>
          </section>
          <div className="h-96 relative w-full py-10">
            <Image
              src={"/long-distance/Samana-Movers-Fleet-Dubai.jpg"}
              alt="Samana Movers branded moving trucks lined up in Dubai street — fleet photo"
              fill
              className="absolute object-cover object-center"
            />
          </div>
          <Section
            id="why-choose-us"
            title="Why Choose Samana Movers for Long Distance Moving in Dubai?
"
          >
            <p>
              As one of the most reliable long distance moving companies in
              Dubai, Samana Movers has built a reputation for excellence through
              years of dedicated service to families and businesses across the
              UAE.
            </p>
            <p className="mt-2">
              Our commitment to professionalism, transparency, and customer
              satisfaction sets us apart from other moving companies Dubai has
              to offer.
            </p>
            <p className="mt-2">
              Professional movers Dubai residents trust, our team consists of
              highly trained specialists who understand the unique challenges of
              long distance relocations.
            </p>
            <p className="mt-2">
              Every team member undergoes rigorous training in packing
              techniques, furniture handling, and customer service to ensure
              your moving experience exceeds expectations.
            </p>
          </Section>
          <Section title="Our Key Differentiators">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Licensed and Insured Operations:",
                  desc: "We are fully licensed by UAE authorities and carry comprehensive insurance coverage to protect your belongings throughout the entire moving process. This gives you peace of mind knowing that your valuable possessions are in safe hands.",
                },
                {
                  title: "Modern Fleet and Equipment:",
                  desc: "Our state-of-the-art moving trucks are equipped with GPS tracking systems, climate control, and specialized securing mechanisms to ensure safe transportation of your belongings across long distances. ",
                },
                {
                  title: "Furniture Disassembly & Reassembly",
                  desc: "We take apart items for tight fits and reassemble them in your new home, saving you time and hassle.",
                },
                {
                  title: "Specialty Item Moving",
                  desc: "Pianos, artwork, antiques, and delicate glass handled with extra protection and care.",
                },
                {
                  title: "Transparent Pricing:",
                  desc: "Unlike many companies, we provide upfront, detailed quotes with no hidden fees. What we quote is what you pay, making us among the most affordable long distance movers Dubai has to offer without compromising on quality. ",
                },
                {
                  title: "24/7 Customer Support",
                  desc: "Our dedicated customer service team is available around the clock to address your concerns, provide updates, and ensure smooth communication throughout your moving journey.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className=" border border-gray-200 bg-white p-6 "
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl b2-bg b1">
                    <Star />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-96 relative">
              <Image
                src={"/long-distance/Samana-Movers-Packing-Service.jpg"}
                alt="Samana Movers packing service with labeled boxes and inventory tablet — packing in Dubai"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="h-96 relative">
              <Image
                src={"/long-distance/team-packing.jpg"}
                alt="packing service by samana movers"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </div>

          <Section
            id="long-distance-moving-services"
            title="Comprehensive Long Distance Moving Services We Offer"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  h: "Residential Long Distance Moving",
                  d: "As long distance home movers Dubai families trust, we specialize in complete household relocations that preserve the comfort and security of your personal space. Our residential moving services cater to apartments, villas, and townhouses of all sizes.",
                },
                {
                  h: "Family Moving Services",
                  d: "We understand that moving with children requires special considerations. Our team provides child-friendly moving solutions, including priority scheduling and expedited services to minimize disruption to school and family routines.",
                },
                {
                  h: "Senior Moving Assistance",
                  d: "Our compassionate approach to senior relocations includes downsizing assistance, medical equipment handling, and extra care for fragile or sentimental items that hold special meaning. ",
                },
                {
                  h: "Student Relocation",
                  d: "As specialized long distance movers for students Dubai, we offer affordable packages designed for university students and young professionals. Our services include flexible scheduling around academic calendars and budget-friendly options.",
                },
                {
                  h: "Expat Moving Services",
                  d: "For long distance movers for expats in Dubai, we provide comprehensive relocation support including documentation assistance, customs guidance, and cultural orientation to help international residents settle into their new homes smoothly.",
                },
              ].map((it) => (
                <div
                  key={it.h}
                  className="flex items-start gap-3  border border-gray-200 bg-white p-6 "
                >
                  <Check className="mt-1 shrink-0 b1" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {it.h}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {it.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <Section
            id="commercial-long-distance-moving"
            title="Commercial Long Distance Moving"
          >
            <p>
              Our long distance office movers Dubai services ensure minimal
              business disruption while relocating your commercial operations.
            </p>
            <p className="mt-2">
              We understand that time is money in business, and our efficient
              moving processes are designed to get you operational in your new
              location as quickly as possible.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-10">
              {[
                {
                  h: "Office Relocations:",
                  d: "From small startups to large corporations, we handle complete office moves including furniture, equipment, documents, and technology infrastructure. Our team works during weekends and after hours to minimize impact on business operations.",
                },
                {
                  h: "Industrial Moving:",
                  d: "We specialize in moving heavy machinery, manufacturing equipment, and industrial tools across long distances. Our team includes technical specialists who understand the complexities of industrial relocations.",
                },
                {
                  h: "IT Equipment Transportation",
                  d: "Modern businesses rely heavily on technology. Our IT moving specialists ensure safe transportation of servers, computers, networking equipment, and sensitive electronic devices with anti-static packaging and climate-controlled transportation. ",
                },
              ].map((it) => (
                <div
                  key={it.h}
                  className="flex items-start gap-3  border border-gray-200 bg-white p-6 "
                >
                  <CheckCircle className="mt-1 shrink-0 b1" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {it.h}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {it.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <Section
            id="specialized-moving-services"
            title="Specialized Moving Services"
          >
            <div className="mt-10 b-text">
              <h3 className="font-medium text-xl">
                Furniture Movers Dubai Excellence:
              </h3>
              <p className="b-text mt-2">
                Our furniture movers Dubai team handles everything from delicate
                antiques to modern modular furniture with equal expertise. We
                use specialized equipment and techniques to ensure your
                furniture arrives in perfect condition.
              </p>

              <h3 className="font-medium text-xl mt-5">
                Piano and Musical Instrument Moving:
              </h3>
              <p className="b-text mt-2">
                As professional piano movers long distance Dubai specialists, we
                understand the intricate requirements of moving musical
                instruments. Our team uses custom crates, padding, and
                climate-controlled transportation to protect these valuable
                items.
              </p>
              <h3 className="font-medium text-xl mt-5">
                Artwork and Antique Transportation:
              </h3>
              <p className="b-text mt-2">
                For collectors and art enthusiasts, we provide museum-quality
                packing and transportation services for paintings, sculptures,
                and valuable collectibles.
              </p>
              <h3 className="font-medium text-xl mt-5">
                Fragile Items Handling
              </h3>
              <p className="b-text mt-2">
                Our long distance movers for fragile items Dubai services
                include specialized packing materials, custom crating, and
                shock-resistant transportation for glass, ceramics, electronics,
                and other delicate possessions.
              </p>
            </div>
          </Section>
          <Section
            id="long-distance-moving-from-dubai"
            title="Long Distance Moving Destinations from Dubai"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  h: "Dubai to Abu Dhabi",
                  d: "Our long distance movers from Dubai to Abu Dhabi service is one of our most popular routes. We handle everything from government employee relocations to family moves, ensuring smooth transitions to the capital emirate.",
                },
                {
                  h: "Dubai to Sharjah",
                  d: "As experienced long distance movers from Dubai to Sharjah, we understand the unique logistics of this route and provide efficient, cost-effective moving solutions for families and businesses. ",
                },
                {
                  h: "Other Emirates",
                  d: "We also provide comprehensive moving services to Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain, making us your complete UAE relocation partner. ",
                },
              ].map((it) => (
                <div
                  key={it.h}
                  className="flex items-start gap-3  border border-gray-200 bg-white p-6 "
                >
                  <Check className="mt-1 shrink-0 b1" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {it.h}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {it.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-96 relative">
              <Image
                src={"/long-distance/Samana-Movers-Art-Handling.jpg"}
                alt="Samana Movers artwork packing and crates — museum-quality handling Dubai"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="h-96 relative">
              <Image
                src={"/long-distance/Samana-Movers-Piano-Move.jpg"}
                alt="Samana Movers piano moving specialists loading piano — safe instrument moving Dubai"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </div>
          <Section
            id="long-distance-moving-process"
            title="Our Long Distance Moving Process: Step-by-Step Guide"
          >
            <ol className="grid list-decimal gap-6 pl-5 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  t: "Pre-Move Planning and Survey:",
                  d: "Our process begins with a comprehensive assessment of your moving requirements. Our experienced estimators visit your location to evaluate the volume of items, identify special handling requirements, anddiscuss your specific needs and timeline. ",
                },
                {
                  t: "Free Home Assessment:",
                  d: "We provide complimentary in-home surveys where our experts assess your belongings, take measurements, and identify any potential challenges such as narrow staircases or oversized items.",
                },
                {
                  t: "Customized Moving Plan:",
                  d: "Based on the assessment, we create a detailed moving plan that includes timelines, resource allocation, and contingency planning to ensure smooth execution.",
                },
              ].map((step, i) => (
                <li key={i} className=" border border-gray-200 bg-white p-6 ">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#b19300]">
                    Step {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {step.t}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {step.d}
                  </p>
                </li>
              ))}
            </ol>
          </Section>
        </div>
        {/* Right Sidebar */}
        <ServiceRighSidebar service="Long Distance Movers" />

        {/* Right Sidebar */}
        <section
          id="cost-of-long-distance-moving"
          className="lg:col-span-3 lg:px-32"
        >
          <h2 className="text-4xl font-bold text-center b1">
            Long Distance Moving Cost and Pricing in Dubai
          </h2>
          <p className="mt-5">
            Understanding long distance moving cost Dubai factors helps you plan
            your budget effectively and avoid unexpected expenses. Our
            transparent pricing model ensures you know exactly what to expect.
          </p>
          <h3 className="b1 text-3xl my-5 font-bold">
            Factors That Influence Moving Costs
          </h3>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                Distance and Destination:
              </h4>{" "}
              <p>
                The primary cost factor is the distance between origin and
                destination. International moves typically cost more than
                domestic UAE relocations due to additional documentation,
                customs, and handling requirements.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Volume and Weight:</h4>{" "}
              <p>
                The total volume and weight of your belongings directly impact
                transportation costs. We provide accurate estimates based on
                comprehensive pre-move surveys.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Packing Services:</h4>{" "}
              <p>
                While optional, professional packing services add convenience
                and protection to your move. We offer various packing levels
                from basic wrapping to full-service packing.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                Seasonal Variations:
              </h4>{" "}
              <p>
                Moving costs can fluctuate based on seasonal demand. Summer
                months and holiday periods typically see higher demand and
                correspondingly higher rates.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                Additional Services:
              </h4>{" "}
              <p>
                Services like storage, special handling for fragile items, or
                expedited delivery may incur additional costs but provide added
                value and convenience.
              </p>
            </li>
          </ul>
        </section>
        <section
          id="long-distance-moving-tips"
          className="lg:col-span-3 lg:px-32 mt-10"
        >
          <h2 className="text-4xl font-bold text-center b1">
            Tips for a Successful Long Distance Move from Dubai
          </h2>

          <h3 className="b1 text-3xl mt-10 mb-5 font-bold">
            Planning Your Long Distance Move
          </h3>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Start Early:</h4>{" "}
              <p>
                Begin planning your long-distance move at least 8-12 weeks in
                advance to ensure availability and better rates. This is
                especially important during peak moving seasons.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Create a Timeline:</h4>{" "}
              <p>
                Develop a comprehensive moving timeline that includes tasks like
                school transfers, utility connections, and address changes. This
                helps ensure nothing important is overlooked.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                Research Your Destination:
              </h4>{" "}
              <p>
                Familiarize yourself with your new location including local
                services, schools, healthcare facilities, and cultural norms,
                especially for international moves.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Budget Planning:</h4>{" "}
              <p>
                Factor in all moving-related expenses including packing
                materials, transportation, insurance, temporary accommodation,
                and settling-in costs.
              </p>
            </li>
          </ul>
          <h3 className="b1 text-3xl mt-10 mb-5 font-bold">
            Preparing Your Belongings
          </h3>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Decluttering:</h4>{" "}
              <p>
                Use your move as an opportunity to declutter. Donate, sell, or
                discard items you no longer need to reduce moving costs and
                simplify your new start.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                {" "}
                Important Documents:
              </h4>{" "}
              <p>
                Gather and organize important documents like passports, birth
                certificates, medical records, and financial documents. Keep
                these with you during the move rather than packing them.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Valuable Items:</h4>{" "}
              <p>
                Consider transporting high-value items like jewelry, important
                documents, and family heirlooms personally rather than including
                them in the moving shipment.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                Electronics Preparation:
              </h4>{" "}
              <p>
                Back up computer data and properly prepare electronics for
                transportation. Take photos of cable connections to make
                reassembly easier.
              </p>
            </li>
          </ul>
          <h3 className="b1 text-3xl mt-10 mb-5 font-bold">
            Moving Day Best Practices
          </h3>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <li>
              {" "}
              <h4 className="text-lg font-semibold">
                Final Preparations:
              </h4>{" "}
              <p>
                Confirm all arrangements the day before your move including
                pickup times, crew size, and special instructions for your
                moving team.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold"> Communication:</h4>{" "}
              <p>
                Maintain clear communication with your moving crew and project
                manager throughout the day. Address any concerns immediately
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Documentation:</h4>{" "}
              <p>
                Keep all moving-related receipts and documentation for insurance
                purposes and tax deductions if applicable.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="text-lg font-semibold">Essentials box</h4>{" "}
              <p>
                Pack a box of essentials for your first few days in your new
                location including medications, basic toiletries, changes of
                clothes, and important phone numbers.
              </p>
            </li>
          </ul>
        </section>
      </section>
      <section
        id="customers-testimonials"
        className="h-[600px]  relative mt-40"
      >
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
            <TestimonialSlider
              reviews={[
                {
                  id: 1,
                  name: "Aisha Al Futtaim",
                  role: "Villa Relocation, Arabian Ranches",
                  image: "https://i.pravatar.cc/100?img=1 ",
                  rating: 5,
                  feedback:
                    "Samana Movers are the best villa movers and packers in Dubai, without a doubt. They handled our large furniture and fragile items with incredible care. The team was professional, efficient, and the final price was exactly as quoted. A truly stress-free experience.",
                },
                {
                  id: 2,
                  name: "Sarah M.",
                  role: "Dubai to Toronto — Long Distance Move",
                  image: "https://i.pravatar.cc/100?img=2 ",
                  rating: 5,
                  feedback:
                    "Moving from Dubai to Canada seemed overwhelming until we found Samana Movers. Their team handled everything from packing to customs clearance. Our belongings arrived in perfect condition, and their customer service was exceptional throughout the entire process.",
                },
                {
                  id: 3,
                  name: "James R.",
                  role: "Dubai to London — Expat Relocation",
                  image: "https://i.pravatar.cc/100?img=3",
                  rating: 5,
                  feedback:
                    "As expats moving from Dubai back to the UK, we needed more than just movers - we needed partners who understood international relocations. Samana Movers exceeded our expectations with their professionalism and attention to detail.",
                },
                {
                  id: 4,
                  name: "Ahmed K.",
                  role: "Office Relocation, Dubai to Abu Dhabi",
                  image: "https://i.pravatar.cc/100?img=4 ",
                  rating: 5,
                  feedback:
                    "The office relocation from Dubai to Abu Dhabi was completed over a weekend with minimal disruption to our business. Their team worked tirelessly to ensure we were operational on Monday morning — excellent planning and seamless execution.",
                },
                {
                  id: 5,
                  name: "Maria L.",
                  role: "Art Collector — Antique Furniture Move",
                  image: "https://i.pravatar.cc/100?img=5 ",
                  rating: 5,
                  feedback:
                    "I was worried about moving my antique furniture collection, but Samana Movers treated each piece like a treasure. Everything arrived safely, and their custom crating service was worth every dirham. Highly recommended for delicate and high-value items.",
                },
                {
                  id: 6,
                  name: "Omar H.",
                  role: "Family Relocation, Dubai to Manchester",
                  image: "https://i.pravatar.cc/100?img=6 ",
                  rating: 5,
                  feedback:
                    "Samana Movers made our long distance family move smooth and predictable. The crew packed efficiently, kept our inventory updated, and the shipment arrived on schedule. Clear communication and honest pricing — we felt supported the whole way.",
                },
                {
                  id: 7,
                  name: "Nadia S.",
                  role: "Student Move, Dubai to Abu Dhabi",
                  image: "https://i.pravatar.cc/100?img=7 ",
                  rating: 5,
                  feedback:
                    "As a student with a tight budget, I appreciated Samana Movers' flexible options and quick service. They packed my things neatly, handled the transport fast, and even helped assemble furniture at my new place. Friendly team and great value.",
                },
                {
                  id: 8,
                  name: "Bilal R.",
                  role: "Vehicle Transport, Dubai to Muscat",
                  image: "https://i.pravatar.cc/100?img=8 ",
                  rating: 5,
                  feedback:
                    "I shipped my car with Samana Movers and was impressed by the care and professionalism. The vehicle arrived in perfect condition, the paperwork was handled smoothly, and updates were regular. A trustworthy partner for vehicle transport.",
                },
                {
                  id: 9,
                  name: "Fatima Z.",
                  role: "Small Apartment Move, Dubai Marina to Downtown",
                  image: "https://i.pravatar.cc/100?img=9 ",
                  rating: 5,
                  feedback:
                    "Quick, friendly and reliable — Samana Movers helped us move our apartment with zero stress. The team was punctual, wrapped everything carefully, and left the new place tidy. Great customer experience from quote to final delivery.",
                },
                {
                  id: 10,
                  name: "Khaled A.",
                  role: "Corporate Move Coordinator, Multi-site Relocation",
                  image: "https://i.pravatar.cc/100?img=10 ",
                  rating: 5,
                  feedback:
                    "We used Samana Movers for a multi-site corporate relocation and they managed the logistics like pros. Their project management, timing and care for IT equipment minimized downtime and kept the rollout on schedule. Professional and dependable.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <FAQs
        faqs={[
          {
            question: "How much do long distance movers cost in Dubai?",
            answer: (
              <>
                <p>
                  Long distance moving costs vary depending on distance, total
                  volume (how much you’re moving), the level of packing
                  required, and the time of year.
                </p>
                <p>
                  As a guide, our quotes typically start around{" "}
                  <strong>AED 3,000</strong>
                  for a studio and can go to <strong>AED 15,000+</strong> for
                  large villas when full packing, crating and additional
                  services are included.
                </p>
                <p>
                  For an accurate price please request a free on-site survey or
                  upload your inventory so we can provide a personalised quote.
                </p>
              </>
            ),
          },
          {
            question: "What's the best time to schedule a long distance move?",
            answer: (
              <>
                <p>
                  The ideal time depends on your circumstances, but generally
                  weekdays are less busy and more affordable than weekends.
                </p>
                <p>
                  If possible, avoid peak summer months (June–August) and major
                  public holidays to get better rates and improved availability.
                </p>
                <p>
                  We can advise on optimal timing when you request a survey —
                  we’ll factor in transit times and any customs/port schedules
                  for international moves.
                </p>
              </>
            ),
          },
          {
            question: "How far in advance should I book long distance movers?",
            answer: (
              <>
                <p>
                  We recommend booking at least <strong>4–6 weeks</strong> in
                  advance for long distance or international moves, especially
                  during peak seasons.
                </p>
                <p>
                  Early booking secures your preferred dates, allows time for
                  planning and any required documentation, and reduces the
                  chance of last-minute surcharges.
                </p>
              </>
            ),
          },
          {
            question: "What items cannot be moved long distance?",
            answer: (
              <>
                <p>
                  For safety and legal reasons we cannot transport hazardous
                  materials such as flammable liquids, gases, explosives or
                  certain chemicals.
                </p>
                <p>
                  Perishable food items, some live plants and items restricted
                  by customs may also be prohibited for international shipments.
                  Sensitive items will be flagged during the pre-move survey.
                </p>
                <p>
                  We provide a full, itemised list during consultation and will
                  advise on safe alternatives or disposal options for restricted
                  goods.
                </p>
              </>
            ),
          },
          {
            question:
              "How do you ensure the safety of my belongings during transport?",
            answer: (
              <>
                <p>
                  We use professional packing techniques and high-quality
                  materials such as double-walled cartons, custom crates and
                  specialised padding for fragile items.
                </p>
                <p>
                  All long-distance shipments travel in GPS-tracked vehicles
                  driven by trained drivers; loads are secured with straps and
                  blocking to prevent movement in transit.
                </p>
                <p>
                  Additionally, we perform inventory checks, label fragile items
                  clearly and offer climate-controlled transport where required.
                </p>
              </>
            ),
          },
          {
            question:
              "Do you provide insurance coverage for long distance moves?",
            answer: (
              <>
                <p>
                  Yes — we offer multiple insurance options to suit different
                  needs.
                </p>
                <p>
                  Basic liability coverage is included with our moves, and we
                  also provide optional full replacement value coverage for
                  extra protection against loss or damage.
                </p>
                <p>
                  Our team will explain policy details and help you choose the
                  right coverage level during the quotation process.
                </p>
              </>
            ),
          },
          {
            question: "Can you help with international relocations from Dubai?",
            answer: (
              <>
                <p>
                  Absolutely. As experienced international movers based in
                  Dubai, we handle customs documentation, freight coordination
                  and door-to-door delivery to destinations worldwide.
                </p>
                <p>
                  We work with trusted global partners and agents in destination
                  countries to ensure smooth clearance, local delivery and any
                  required permits.
                </p>
              </>
            ),
          },
          {
            question:
              "What makes Samana Movers different from other moving companies?",
            answer: (
              <>
                <p>
                  Samana Movers combines transparent pricing, modern technology
                  (GPS tracking & digital inventory), and end-to-end services
                  including packing, crating, storage and international customs
                  support.
                </p>
                <p>
                  Our focus on clear communication, trained staff and 24/7
                  customer support means fewer surprises and a smoother moving
                  experience for customers.
                </p>
              </>
            ),
          },
        ]}
      />
      <section className="mt-32 b1-bg md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
        <div>
          <h2 className="md:text-4xl text-3xl font-black b-white">
            Ready to Move? Contact Samana Movers Today
          </h2>
          <p className="b-white mt-4">
            Ready to experience stress-free long-distance moving with
            Dubai&lsquo;s most trusted moving company? Our team is standing by
            to help you plan and execute your perfect relocation.
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
  );
};

export default LongDistanceMovers;
