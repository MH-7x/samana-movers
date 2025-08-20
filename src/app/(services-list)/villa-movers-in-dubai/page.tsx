import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { Check, CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PricingCard, Section } from "../apartment-movers-uae/page";
import TestimonialSlider from "@/components/TestimonialsSlider";
import { FAQs } from "@/components/FAQs";
import ServiceRighSidebar from "@/components/ServiceRighSidebar";

import imageSrc from "../../../../public/villa/hero-samana-movers-team.jpg";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Villa Movers in Dubai | Luxury & Affordable Moving Services",
      desc: "Samana Movers — professional villa movers in Dubai. Full-service packing, secure transport, storage & licensed team. Get a free villa movers quote today.",
    },
    path: "/villa-movers-in-dubai",
    image: {
      path: "/apartment/apartment-movers-in-uae.jpg",
      alt: "Apartment Movers in UAE",
    },
  },
});

const VillaMoversDubai = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <section className="w-full h-[500px] relative ">
        <Image
          src={imageSrc}
          alt="Samana Movers team outside Dubai villa"
          fill
          placeholder="blur"
          loading="eager"
          className="absolute object-cover object-center"
        />
        <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75  md:to-white/25 to-white/50 md:px-20 px-3">
          <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
            Villa Movers in Dubai – Samana Movers
          </h1>
          <p className="mt-5 b-text max-w-2xl md:text-lg">
            Moving a villa in Dubai requires expertise, care, and reliable
            service. Samana Movers is a trusted moving company specializing in
            villa movers in Dubai.
          </p>
          <p className="mt-1 b-text max-w-2xl md:text-lg">
            Our skilled team provides full-service villa relocation for luxury
            homes and budget residences alike. We use high-quality packing
            materials and advanced equipment to protect your valuables every
            step of the way
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

      <section className="grid md:grid-cols-3 grid-cols-1 gap-7 items-start mt-32 md:px-0 px-3 md:w-11/12 mx-auto">
        <div className="md:col-span-2 col-span-1 b-text">
          <Section id="content">
            <p className="md:text-lg text-base b-text">
              Whether you’re moving within Dubai or to another emirate, Samana
              Movers makes the process smooth and stress-free. In the first 100
              words, we’ve highlighted our core offering and main keyword to
              meet SEO best practices while setting the stage for a detailed
              service overview
            </p>
          </Section>

          <Section id="why-choose-us" title="Why Choose Samana Movers?">
            <p className=" b-text">
              {" "}
              Choosing the right moving company is critical for a hassle-free
              villa relocation. Samana Movers stands out for its
              professionalism, experience, and customer focus. Here are key
              reasons Dubai villa owners trust us
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-10">
              {[
                {
                  h: "Experienced Professionals",
                  d: "Our moving crew is trained and experienced. With thousands of successful moves completed , our team handles every detail—from careful packing to secure transport. We specialize in villas, so we understand the unique challenges of large homes. ",
                },
                {
                  h: "Tailored Villa Relocation Plans",
                  d: "Every villa is different. We offer customized relocation packages to suit your needs . For example, luxury villa owners may need special care for antiques or art, while budget customers prefer cost-effective efficiency. We adapt our services accordingly. Bundled services (packing, transport, unloading) often save you money",
                },
                {
                  h: "Premium Packing & Equipment",
                  d: "We use high-quality, durable packing materials and the latest moving tools . This ensures fragile items like glassware and artwork are fully protected. Our modern moving trucks and equipment allow safe handling of heavy furniture and sensitive items.",
                },
                {
                  h: "Transparent Pricing",
                  d: "Samana Movers provides clear, upfront pricing. You’ll receive a detailed moving quote with no hidden fees . We compare multiple quotes to find affordable villa movers in Dubai without compromising quality . Our transparent pricing policy means you can budget your move confidently",
                },
                {
                  h: "High Customer Satisfaction",
                  d: "Our dedication to service has earned us praise. Clients appreciate our punctuality, professionalism, and friendly approach. We manage every move meticulously to ensure customer satisfaction",
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
            <p className="b-text mt-10">
              By focusing on experience, customization, and care, Samana Movers
              delivers a stress-free villa moving experience
            </p>
            <p className="b-text mt-1">
              As one of the leading villa movers in Dubai, we blend luxury
              service with affordable options to meet a wide range of customer
              needs
            </p>
          </Section>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-96 relative border">
              <Image
                src={"/villa/branded-moving-truck-dubai.jpg"}
                alt="Samana Movers truck Dubai street"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="h-96 relative">
              <Image
                src={"/villa/luxury-item-handling.jpg"}
                alt="Luxury villa movers handling piano"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </div>
          <Section id="villa-moving-services" title="Our Villa Moving Services">
            <div className="max-w-3xl text-gray-600">
              Samana Movers offers comprehensive services to cover every aspect
              of your villa relocation. Whether you need a full-service move or
              help with specific tasks, we have you covered:s
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Professional Packing & Unpacking",
                  desc: (
                    <>
                      <p>
                        We handle all packing work for you. Our team provides
                        sturdy boxes, bubble wrap, and specialty crates for
                        valuables
                      </p>
                      <p>
                        Fragile items (china, electronics, artwork) get special
                        attention with extra cushioning . Upon arrival, we also
                        offer unpacking and placement of items in your new villa
                      </p>
                    </>
                  ),
                },
                {
                  title: "Furniture & Appliance Handling",
                  desc: (
                    <>
                      <p>
                        Large items like sofas, beds, and appliances require
                        skill. Our movers are trained to disassemble, lift, and
                        reassemble furniture safely.
                      </p>
                      <p>
                        We use proper lifting techniques and equipment (dollies,
                        ramps, padding) to protect your home and belongings
                        during loading and unloading.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Secure Transportation",
                  desc: (
                    <>
                      <p>
                        We use modern, fully-equipped trucks for all moves. Each
                        truck is clean, air-ride equipped (to reduce vibration),
                        and tailored for moving vans.
                      </p>
                      <p>
                        Your items are tied down and secured for the journey. We
                        track the move schedule to ensure timely, safe delivery
                      </p>
                    </>
                  ),
                },
                {
                  title: "Complete Villa Moving Package",
                  desc: (
                    <>
                      <p>
                        Our standard villa moving package includes all major
                        services: packing, loading, transport, unloading,
                        unpacking, and basic setup.
                      </p>
                      <p>
                        You can also add extras such as furniture assembly or
                        appliance installation. For example, we can reconnect
                        appliances or help arrange furniture in the new villa
                        (subject to instructions).
                      </p>
                    </>
                  ),
                },
                {
                  title: "Specialty Services",
                  desc: (
                    <>
                      <p>
                        We understand luxury villas may have unique items. We
                        offer specialized moving for pianos, fine art, antiques,
                        and other high-value items.
                      </p>
                      <p>
                        Our team is equipped to move grand pianos or safely pack
                        artwork. We can also provide climate-controlled trucks
                        for sensitive moves.
                      </p>
                    </>
                  ),
                },
              ].map((it) => (
                <li
                  key={it.title}
                  className="border border-gray-200 bg-white p-6"
                >
                  <div className="w-14 h-14 b2-bg rounded-full flex items-center justify-center mb-4">
                    <CheckCheck />
                  </div>
                  <h3 className="b1 font-black text-xl">{it.title}</h3>

                  <div className="b-text text-sm mt-3 ">{it.desc}</div>
                </li>
              ))}
            </ul>
          </Section>
          <div className="h-96 relative w-full py-10">
            <Image
              src={"/villa/before-and-after-moving.jpg"}
              alt="before and after moving image of villa"
              fill
              className="absolute object-cover object-center"
            />
          </div>
          <Section id="areas" title="Service Areas">
            <p className="b-text">
              Samana Movers serves Dubai and beyond. Our main focus is on villa
              relocations within Dubai, but we also cover neighboring emirates
              for all your moving needs. Key service locations include:
            </p>
            <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
              <ul className="list-disc list-inside text-sm">
                <li>
                  <strong>Dubai Regions: </strong>{" "}
                  <p>
                    Dubai Marina, Palm Jumeirah, Arabian Ranches, Emirates
                    Hills, Jumeirah Village Circle (JVC), Mirdif, Al Barsha,
                    Downtown Dubai, and more. We are familiar with moving in all
                    areas of Dubai city.{" "}
                  </p>
                </li>
                <li>
                  <strong>Suburban Areas: </strong>{" "}
                  <p>
                    Arabian Ranches, Hatta, Al Qusais, Jumeirah Lakes Towers
                    (JLT), Silicon Oasis, and others—no location is too remote
                    or challenging.
                  </p>
                </li>
                <li>
                  <strong>Neighboring Emirates: </strong>{" "}
                  <p>
                    Need to move from or to Sharjah, Abu Dhabi, Ajman, or
                    Fujairah? We coordinate inter-emirate moves seamlessly. Our
                    contacts across the UAE allow one-call relocation anywhere
                    in the country.
                  </p>
                </li>
              </ul>

              <div className="h-96 relative">
                <Image
                  src={"/villa/packing-villa-living-room.jpg"}
                  alt="Villa packing fragile items Dubai"
                  fill
                  className="absolute object-cover object-center"
                />
              </div>
            </div>
          </Section>
          <Section id="villa-moving-process" title="How It Works">
            <ol className="grid list-decimal gap-6 pl-5 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  t: "Free Consultation & Quote",
                  d: "Contact us via phone or online form. We’ll discuss your needs and set up a free on-site survey or virtual inventory check. After assessing your villa’s size and items, we provide a detailed, no-obligation quote.  ",
                },
                {
                  t: "Customized Moving Plan",
                  d: "Once you confirm, we finalize the move plan. This includes scheduling, assigning crew, and listing packing materials needed. We’ll guide you on preparation tips—such as sorting items or labeling boxes—to streamline packing. ",
                },
                {
                  t: "Packing Day",
                  d: "On the agreed date, our team arrives at your villa to pack your belongings securely. We protect floors and walls while moving large items. Labeling ensures all boxes are organized by room. You remain in control of special items and instructions.  ",
                },
                {
                  t: "Transport Day",
                  d: "Your packed villa is loaded into our trucks. We double-check inventories and drive your goods to the new villa. If moving long-distance or during peak traffic, we plan the best routes to avoid delays.  ",
                },
                {
                  t: "Unpacking & Setup",
                  d: "Upon arrival, we unload your belongings carefully. We then unpack boxes, assemble furniture, and place items as instructed. We take care to handle your home’s interiors with respect (using shoe covers, protective coverings, etc.). ",
                },
                {
                  t: "Final Walkthrough & Feedback",
                  d: "We conduct a final inspection with you. Together we check that everything is delivered and set up correctly. You approve the job completion. Our job isn’t done until you’re 100% satisfied.",
                },
              ].map((step, i) => (
                <li key={i} className=" border border-gray-200 bg-white p-6 ">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide b2">
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
            <p className="b-text mt-5">
              Throughout the process, Samana Movers keeps communication clear
              and provides support. We answer questions, coordinate logistics,
              and adjust plans as needed. This step-by-step approach ensures a
              hassle-free villa moving experience. In short, our professional
              moving team acts like an extension of your own, so you can relax
              while we do the heavy lifting.
            </p>
          </Section>
          <Section id="Pricing" title="Villa Moving Prices in Dubai">
            <p className="b-text">
              Understanding the cost of moving helps you plan your budget. Villa
              moving costs in Dubai vary by size, distance, and services. Based
              on industry data, here are approximate price ranges for villa
              moves in Dubai
            </p>

            <div className="relative overflow-x-auto mt-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Villa Size (Bedrooms)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Estimated Cost (AED)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      3-Bedroom Villa (medium)
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      4,000 – 5,000 AED
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      4-Bedroom Villa (large)
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      5,000 – 6,000 AED
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      5-Bedroom Villa (extra-large)
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      6,000 – 7,000 AED
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      6-Bedroom Villa (spacious)
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      7,000 – 8,000 AED
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-10 b-text">
              These ranges include a full-service move with packing, loading,
              transportation, and unpacking . For villas larger than six
              bedrooms, add about 1,000 AED per extra bedroom.
            </p>
            <p className="mt-1 b-text">
              For example, a 7-bedroom villa might cost 8,000–9,000 AED . Final
              prices depend on your exact inventory and requirements.
            </p>
            <p className="mt-1 b-text">
              We can provide a precise quote after a quick survey. To save on
              costs, consider bundling services. As noted by ServiceMarket,
              bundled moving packages significantly reduce the total cost
              compared to paying for each service separately.
            </p>
            <p className="mt-1 b-text">
              Let us know your needs (e.g. flat-rate move, hourly move) and
              we’ll suggest the best pricing option. Remember: booking well in
              advance and decluttering (selling or donating items) can help you
              save
            </p>
          </Section>
          <Section id="packages" title="Villa Moving Packages">
            <div className="max-w-3xl text-gray-600">
              We believe in clear, upfront pricing so there are no surprises on
              moving day. Our local moving packages start at just{" "}
              <strong>AED 700</strong>, tailored to your home&lsquo;s size and
              requirements.
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <PricingCard
                title="Economy"
                range="Silver Package"
                features={[
                  "Basic villa moving service",
                  "Essential packing, transport, and unpacking included",
                  "Ideal for cost-conscious customers needing only core services",
                ]}
              />
              <PricingCard
                title="Standard"
                range="Gold  Package"
                features={[
                  "Most popular option",
                  "Includes extra packing materials",
                  "Careful handling of fragile items",
                  "Priority scheduling for your move",
                  "Suitable for typical 3–5 bedroom villas",
                ]}
                highlight
              />
              <PricingCard
                title="Premium"
                range="Platinum Package"
                features={[
                  "Premium service for luxury villas",
                  "Full packing and moving service",
                  "Two hours of free furniture assembly",
                  "Professional cleaning of old or new villa",
                  "Complimentary insurance for valuables",
                  "Perfect for high-end moves needing extra care",
                ]}
              />
            </div>
            <p className="mt-6  text-gray-600">
              <strong>Special Offers:</strong> We run seasonal promotions and
              group discounts. For example, off-peak season moves may get 10%
              off, or we might include bonus services (like free bubble-wrap
              packing) for early bookings.
            </p>
            <p className="mt-1  text-gray-600">
              Corporate clients and property developers also receive tailored
              deals. Always ask our agent about any current deals and discount
              codes when you call.
            </p>
            <p className="mt-1  text-gray-600">
              By packaging services together, Samana Movers ensures you get
              maximum value. As one moving expert notes, opting for
              comprehensive service bundles “makes the process a lot less
              stressful” and can lower costs overall.
            </p>
          </Section>
          <StickyMobileCta />
        </div>
        {/* Right Sidebar */}
        <ServiceRighSidebar service="Villa Movers" />
        {/* Right Sidebar */}
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
            <TestimonialSlider
              reviews={[
                {
                  id: 1,
                  name: "Fred Rodriquez",
                  role: "Moved from Dubai to Sharjah",
                  image: "https://i.pravatar.cc/100?img=1",
                  rating: 5,
                  feedback:
                    "Samana Movers made our villa relocation completely stress-free. The team was punctual, professional, and handled all fragile furniture with extra care. Highly recommended for anyone looking for reliable villa movers in the UAE.",
                },
                {
                  id: 2,
                  name: "Aisha Khan",
                  role: "Moved from Sharjah to Abu Dhabi",
                  image: "https://i.pravatar.cc/100?img=2",
                  rating: 5,
                  feedback:
                    "Moving from a 4-bedroom villa felt overwhelming, but this company made it seamless. From packing to unpacking, everything was organized and efficient. Best villa moving service I’ve used in the UAE.",
                },
                {
                  id: 3,
                  name: "James Peterson",
                  role: "Moved from Dubai to Abu Dhabi",
                  image: "https://i.pravatar.cc/100?img=3",
                  rating: 5,
                  feedback:
                    "I booked the Gold Package for my villa move. The movers were fast, careful, and ensured every box was labeled properly. Their villa moving services are perfect for families relocating across the UAE.",
                },
                {
                  id: 4,
                  name: "Fatima Al Zahra",
                  role: "Moved within Sharjah",
                  image: "https://i.pravatar.cc/100?img=4",
                  rating: 5,
                  feedback:
                    "Our experience with this moving company was excellent. They packed our furniture, fragile décor, and kitchen items with great care. If you need trusted villa movers in Sharjah or Dubai, this is the team to hire.",
                },
                {
                  id: 5,
                  name: "Michael Davis",
                  role: "Moved from Dubai Marina to Palm Jumeirah",
                  image: "https://i.pravatar.cc/100?img=5",
                  rating: 5,
                  feedback:
                    "Professional villa movers who really know their job. They dismantled and reassembled our furniture perfectly and delivered everything on time. Great choice for premium villa moving in Dubai.",
                },
                {
                  id: 6,
                  name: "Sara Ahmed",
                  role: "Moved from Dubai to Sharjah",
                  image: "https://i.pravatar.cc/100?img=6",
                  rating: 5,
                  feedback:
                    "We had a smooth villa relocation. The movers provided excellent packing materials and even helped with fragile items. Their villa moving service is worth every dirham.",
                },
                {
                  id: 7,
                  name: "John Miller",
                  role: "Moved from Abu Dhabi to Dubai",
                  image: "https://i.pravatar.cc/100?img=7",
                  rating: 5,
                  feedback:
                    "I was worried about moving my luxury villa, but their Platinum Package exceeded expectations. Free furniture assembly and cleaning were a bonus. Best villa movers in UAE for high-end moves.",
                },
                {
                  id: 8,
                  name: "Hina Rauf",
                  role: "Moved from Sharjah to Ras Al Khaimah",
                  image: "https://i.pravatar.cc/100?img=8",
                  rating: 5,
                  feedback:
                    "Super professional and reliable! The movers handled our villa relocation quickly and safely. They made sure every detail was taken care of. I’ll definitely recommend them to friends and family.",
                },
                {
                  id: 9,
                  name: "David Johnson",
                  role: "Moved from Dubai to Al Ain",
                  image: "https://i.pravatar.cc/100?img=9",
                  rating: 5,
                  feedback:
                    "The villa moving team in Dubai was fantastic. They provided priority scheduling and careful handling of all fragile furniture. I was impressed with their efficiency and professionalism.",
                },
                {
                  id: 10,
                  name: "Layla Noor",
                  role: "Moved within Dubai",
                  image: "https://i.pravatar.cc/100?img=10",
                  rating: 5,
                  feedback:
                    "Affordable and stress-free villa movers in Dubai. The crew was polite, packed everything neatly, and even helped us unpack. Highly recommend their moving services in the UAE.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <FAQs
        faqs={[
          {
            question: "How much do villa movers in Dubai cost?",
            answer: (
              <>
                <p>
                  Villa moving costs vary by size and distance. As a guideline,
                  moving a 3-bedroom villa can cost around 4,000–5,000 AED,
                  while a 6-bedroom villa may range 7,000–8,000 AED.
                </p>
                <p>
                  We provide an accurate quote after assessing your inventory.
                  Bundling services often saves money compared to a la carte
                  pricing.
                </p>
              </>
            ),
          },
          {
            question: "Do you provide packing materials?",
            answer: (
              <>
                <p>
                  Yes. Samana Movers supplies all necessary packing supplies
                  (boxes, tape, bubble wrap, etc.) as part of our full-service
                  move.
                </p>
                <p>
                  For custom items, we use specialized crates or padding to
                  ensure maximum protection.
                </p>
              </>
            ),
          },
          {
            question: "Are my belongings insured during the move?",
            answer: (
              <>
                <p>
                  We offer optional insurance coverage on top of our standard
                  liability. This protects your items against loss or damage.
                </p>
                <p>
                  We encourage customers to insure high-value or fragile goods.
                  Rest assured, we handle every item with great care and follow
                  industry best practices.
                </p>
              </>
            ),
          },
          {
            question:
              "What if my villa move involves large or fragile items (e.g. piano, art)?",
            answer: (
              <>
                <p>
                  We have experience with specialty items. For example, moving a
                  grand piano or fine art requires extra care.
                </p>
                <p>
                  Our team uses custom equipment (piano boards, reinforced
                  crates) and follows strict safety protocols. Mention any such
                  items during the quote stage so we can plan appropriately.
                </p>
              </>
            ),
          },
          {
            question: "How far in advance should I book?",
            answer: (
              <>
                <p>
                  To secure your preferred moving date and pricing, we recommend
                  booking at least 2–4 weeks in advance.
                </p>
                <p>
                  If possible, schedule the move before month-end to avoid peak
                  pricing. Early booking often yields better availability and
                  rates.
                </p>
              </>
            ),
          },
          {
            question:
              "Do you move villas within Dubai only, or also between emirates?",
            answer: (
              <>
                <p>
                  We primarily focus on moves within Dubai, but we also handle
                  inter-emirate relocations.
                </p>
                <p>
                  Many of our clients move between Dubai and Sharjah, Ajman, or
                  Abu Dhabi. We coordinate permit requirements and customs (if
                  any), ensuring a smooth move across the UAE.
                </p>
              </>
            ),
          },
        ]}
      />
      <section className="mt-32 b1-bg md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
        <div>
          <h2 className="md:text-4xl text-3xl font-black b-white">
            Contact Samana Movers – Your Villa Moving Partner
          </h2>
          <p className="b-white mt-4">
            Are you ready for a stress-free villa move? Contact Samana Movers
            today for a free consultation and quote. As the premier villa movers
            in Dubai, we promise friendly service, reliable teams, and complete
            satisfaction. Call us now at +971-XXX-XXXX or fill out our online
            form to get started.
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
  );
};

export default VillaMoversDubai;
