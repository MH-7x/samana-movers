import QuoteForm from "@/components/QuoteForm";
import { services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { AlarmCheck, ArrowRightIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Apartment Movers in UAE  | Starting at 700 AED",
      desc: "rusted apartment movers in UAE — Samana Movers. Licensed, affordable packing, dismantle/rebuild, storage & same-day moves across Dubai, Sharjah & Abu Dhabi. Free quote.",
    },
    path: "/apartment-movers-uae",
    image: {
      path: "/apartment/apartment-movers-in-uae.jpg",
      alt: "Apartment Movers in UAE",
    },
  },
});

const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={"h-5 w-5 " + (className ?? "")}
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 1 0-1.06-1.06l-4.72 4.72-1.69-1.69a.75.75 0 0 0-1.06 1.06l2.22 2.22c.293.293.768.293 1.06 0l5.25-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={"h-5 w-5 " + (className ?? "")}
    aria-hidden
  >
    <path d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.308 2.308a.75.75 0 0 0 .424.212l3.264.472a.75.75 0 0 1 .416 1.279l-2.36 2.301a.75.75 0 0 0-.216.663l.557 3.248a.75.75 0 0 1-1.088.791l-2.916-1.533a.75.75 0 0 0-.698 0l-2.916 1.533a.75.75 0 0 1-1.088-.79l.557-3.25a.75.75 0 0 0-.216-.662L4.068 7.77a.75.75 0 0 1 .416-1.279l3.264-.472a.75.75 0 0 0 .424-.212l2.308-2.308Z" />
  </svg>
);

const Section: React.FC<{
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, title, children, className }) => (
  <section
    id={id}
    className={"mx-auto w-full max-w-7xl  py-12  " + (className ?? "")}
  >
    {title ? (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      </div>
    ) : null}
    {children}
  </section>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700  backdrop-blur">
    {children}
  </span>
);

const PricingCard: React.FC<{
  title: string;
  range: string;
  features: string[];
  highlight?: boolean;
}> = ({ title, range, features, highlight }) => (
  <div
    className={
      "relative flex h-full flex-col  border bg-white p-6  transition hover:shadow-md " +
      (highlight
        ? "border-[#fcd200]/40 ring-1 ring-[#fcd200]/30"
        : "border-gray-200")
    }
  >
    {highlight && (
      <div className="absolute -top-3 right-4">
        <span className="rounded-full b1-bg px-3 py-1 text-xs font-semibold text-white shadow">
          Popular
        </span>
      </div>
    )}
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
      {range}
    </p>
    <ul className="mt-4 space-y-2 text-sm text-gray-600">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className="mt-0.5 b1" /> <span>{f}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <a
        href="/contact-us"
        className="inline-flex w-full items-center justify-center rounded-xl b1-bg px-4 py-2.5 text-sm font-semibold text-white  transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Get free quote
      </a>
    </div>
  </div>
);

const FAQ: React.FC<{ q: string; a: string }> = ({ q, a }) => (
  <details className="group rounded-xl border border-gray-200 bg-white p-4 open:">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <h3 className="text-base font-semibold text-gray-900">{q}</h3>
      <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition group-open:rotate-45">
        +
      </span>
    </summary>
    <p className="mt-3 text-sm leading-6 text-gray-600">{a}</p>
  </details>
);

