import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Local Movers in Dubai | Apartment & Villa Movers",
      desc: "Looking for reliable local movers in Dubai? Samana Movers offers licensed, insured apartment & villa moves, transparent pricing, free quotes & same-day availability. Get an instant estimate.",
    },
    path: "/local-movers-in-dubai",
    image: {
      path: "/local/Our-Local-Moving-Services.jpg",
      alt: "Local Moving Services in Dubai",
    },
  },
});
import imageSrc from "../../../../public/local/local-moving-dubai.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceRighSidebar from "@/components/ServiceRighSidebar";
import { Section } from "../apartment-movers-uae/page";
import { Check, CheckCheck, Download } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialsSlider";
import { FAQs } from "@/components/FAQs";

const LocalMoversDubai = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <section className="w-full h-[500px] relative ">
        <Image
          src={imageSrc}
          alt="Local Moving Services For Homes and Villas in Dubai"
          fill
          placeholder="blur"
          loading="eager"
          className="absolute object-cover object-center"
        />
        <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75  md:to-white/25 to-white/50 md:px-20 px-3">
          <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
            Local Movers in Dubai - Movers close to you
          </h1>
          <p className="mt-5 b-text max-w-2xl md:text-lg">
            Looking for local movers in Dubai you can trust? Samana Movers
            offers licensed, insured apartment and villa relocations across
            Dubai with transparent pricing and free, instant quotes.
          </p>
          <p className="mt-1 b-text max-w-2xl md:text-lg">
            As residential moving specialists, we ensure a seamless, stress-free
            move whether you are relocating to a high-rise in the Marina or a
            villa in Arabian Ranches.
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
          <Section title="Why Choose Us?">
            <p className="b-text">
              We combine local expertise with a commitment to five-star service.
              Our goal is to make your next move your easiest one yet.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-10">
              {[
                {
                  h: "Residential Moving Specialists (Apartments & Villas)",
                  d: "We are not just a moving company; we are specialists in residential relocations. \n We understand the unique challenges of moving in Dubai, from navigating tight apartment corridors and booking service elevators to carefully handling delicate items in large villas. \n Our experience means we anticipate challenges before they happen, ensuring your belongings are moved safely and efficiently.",
                },
                {
                  h: "Licensed, Insured & Trained Crews",
                  d: "Your peace of mind is our priority. Samana Movers is a fully licensed and insured moving company in Dubai. \n Our crews are not temporary laborers; they are full-time, professionally trained employees who excel in packing, handling, and transporting your valuables. \n We are proud to be one of the most trusted moving services in Dubai.",
                },
                {
                  h: "Fast, Reliable Scheduling (Same Day / Weekends / Flexible)",
                  d: "Need to move quickly? We offer flexible scheduling, including same-day and weekend moves, to fit your busy life. \n Our modern fleet of moving trucks is GPS-tracked, so you always know the status of your move. For reliable movers in Dubai who respect your time, look no further than Samana.",
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
                src={"/local/Our-Local-Moving-Services.jpg"}
                alt="Samana Movers local moving services in Dubai"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="h-96 relative">
              <Image
                src={"/apartment/moving-truck-uae.jpg"}
                alt="Samana Movers moving truck in Dubai for apartment movers"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </div>
          <Section id="Local Moving Services" title="Our Local Moving Services">
            <p className="b-text">
              Our local movers in Dubai handle every aspect of your relocation
              with professionalism and care. We offer a comprehensive range of
              services tailored to your specific needs.
            </p>
            <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Apartment Movers in Dubai",
                  desc: "We specialize in high-rise moves, managing everything from secure packing for tight spaces to coordinating with building management for elevator bookings and permits.",
                },
                {
                  title: "Villa Movers & Packers Dubai",
                  desc: "Our teams are equipped to handle large-scale villa moves, including the disassembly and reassembly of oversized furniture, chandeliers, and even pool tables.",
                },
                {
                  title: "Furniture Moving & Installation",
                  desc: "We don’t just move your furniture; we care for it. Our service includes professional disassembly and reassembly of beds, wardrobes, desks, and more, ensuring everything is set up perfectly in your new home.",
                },
                {
                  title: "Full Packing & Unpacking Services",
                  desc: "Save time and protect your belongings with our complete packing and unpacking services. We use high-quality materials and specialized techniques for fragile items like glassware, art, and electronics.",
                },

                {
                  title: "Flexible Scheduling & Affordable Rates",
                  desc: "Early mornings, evenings, or weekends — we work around your timeline and budget.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className=" border border-gray-200 bg-white p-6 "
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl b2-bg b1">
                    <CheckCheck />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {f.desc}
                  </p>
                  <Button
                    callBtn
                    variant={"link"}
                    className="mt-2 px-0 underline"
                  >
                    Call For {f.title}
                  </Button>
                </div>
              ))}
            </div>
          </Section>
          <div className="h-96 relative w-full py-10">
            <Image
              src={"/local/Main-Hero-Image.jpg"}
              alt="Samana Movers team stand with moving truck in Dubai"
              fill
              className="absolute object-cover object-center"
            />
          </div>
          <Section
            id="pricing"
            title="How Much Do Local Movers in Dubai Cost? (Transparent Pricing Guide)"
          >
            <p className="b-text">
              We believe in upfront, transparent pricing with no hidden fees.
            </p>
            <p className="b-text">
              The final cost of your move depends on factors like the volume of
              your belongings (home size), the distance between locations, floor
              levels, and any additional services like full packing or furniture
              installation.
            </p>
            <div className="relative overflow-x-auto mt-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Home Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Estimated Price Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Studio / 1BR Apartment
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      AED 800 – AED 1,500
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      2–3 BR Apartment
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      AED 1,600 – AED 3,000
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Villa (3–4 BR)
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      AED 3,200 – AED 5,500+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <i className="mt-5 b-text block">
              (Note: These are estimates. Prices may vary based on specific
              requirements.)
            </i>
          </Section>
          <Section
            id="dubai-moving-checklist"
            title="Dubai Moving Checklist & City-Specific Tips"
          >
            {" "}
            <p className="b-text">
              Moving in Dubai has its own set of rules. We help you navigate the
              local logistics with ease.
            </p>{" "}
            <div className="mt-10 b-text">
              <h3 className="font-medium text-xl">Pre-Move Checklist</h3>
              <p className="b-text mt-2">
                Stay organized and stress-free with our comprehensive checklist.
                It covers everything you need to do from four weeks out to
                moving day itself.
              </p>
              <Link href={"/moving-in-dubai-checklist.pdf"} target="_blank">
                <Button className="mt-2" variant="outline">
                  <Download /> Download Your Free Dubai Moving Checklist
                </Button>
              </Link>
              <h3 className="font-medium text-xl mt-5">
                High-Rise Moves: Elevator Reservations & Building Rules
              </h3>
              <p className="b-text mt-2">
                Most residential towers in communities like Dubai Marina, JLT,
                and Downtown require you to book a service elevator and obtain a
                move-in/move-out permit. We can guide you through the process or
                handle the coordination with your building management directly.
              </p>
              <h3 className="font-medium text-xl mt-5">
                Villa Moves: Gate/Parking Coordination
              </h3>
              <p className="b-text mt-2">
                For moves in gated communities like Arabian Ranches or Emirates
                Hills, we coordinate gate access passes for our trucks and crew.
                We also plan for parking and safe lifting of large items to
                avoid any disruption.
              </p>
              <h3 className="font-medium text-xl mt-5">
                Best Times to Move in Dubai
              </h3>
              <p className="b-text mt-2">
                To avoid traffic and heat, we recommend scheduling your move for
                early mornings. We are fully operational during weekends and can
                advise on the best time windows during Ramadan to ensure a
                smooth process. As one of the top Dubai relocation companies, we
                plan for success.
              </p>
            </div>
          </Section>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-96 relative border">
              <Image
                src={"/local/Apartment-Moving-Service.jpg"}
                alt="Samana Movers apartment moving service in Dubai"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="h-96 relative">
              <Image
                src={"/local/Moving-Day-Process.jpg"}
                alt="moving day work of samana movers"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </div>
          <Section
            id="local-moving-process"
            title="What to Expect on Moving Day"
          >
            <p className="b-text">
              We follow a proven process to ensure your move is executed
              flawlessly from start to finish
            </p>
            <h3 className="font-medium text-xl mt-5 b-text">
              Our 3-Step Process: Survey → Pack & Load → Deliver & Setup
            </h3>

            <ol className="grid list-decimal mt-10 gap-6 pl-5 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  t: "Survey & Plan",
                  d: "We conduct a quick assessment of your items to finalize the plan. ",
                },
                {
                  t: "Pack & Load",
                  d: "Our crew carefully packs, wraps, and loads everything onto our secure truck",
                },
                {
                  t: "Deliver & Setup",
                  d: "We transport your belongings to your new home, unload, and reassemble furniture exactly where you want it.",
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
          </Section>
        </div>

        <ServiceRighSidebar service="Local Movers" />
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
                  name: "Aisha Al Futtaim",
                  role: "Villa Relocation, Arabian Ranches",
                  image: "https://i.pravatar.cc/100?img=1",
                  rating: 5,
                  feedback:
                    "Samana Movers are the best villa movers and packers in Dubai, without a doubt. They handled our large furniture and fragile items with incredible care. The team was professional, efficient, and the final price was exactly as quoted. A truly stress-free experience.",
                },
                {
                  id: 2,
                  name: "David Chen",
                  role: "2BR Apartment Move, Dubai Marina",
                  image: "https://i.pravatar.cc/100?img=2",
                  rating: 5,
                  feedback:
                    "I needed reliable apartment movers in Dubai for my high-rise move and Samana delivered. They managed the elevator booking and building permits seamlessly. The crew was punctual and so quick with the packing and setup. Highly recommended for any apartment move.",
                },
                {
                  id: 3,
                  name: "Fatima Khan",
                  role: "Family Move to Jumeirah",
                  image: "https://i.pravatar.cc/100?img=3",
                  rating: 5,
                  feedback:
                    "Finding trusted moving services in Dubai can be hard, but Samana Movers exceeded our expectations. Being fully licensed and insured gave us peace of mind. The crew was respectful and hardworking. A five-star service from start to finish.",
                },
                {
                  id: 4,
                  name: "Rajesh Kumar",
                  role: "Full Packing Service for 3BR Home",
                  image: "https://i.pravatar.cc/100?img=4",
                  rating: 5,
                  feedback:
                    "We opted for their full moving and packing services in Dubai, and it was worth every dirham. They saved us so much time and energy. Everything was packed securely, and not a single item was damaged. Their attention to detail with fragile items was impressive.",
                },
                {
                  id: 5,
                  name: "Ben Carter",
                  role: "Moved Large Furniture Items",
                  image: "https://i.pravatar.cc/100?img=5",
                  rating: 5,
                  feedback:
                    "I hired Samana as furniture movers in Dubai to relocate a large sofa and a heavy wardrobe. They handled the disassembly and reassembly perfectly. The team was strong, careful, and knew exactly what they were doing. Excellent and affordable service.",
                },
                {
                  id: 6,
                  name: "Sophie Dubois",
                  role: "Urgent Same-Day Move",
                  image: "https://i.pravatar.cc/100?img=6",
                  rating: 5,
                  feedback:
                    "I was in a real bind and needed a same-day move. Samana Movers was a lifesaver! They were incredibly responsive and managed to schedule my move within hours. Fast, efficient, and very professional. Can't thank them enough!",
                },
                {
                  id: 7,
                  name: "Ahmed Mansoor",
                  role: "Office Relocation, Downtown Dubai",
                  image: "https://i.pravatar.cc/100?img=7",
                  rating: 5,
                  feedback:
                    "We used Samana for our office relocation services in Dubai. Their team was organized and worked efficiently to minimize our business downtime. They handled all our IT equipment and office furniture with care. A very reliable partner for commercial moves.",
                },
                {
                  id: 8,
                  name: "Maria Garcia",
                  role: "First-time Mover in Dubai",
                  image: "https://i.pravatar.cc/100?img=8",
                  rating: 5,
                  feedback:
                    "As a first-timer, I was nervous about hidden costs. The transparent pricing guide on their website was a huge help, and the instant quote was accurate. Samana Movers are honest and reliable movers in Dubai that I would recommend to anyone.",
                },
                {
                  id: 9,
                  name: "Hassan Ibrahim",
                  role: "Relocated from Dubai to Abu Dhabi",
                  image: "https://i.pravatar.cc/100?img=9",
                  rating: 5,
                  feedback:
                    "The long-distance move to Abu Dhabi was handled flawlessly. The truck was modern, and the team ensured everything was secure for the journey. Communication was excellent throughout the process. A top-tier moving service for inter-emirate relocations.",
                },
                {
                  id: 10,
                  name: "Laura Wilson",
                  role: "Studio Apartment Move, JLT",
                  image: "https://i.pravatar.cc/100?img=10",
                  rating: 5,
                  feedback:
                    "For anyone looking for professional local movers in Dubai, I highly recommend Samana. From the easy booking process to the final item being placed in my new studio, the entire experience was smooth and hassle-free. The team was friendly and very efficient.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <FAQs
        faqs={[
          {
            question: "Are my items insured during the move?",
            answer: (
              <>
                <p>
                  Yes, your peace of mind is our top priority. All our moves are
                  protected by Goods-in-Transit insurance. This policy provides
                  comprehensive coverage for your items from the moment they are
                  in our care until they are safely delivered and placed in your
                  new home.
                </p>
              </>
            ),
          },
          {
            question: "Do you handle elevator bookings and permits?",
            answer: (
              <>
                <p>
                  Absolutely. We have extensive experience working with building
                  management across Dubai. Our team can guide you through the
                  process of securing necessary move-in and move-out permits and
                  booking service elevators to ensure a smooth and hassle-free
                  relocation.
                </p>
              </>
            ),
          },
          {
            question: "Can you move during weekends or Ramadan?",
            answer: (
              <>
                <p>
                  Yes, we operate 7 days a week, including Fridays and
                  Saturdays, to accommodate your schedule. We also provide our
                  services during Ramadan, with adjusted timings to comply with
                  local regulations and ensure a seamless and respectful moving
                  process.
                </p>
              </>
            ),
          },
          {
            question: "What items can’t be moved?",
            answer: (
              <>
                <p>
                  For safety and legal reasons, we cannot transport hazardous
                  materials such as propane tanks, chemicals, and paints. We
                  also do not move flammable items or perishable foods. If you
                  have any questions about specific items, please feel free to
                  contact us for a complete list of prohibited goods.
                </p>
              </>
            ),
          },
          {
            question: "How do you calculate the moving estimate?",
            answer: (
              <>
                <p>
                  Our moving estimate is calculated based on several key
                  factors: the total volume of your belongings (which is
                  determined by your home size and a detailed item list), the
                  number of movers and the truck size required, the distance of
                  the move, and any extra services you choose, like full
                  packing, unpacking, or storage.
                </p>
              </>
            ),
          },
        ]}
      />
      <section className="mt-32 b1-bg md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
        <div>
          <h2 className="md:text-4xl text-3xl font-black b-white">
            Get Your Free, Instant Moving Quote
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

export default LocalMoversDubai;
