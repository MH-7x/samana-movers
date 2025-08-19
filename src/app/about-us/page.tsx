import {
  Check,
  CheckCircle,
  DollarSign,
  MapPinCheck,
  ShieldCheckIcon,
  TimerIcon,
  TruckElectric,
  UserCheck2,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import TestimonialSlider from "@/components/TestimonialsSlider";
import { FAQs } from "@/components/FAQs";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
const services = [
  {
    title: "Specialized Residential Movers",
    description:
      "We handle only home moves – apartments and villas – so you get true house-moving specialists. From compact flats in Sharjah to spacious villas on Yas Island, we have the experience to manage house shifting in Dubai or villa relocations in Abu Dhabi smoothly, with custom packing for delicate items and furniture.",
    icon: <UserCheck2 width={30} height={30} className="b1" />,
  },
  {
    title: "Licensed & Insured",
    description:
      "Samana Movers holds a valid Sharjah Goods-in-Transit license and carries both goods-in-transit and public liability insurance. This compliance means your belongings are protected by industry-standard coverage. In fact, transit insurance acts as “a safety net” against loss or damage during moving , and our licensed professionals ensure everything is handled safely",
    icon: <ShieldCheckIcon width={30} height={30} className="b2" />,
  },

  {
    title: "Transparent, Affordable Pricing",
    description:
      "We’re known for our honest quotes and affordable rates. You’ll receive a flat-rate estimate upfront, with no hidden fees or surprise charges (our policy is “no hidden fees or surprises” ). We base pricing on clear factors like move size and distance, so you can budget confidently. ",
    icon: <DollarSign width={30} height={30} className="b2" />, // Placeholder for an affordable or money icon
  },

  {
    title: "Experienced Local Team",
    description:
      " Our movers are friendly, uniformed professionals with deep local knowledge. They know UAE roads, building permits, and parking rules – from Jumeirah high-rises to Sharjah villas. With years of experience in Sharjah and Dubai, our team works efficiently and courteously to complete your move on time.",
    icon: <MapPinCheck width={30} height={30} className="b2" />, // Placeholder for a location or local icon
  },
  {
    title: "Flexible Scheduling",
    description:
      " Life can be unpredictable, and sometimes you need a last-minute move. We offer flexible booking – including weekends and short-notice slots – to fit your timeline . Whether you need a quick shift before the weekend or a holiday move, Samana Movers will do our best to accommodate you. ",
    icon: <TimerIcon width={30} height={30} className="b2" />, // Placeholder for a location or local icon
  },
  {
    title: "Seamless, Stress-Free Service",
    description:
      "Our top priority is making your move “smooth, secure, and hasslefree,” just like the UAE’s leading movers . From start to finish, we handle all the logistics and heavy lifting, so you can relax. We cut move time with efficient packing and loading, and we follow up with a final walkthrough to ensure you’re completely satisfied",
    icon: <TruckElectric width={30} height={30} className="b2" />, // Placeholder for a location or local icon
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title:
        "Samana Movers | Trusted Residential Movers in Sharjah, Dubai & UAE",
      desc: "Samana Movers, licensed residential movers in Sharjah since 2018, specialize in apartment & villa relocations across UAE with insured, stress-free service.",
    },
    path: "/about-us",
    image: {
      alt: "About Us - Samana Movers",
      path: "/hero-banner.jpg",
    },
  },
});

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[30px] lg:pb-[30px] bg-white dark:bg-dark md:px-0 px-3">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-evenly -mx-4">
            <div className="w-full px-4 lg:w-6/12 md:order-1 order-2">
              <div className="flex md:flex-row flex-col items-center  sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <div className="w-full rounded-2xl h-72 overflow-hidden bg-gray-200 relative">
                      <Image
                        src={"/hero-banner.jpg"}
                        alt="packing box"
                        fill
                        className="absolute object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="py-3 sm:py-4">
                    <div className="w-full rounded-2xl h-72 overflow-hidden bg-gray-200 relative">
                      <Image
                        src={"/why-choose-us-packing.jpg"}
                        alt="team photo of abu muhammad movers with customer in dubai"
                        fill
                        className="absolute object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <div className="w-full rounded-2xl md:h-[400px] h-72 overflow-hidden bg-gray-200 relative">
                      <Image
                        src={"/courier-working-with-parcels-in-warehouse.jpg"}
                        alt="Team photo of Abu Muhammad Movers with trucks"
                        fill
                        className="absolute object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 md:order-2 order-1">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold b2">
                  About Us
                </span>
                <h1 className="mb-5 text-3xl font-black b1  sm:text-4xl">
                  Your Trusted Sharjah Residential Moving Company
                </h1>
                <p className="mb-5 text-base b-text">
                  Samana Movers is a Sharjah-based residential moving company,
                  established in 2018, specializing in seamless home relocations
                  across the UAE.
                </p>
                <p className="mb-8 text-base b-text">
                  We focus exclusively on apartment and villa moves, ensuring
                  stress-free house shifting in Dubai, smooth moves to villa
                  movers Abu Dhabi addresses, and every relocation in between.
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center b1 rounded-md px-7 b2-bg hover:bg-opacity-90"
                >
                  Get A Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-5xl mx-auto">
        <p className="b-text mt-5 md:text-xl text-lg">
          As one of the region’s reliable residential movers in Sharjah, our
          fully licensed team provides professional service at affordable rates.
        </p>
        <p className="b-text mt-2 md:text-xl text-lg">
          Customers know us as one of the most affordable movers UAE – we offer
          clear, all-inclusive quotes, quality packing materials, and
          comprehensive insurance to protect your belongings.
        </p>
        <p className="b-text mt-2 md:text-xl text-lg">
          Our goal is to make every move safe, efficient and hassle-free, in
          line with best practices of leading UAE moving companies
        </p>
      </section>

      {/* WHO WE ARE */}

      <section className="mt-32 grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-16 items-center md:px-0 px-3">
        <div className="md:pl-16">
          <h2 className="b1 md:text-5xl text-3xl font-black">Who We Are </h2>
          <div className="mt-5 b-text">
            <p>
              Samana Movers was born out of a commitment to help families and
              individuals relocate without worry
            </p>
            <p>
              Founded in Sharjah in 2018 by local relocation experts, our
              company has grown through word-of-mouth referrals and repeat
              business.
            </p>
            <p>
              We are a family-run, customer-first moving service; every member
              of our team is trained, background-checked, and equipped to handle
              your home with care.
            </p>
            <p>
              Our multilingual staff (fluent in English and Arabic) understands
              the UAE’s unique moving regulations and logistics.
            </p>
            <p>
              Our values center on professionalism, reliability, and respect –
              we treat your possessions as if they were our own.
            </p>
            <p>
              As the local movers at Emirates Movers and Packers note, we
              believe “relocation is more than just transporting belongings –
              it’s about ensuring a smooth transition”
            </p>
            <p>
              With Samana Movers, you get a dedicated partner who will plan and
              execute your move meticulously, giving you confidence at every
              step.
            </p>
          </div>
        </div>
        <div className="md:h-[550px] h-96 bg-gray-200 md:ml-16 relative">
          <Image
            src={"/who-we-are-team.jpg"}
            alt="Samana Movers Team Photo with truck"
            fill
            className="absolute object-cover object-center"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
        </div>
      </div>

      {/* Services */}
      <section className="md:px-20 py-16 b1-bg px-3 mt-36  mx-auto">
        <h2 className="md:text-5xl text-3xl b-white font-black">
          Our Services
        </h2>
        <p className="b-white mt-5">
          We offer a full range of home moving services (clickable links in our
          website menu)
        </p>

        <ul className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <li className="p-5 b2-bg b1 flex flex-col gap-y-3">
            <Link href={"/apartment-movers-uae"}>
              <h3 className="text-lg font-medium">Apartment Moves</h3>
            </Link>
            <p className="text-sm">
              {" "}
              Local or inter-emirate relocation for flats and studios, with
              careful packing of fragile items
            </p>
          </li>
          <li className="p-5 b2-bg b1 flex flex-col gap-y-3">
            <Link href={"/villa-movers-in-dubai"}>
              <h3 className="text-lg font-medium">Villa Moves</h3>
            </Link>
            <p className="text-sm">
              Large-scale moves including pool tables, furniture disassembly,
              and estate relocation logistics.
            </p>
          </li>
          <li className="p-5 b2-bg b1 flex flex-col gap-y-3">
            <h3 className="text-lg font-medium">Packing Services</h3>
            <p className="text-sm">
              Full or partial packing using quality boxes, bubble wrap, and
              tape; labeling each box by room.
            </p>
          </li>
          <li className="p-5 b2-bg b1 flex flex-col gap-y-3">
            <h3 className="text-lg font-medium">Furniture Installation</h3>
            <p className="text-sm">
              Safe disassembly of beds, sofas, wardrobes, and precise
              reassembly/ installation at your new home.
            </p>
          </li>
          <li className="p-5 b2-bg b1 flex flex-col gap-y-3">
            <h3 className="text-lg font-medium">Long-Distance Moving</h3>
            <p className="text-sm">
              Inter-emirate relocations across the UAE, including Sharjah–Dubai
              and Sharjah–Abu Dhabi moves, with GPS-tracked transport.
            </p>
          </li>
          <li className="p-5 b2-bg b1 flex flex-col gap-y-3">
            <h3 className="text-lg font-medium">Storage Solutions</h3>
            <p className="text-sm">
              Short-term and long-term secure storage options if you need to
              temporarily hold belongings between moves.
            </p>
          </li>
        </ul>
        <p className="b-white mt-10 max-w-2xl">
          Each service is handled by our trained crews. We use modern trucks and
          professional equipment (dollies, ramps, straps) to ensure safe transit
          for every item.
        </p>
      </section>

      {/* Areas */}

      <section className="flex flex-col lg:flex-row items-center justify-between md:w-11/12 mx-auto mt-36 md:px-0 px-3">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-5xl font-black b1 mb-6">
            Service Areas
          </h2>
          <p className="b-text mb-4">
            Samana Movers proudly serves all major Emirates in the UAE:
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
            {[
              "Movers in Dubai",
              "Movers in Sharjah",
              "Movers in Abu Dhabi",
              "Movers in Ajman",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="b2 w-5 h-5 mt-1" />
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="b-text">
            Whether you’re moving within one emirate or between emirates, our
            expert teams will execute a smooth, secure relocation
          </p>
          <p className="b-text">
            (For example, Khimji Ramdas notes that trusted movers cover “Dubai,
            Abu Dhabi, and Sharjah” – and we do, too .) Just tell us your
            pick-up and drop-off locations, and we’ll take care of the rest
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full  mt-10 lg:mt-0 lg:pl-32">
          <div className="rounded-xl shadow-lg relative md:h-[400px] h-80 overflow-hidden">
            <Image
              src="/service-areas-map.jpg" // Replace with actual path
              alt="UAE Map"
              fill
              className="object-cover object-center absolute"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Case Studies */}

      <section className="mt-32 md:w-11/12 mx-auto md:px-0 px-3">
        <h2 className="md:text-5xl font-black text-3xl b1 text-center">
          Case Studies
        </h2>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-y-10">
          <div>
            <h3 className="text-2xl font-medium">
              Sharjah–Dubai Apartment Move
            </h3>
            <div className="w-full mt-2 h-0.5 b2-bg" />
            <div className="b-text mt-5">
              <p>
                Sharjah–Dubai Apartment Move: A family needed to relocate from a
                3-bedroom apartment in Sharjah to a new flat in Jumeirah, Dubai.{" "}
              </p>
              <p>
                Our team conducted a virtual survey, then on moving day we
                arrived with two large vans and a team of four movers
              </p>
              <p>
                We carefully packed all kitchenware, electronics, and furniture.
                Despite heavy Friday traffic, we completed the 50 km move in one
                day.
              </p>
              <p>
                The client praised our GPS updates and the seamless reassembly
                of furniture – it felt as though we virtually “moved them
                ourselves.”
              </p>
              <p>
                This case highlights our house shifting Dubai expertise, even on
                a tight schedule.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Villa Move to Abu Dhabi</h3>
            <div className="w-full mt-2 h-0.5 b2-bg" />
            <div className="b-text mt-5">
              <p>
                Another client, a couple in Sharjah with two grand pianos,
                needed to move into a villa in Abu Dhabi. We treated this as a
                premium job, using specialized movers and lifting equipment.
              </p>
              <p>
                Our team spent extra time crating the pianos and securing
                chandeliers. We provided an all-inclusive quote that covered
                labor, transportation, and insurance.
              </p>
              <p>
                Over two days, we executed the move perfectly. The homeowners
                appreciated our professionalism and even invited us for tea
                after delivery.
              </p>
              <p>
                This example illustrates how Samana Movers handles high-end
                villa moves in Abu Dhabi with care and precision.
              </p>
              <p>
                This case highlights our house shifting Dubai expertise, even on
                a tight schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}

      <FAQs
        faqs={[
          {
            question: " What areas do you serve?",
            answer: (
              <>
                <p>
                  We serve all major cities in the UAE – Sharjah, Dubai, Abu
                  Dhabi, and Ajman. Whether you live in Dubai Marina or a suburb
                  of Ajman, we cover the entire region with our residential
                  moving services
                </p>
              </>
            ),
          },
          {
            question: "What types of moves do you handle?",
            answer: (
              <>
                <p>
                  Samana Movers specializes in residential relocations. We move
                  homes of all sizes – apartments, villas, and family houses.
                </p>
                <p>
                  We do not provide office or commercial moving. Our services
                  include full packing, loading, transport, unpacking, and
                  furniture setup for any home move.
                </p>
              </>
            ),
          },
          {
            question: "How much notice do I need to give for a move?",
            answer: (
              <>
                <p>
                  Ideally, book your move 2–3 weeks in advance. Industry
                  guidelines suggest that providing at least two weeks’ notice
                  helps ensure team availability and the best scheduling
                </p>
                <p>
                  {" "}
                  However, if you have a sudden need, contact us immediately –
                  we often accommodate short-notice and even same-day moves
                  depending on availability.
                </p>
              </>
            ),
          },
          {
            question: "How is the cost of my move determined?",
            answer: (
              <>
                <p>
                  Moving costs depend on several factors: the distance of the
                  move (local vs. inter-emirate), the volume/ size of your
                  belongings, the services you choose (full packing vs. you
                  packing yourself), and whether you need any extras (like
                  storage or special item handling)
                </p>
                <p>
                  {" "}
                  Peak moving times (month-ends, weekends) can also affect
                  pricing. We’ll give you a customized quote after an estimate,
                  as suggested by UAE relocation experts
                </p>
              </>
            ),
          },
          {
            question: "Are my items insured during the move?",
            answer: (
              <>
                <p>
                  Yes. We use padded moving blankets, straps, and secure
                  packaging to safeguard your items. In addition, we carry
                  goods-in-transit insurance and public liability insurance.
                </p>
                <p>
                  This means if anything unforeseen happens, you’re covered. As
                  one UAE mover explains, this insurance “provides peace of
                  mind” by covering loss or damage
                </p>
              </>
            ),
          },
          {
            question: "Do you provide packing services?",
            answer: (
              <>
                <p>
                  Absolutely. We offer full-service packing to save you time.
                  Our team can professionally pack all your belongings,
                  including fragile glassware and electronics, using
                  high-quality boxes and bubble wrap. If you prefer, we also
                  offer partial packing or just provide materials; it’s up to
                  you.
                </p>
                <p>
                  Either way, we ensure everything is labeled and organized for
                  an easy unpack.
                </p>
              </>
            ),
          },
          {
            question: "Can you move special or bulky items?",
            answer: (
              <>
                <p>
                  Yes. We handle heavy items like pianos, safes, and sectional
                  sofas. Our movers have the tools and training to disassemble
                  large furniture and use lifts or dollies when needed.
                </p>
                <p>
                  We secure bulky items with straps and padding for safe
                  transport . If you have a very large or unusual item, let us
                  know upfront so we can plan appropriately
                </p>
              </>
            ),
          },
          {
            question: "What if I need to move on a weekend or holiday?",
            answer: (
              <>
                <p>
                  We strive to be flexible. Samana Movers can schedule moves on
                  Saturdays or Sundays, and even on UAE public holidays when the
                  team is available
                </p>
                <p>
                  Please keep in mind that holiday moves may sometimes incur a
                  small additional charge (as with many services), but we’ll
                  always clarify that in advance.
                </p>
              </>
            ),
          },
          {
            question:
              "Why should I hire professional movers instead of doing it myself?",
            answer: (
              <>
                <p>
                  Moving yourself often seems cheaper, but it can lead to hidden
                  costs and hassles – renting a truck, buying packing supplies,
                  and risking injury or damage.
                </p>
                <p>
                  Professional movers like Samana Movers have trained teams to
                  work efficiently. As one moving company notes, DIY moves can
                  become time-consuming and stressful, whereas experienced
                  movers ensure a smooth, efficient relocation.
                </p>
                <p>Your back (and belongings) will thank you!</p>
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
            At Samana Movers, we turn the stress of moving into a smooth,
            manageable experience. If you’re planning a home relocation in
            Sharjah, Dubai, Abu Dhabi, or Ajman, call or WhatsApp us now for a
            free moving quote.
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
    </>
  );
};

export default About1;