const ApartmentMoversUAE = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <section className="w-full h-[500px] relative ">
        <Image
          src={"/apartment/apartment-movers-in-uae.jpg"}
          alt="Apartment Movers in UAE"
          fill
          className="absolute object-cover object-center"
        />
        <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75  md:to-white/25 to-white/50 md:px-20 px-3">
          <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
            Apartment Movers in UAE — Fast, Affordable & Trusted
          </h1>
          <p className="mt-5 b-text max-w-2xl md:text-lg">
            Apartment Moving in the UAE should be stress-free and
            budget-friendly. Our professional movers and packers make every
            relocation a breeze with transparent pricing. Whether you’re moving
            a cozy studio apartment or a spacious villa, our experienced team is
            here to help.
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

      <section className="grid md:grid-cols-3 grid-cols-1 gap-7 items-start mt-32 md:px-0 px-3 md:w-11/12 mx-auto min-h-52">
        {/* Main Content */}
        <div className="md:col-span-2 col-span-1 b-text">
          {/* Hero */}
          <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,#fcd200,transparent_100%)]" />
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6  pb-16 pt-20">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Pill>Licensed & Insured</Pill>
                <Pill>Friendly, Professional Crew</Pill>
                <Pill>Whole UAE Coverage</Pill>
              </div>
              <h2 className=" text-3xl font-extrabold tracking-tight sm:text-4xl">
                Affordable Apartment Movers in UAE – Starting at AED 700
              </h2>
              <p className="max-w-3xl  text-base leading-7 text-gray-700 sm:text-lg">
                Moving in the UAE should be simple, affordable, and hassle-free.
                Our expert movers and packers ensure every relocation is
                seamless with clear pricing and reliable service. From a small
                studio to a large villa, our skilled team is ready to make your
                move easy.
              </p>
              <div className="mt-2 max-w-3xl  text text-gray-600">
                From bustling Dubai to Abu Dhabi and beyond, we serve the entire
                UAE. No job is too big or small – residential or commercial, we
                handle moves of all sizes. Our friendly team and attention to
                detail ensure your move is smooth from start to finish.
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  id="quote"
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl b1-bg px-5 py-3 text-sm font-semibold text-white  transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Get a Free Quote
                </a>
                <a
                  href="https://wa.me/971000000000"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900  transition hover:bg-gray-50"
                >
                  Talk to a Specialist
                </a>
              </div>
            </div>
          </section>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-96 relative">
              <Image
                src={"/apartment/apartment-moving-crew.jpg"}
                alt="Samana Movers apartment movers in UAE handling sofa"
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

          {/* Pricing */}
          <Section id="pricing" title="Transparent Pricing for Every Home">
            <div className="max-w-3xl text-gray-600">
              We believe in clear, upfront pricing so there are no surprises on
              moving day. Our local moving packages start at just{" "}
              <strong>AED 700</strong>, tailored to your home&lsquo;s size and
              requirements.
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <PricingCard
                title="Studio Apartment"
                range="AED 700 – AED 1,200"
                features={[
                  "Pro moving crew",
                  "Packing materials",
                  "Careful load & transport",
                ]}
              />
              <PricingCard
                title="1-Bedroom Apartment"
                range="AED 900 – AED 1,500"
                features={[
                  "Dedicated coordinator",
                  "Dismantle & reassemble",
                  "Labeled boxes",
                ]}
                highlight
              />
              <PricingCard
                title="2-Bedroom Apartment"
                range="AED 1,600 – AED 2,500"
                features={[
                  "Extra manpower",
                  "Fragile handling",
                  "Efficient unloading",
                ]}
              />
              <PricingCard
                title="3-Bedroom Apartment"
                range="AED 1,800 – AED 4,500"
                features={[
                  "Full packing",
                  "Furniture protection",
                  "Room-by-room setup",
                ]}
              />
              <PricingCard
                title="Villas"
                range="AED 1,400 – AED 6,000+"
                features={[
                  "Large truck fleet",
                  "Specialty items",
                  "Flexible scheduling",
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-gray-600">
              <strong>Note:</strong> Actual costs may vary based on distance,
              services, and volume. Contact us for a personalized quote to get
              the exact price for your move.
            </p>
          </Section>

          <div className="h-96 relative w-full py-10">
            <Image
              src={"/apartment/packing-services-for-apartment.jpg"}
              alt="Samana Movers packing services for apartment movers in UAE"
              fill
              className="absolute object-cover object-center"
            />
          </div>
          {/* What we offer */}
          <Section title="What We Offer">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Comprehensive Packing & Unpacking",
                  desc: "Strong boxes, bubble wrap, and labels. Fragile items are wrapped carefully and boxes are clearly marked for easy unpacking.",
                },
                {
                  title: "Professional Loading & Transportation",
                  desc: "Moving blankets, straps, and trolleys to load securely onto covered trucks for weather-safe transport.",
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
                  title: "Optional Insurance Coverage",
                  desc: "Protect your goods with our moving insurance options for total peace of mind.",
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

          {/* Process */}
          <Section title="Our Seamless Moving Process">
            <ol className="grid list-decimal gap-6 pl-5 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  t: "Free Estimate",
                  d: "Tell us about your move — size, rooms, items, and dates. Get a detailed, no-obligation quote.",
                },
                {
                  t: "Personalized Planning",
                  d: "We lock in the schedule and prepare a checklist, including elevator reservations when needed.",
                },
                {
                  t: "Packing Day",
                  d: "Our packers arrive on time, wrap and box belongings, label everything, and load in an organized way.",
                },
                {
                  t: "Safe Transportation",
                  d: "Covered trucks and experienced drivers ensure punctual delivery across any emirate.",
                },
                {
                  t: "Unpacking & Setup",
                  d: "We unload, place furniture, and can unpack boxes and help with minor setup tasks.",
                },
                {
                  t: "Final Walkthrough",
                  d: "We confirm every box is delivered, furniture is assembled, and you’re fully satisfied.",
                },
              ].map((step, i) => (
                <li key={i} className=" border border-gray-200 bg-white p-6 ">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
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
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-96 relative">
              <Image
                src={"/apartment/packing-services.jpg"}
                alt="Samana Movers packing services for apartment movers in UAE"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="h-96 relative">
              <Image
                src={"/apartment/samana-movers-truck.jpg"}
                alt="Samana Movers truck for apartment movers in UAE"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </div>
          {/* Why choose us */}
          <Section title="Why Choose Us?">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  h: "Experienced & Friendly Team",
                  d: "Trained movers who treat your belongings with respect.",
                },
                {
                  h: "Customer Satisfaction",
                  d: "A track record of happy customers and high ratings.",
                },
                {
                  h: "Punctual & Reliable",
                  d: "We stick to schedule and keep your move on track.",
                },
                {
                  h: "Transparent Communication",
                  d: "Clear updates from first call to final drop-off.",
                },
                {
                  h: "Dedicated Move Coordinator",
                  d: "One point of contact for every detail of your move.",
                },
                {
                  h: "Fully Equipped & Insured",
                  d: "Blankets, dollies, straps, and covered trucks. Insurance options available.",
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

          {/* Testimonials */}
          <Section title="What Customers Say">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sara Al-Hashimi",
                  city: "Dubai",
                  quote:
                    "Choosing Samana Movers as my apartment movers in UAE was the best decision ever. They showed up on time, wrapped my delicate glass items perfectly, and navigated our high-rise building’s tight service elevator like pros!",
                },
                {
                  name: "Faisal Khan",
                  city: "Sharjah",
                  quote:
                    "Samana Movers are truly affordable apartment movers UAE. From packing to unpacking, they made my 2BR flat relocation a breeze—quick, efficient, and great value.",
                },
                {
                  name: "Dina Al-Amiri",
                  city: "Abu Dhabi",
                  quote:
                    "I’ve tried several movers before, but Samana Movers stand out as professional apartment packers and movers UAE. They handled delays in building access without stress and delivered everything intact.",
                },
                {
                  name: "Omar Javed",
                  city: "Ajman",
                  quote:
                    "Absolutely impressed with Samana Movers. Uniformed team, solid packing, furniture reassembly—they made moving effortless. Definitely reliable apartment relocation UAE specialists.",
                },
                {
                  name: "Leena Nabil",
                  city: "Al Ain",
                  quote:
                    "I needed a last-minute move for my 1BR apartment and Samana Movers came through with same-day apartment movers UAE service. Super responsive, fair pricing, and totally stress-free!",
                },
                {
                  name: "Ahmed Saeed",
                  city: "Dubai",
                  quote:
                    "Their attention to detail is top-notch. Samana Movers placed my heavy items and electronics exactly where I wanted with care—true experts in apartment movers near me UAE.",
                },
                {
                  name: "Noor Rizvi",
                  city: "Al Ruwais",
                  quote:
                    "The team wrapped my grandmother’s antique dresser like it was their own. Friendly, clean, and dependable—Samana Movers delivers the kind of service I want when hiring apartment movers in UAE.",
                },
                {
                  name: "Youssef Haddad",
                  city: "Dubai",
                  quote:
                    "Moving from a 3BR apartment to a villa was a big job, but Samana Movers handled it seamlessly—even coordinated storage in between. Trusted and professional apartment moving services UAE.",
                },
              ].map((t, i) => (
                <figure
                  key={i}
                  className="flex h-full flex-col justify-between  border border-gray-200 bg-white p-6 "
                >
                  <blockquote className="text-sm leading-6 text-gray-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-gray-900">
                    {t.name} •{" "}
                    <span className="font-normal text-gray-600">{t.city}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>

          {/* FAQ */}
          <Section title="FAQs">
            <div className="grid gap-4 lg:grid-cols-2">
              <FAQ
                q="How much do apartment movers in UAE cost?"
                a="Typical starting ranges: Studio AED 700–1,200; 1BR AED 900–1,500; 2BR AED 1,600–2,500; 3BR AED 1,800–4,500; Villas AED 1,400–6,000+. Actual price depends on services — contact us for an exact quote."
              />
              <FAQ
                q="Do you offer packing and dismantling services?"
                a="Yes. We provide professional packing materials and careful dismantling and reassembly of furniture."
              />
              <FAQ
                q="Can you handle high-rise buildings?"
                a="Yes. We’re experienced with building access rules and elevator reservations to keep the move smooth and on time."
              />
              <FAQ
                q="Do you provide same-day or last-minute moves?"
                a="Subject to availability, we can arrange urgent moves. Contact us to check open slots for your date."
              />
              <FAQ
                q="Are my items insured during the move?"
                a="We offer optional insurance coverage for added peace of mind. Ask us to include it in your quote."
              />
              <FAQ
                q="How do I get a quote?"
                a="Click ‘Get a Free Quote’, call us, or message us on WhatsApp. We’ll gather a few details and share a tailored price."
              />
              <FAQ
                q="Do you offer storage services?"
                a="Yes. Short-term and long-term storage options are available on request."
              />
              <FAQ
                q="What payment methods do you accept?"
                a="Cash, card, and bank transfer. We’ll confirm at the time of booking."
              />
            </div>
          </Section>

          {/* CTA banner */}
          <section className="relative my-10 w-full ">
            <div className="overflow-hidden  b1-bg p-8 text-white shadow sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Get Your Free Moving Quote Today
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm/6 opacity-90">
                    Our specialists are ready to help with a personalized plan
                    and clear, competitive pricing.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold b1  transition"
                  >
                    Get a Free On‑Site Survey
                  </a>
                  <a
                    href="https://wa.me/971000000000"
                    className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-transparent px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                  >
                    WhatsApp Instant Quote
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Sticky mobile CTA */}
          <div className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-7xl px-4 pb-4 sm:hidden">
            <div className="mx-4  border border-[#fcd200] bg-white p-3 shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    Ready to move?
                  </div>
                  <div className="text-gray-600">Free quote • No surprises</div>
                </div>
                <a
                  href="tel:971000000000"
                  className="inline-flex items-center justify-center rounded-xl b1-bg px-4 py-2 text-sm font-semibold text-white "
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* JSON-LD FAQ schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much do apartment movers in UAE cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Typical starting ranges: Studio AED 700–1,200; 1BR AED 900–1,500; 2BR AED 1,600–2,500; 3BR AED 1,800–4,500; Villas AED 1,400–6,000+. Actual price depends on services — contact us for an exact quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer packing and dismantling services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. We provide professional packing materials and careful dismantling and reassembly of furniture.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can you handle high-rise buildings?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. We’re experienced with building access rules and elevator reservations to keep the move smooth and on time.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you provide same-day or last-minute moves?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Subject to availability, we can arrange urgent moves. Contact us to check open slots for your date.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are my items insured during the move?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We offer optional insurance coverage for added peace of mind. Ask us to include it in your quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I get a quote?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Click ‘Get a Free Quote’, call us, or message us on WhatsApp. We’ll gather a few details and share a tailored price.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer storage services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Short-term and long-term storage options are available on request.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What payment methods do you accept?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Cash, card, and bank transfer. We’ll confirm at the time of booking.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>
        {/* Main Content */}

        {/* Right Sidebar */}
        <div className="border  col-span-1">
          <h3 className="text-3xl px-10 pt-10 font-black b1">
            Our Service Areas
          </h3>
          <ul className="mt-5 b-text px-10">
            <li className="flex items-center gap-x-2 mb-3 hover:underline hover:underline-offset-1">
              <ArrowRightIcon className="w-4 h-4 b2" />
              Apartment Movers in Dubai
            </li>
            <li className="flex items-center gap-x-2 mb-3 hover:underline hover:underline-offset-1">
              <ArrowRightIcon className="w-4 h-4 b2" />
              Apartment Movers in Sharjah
            </li>
            <li className="flex items-center gap-x-2 mb-3 hover:underline hover:underline-offset-1">
              <ArrowRightIcon className="w-4 h-4 b2" />
              Apartment Movers in Abu Dhabi
            </li>
            <li className="flex items-center gap-x-2 mb-3 hover:underline hover:underline-offset-1">
              <ArrowRightIcon className="w-4 h-4 b2" />
              Apartment Movers in Ajman
            </li>
          </ul>
          <div className="bg-[#182937] w-full p-10 mt-10 relative">
            <svg
              fill="#f2f2f2"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              width={70}
              height={70}
              className="mb-7 mx-auto"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M997 616q-6-69-30-106-24-40-70-46-29-79-88.5-140.5T669 229q-4-2-4-6.5t4-6.5q45-18 72-51t27-73q0-48-40-86-3-4-7.5-1.5T718 11q12 23 12 50 0 33-21 59-19 23-57 44-52 28-111 22-20-2-41-2-89 0-171 38-79 36-138 99.5T103 464q-46 6-70 46Q9 547 3 616q-7 78 22 116 26 34 82 37 38 70 111.5 115.5T384 938q8 1 11 7 6 12 17.5 18.5T437 970h101q19 0 33.5-14.5T586 921t-14-34.5-34-14.5H437q-13 0-24 6.5T396 896q-4 7-13 6-72-10-130.5-45.5T161 765q4-1 7-3 10-2 17.5-44t7.5-101q0-56-6.5-97T170 473q21-75 75-125t140-72q41-10 76-5 41 5 63 32 14 17 14 51 0 23-10 43-4 9 3 16t16 3q31-17 49.5-44.5T615 314q0-12-3.5-24t6-20.5T638 266q70 29 119.5 82.5T829 473q-7 10-11 50t-4 92q0 44 3 79.5t8 53.5q0 6 4 10l1 1q4 5 10 6 12 4 42 4 61 0 90-34 32-37 25-119zM584 758H418q-7 0-10.5 5.5T407 775q10 22 35.5 36.5t58 14.5 58.5-14.5 36-36.5q3-6-1-11.5t-10-5.5zM309 614q0 24 17 41t41 17 40.5-17 16.5-41-16.5-40.5T367 557t-41 16.5-17 40.5zm268 0q0 24 17 41t40.5 17 40.5-17 17-41-17-40.5-40.5-16.5-40.5 16.5-17 40.5z"></path>
              </g>
            </svg>

            <h3 className="text-3xl text-center font-black b-white">
              How We Can Help ?
            </h3>
            <ul className="mt-5 b-white text-lg">
              <li className="flex items-center gap-x-3 mb-2">
                <Phone strokeWidth={1.2} className="text-[#fcd200] " />{" "}
                <span>+971 50123456</span>
              </li>
              <li className="flex items-center gap-x-3 mb-2">
                <MapPin strokeWidth={1.2} className="text-[#fcd200] " />{" "}
                <span>Al Estiqlal Street - Sharjah</span>
              </li>
              <li className="flex items-center gap-x-3 mb-2">
                <AlarmCheck strokeWidth={1.2} className="text-[#fcd200] " />{" "}
                <span>Open 24 / 7</span>
              </li>
            </ul>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="mt-5 px-12"
              callBtn
            >
              Call Now
            </Button>
          </div>
          <QuoteForm side />
          <h3 className="text-3xl px-10 pt-5 font-black b1">
            More Services By Us
          </h3>
          <ul className="mt-5 b-text px-10 pb-10">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex items-center gap-x-2 mb-3 hover:underline hover:underline-offset-1"
              >
                <ArrowRightIcon className="w-4 h-4 b2" />
                {service.title}
              </li>
            ))}
          </ul>
        </div>
        {/* Right Sidebar */}
      </section>
    </main>
  );
};

export default ApartmentMoversUAE;
