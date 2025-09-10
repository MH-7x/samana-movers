import ContactSection from "@/components/ContactSection";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
const contacts = [
  {
    icon: <MapPin className="w-8 h-8 text-darkBlue" strokeWidth={1.2} />,
    title: "Our Office",
    desc: "Al Estiqlal Street, Abu Shagara - Sharjah",
  },
  {
    icon: <Phone className="w-8 h-8 text-darkBlue" strokeWidth={1.2} />,
    title: "Call Us",
    desc: "+971 50 9320597",
  },
  {
    icon: <Mail className="w-8 h-8 text-darkBlue" strokeWidth={1.2} />,
    title: "Email Us",
    desc: "samana.movers@gmail.com",
  },
  {
    icon: <Clock className="w-8 h-8 text-darkBlue" strokeWidth={1.2} />,
    title: "Work Hours",
    desc: "Open 24/7 \nService Any Time",
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title:
        "Contact Samana Movers | Residential Moving Services in Sharjah & UAE",
      desc: "Contact Samana Movers — trusted residential movers in Sharjah, Dubai & Abu Dhabi. Call or WhatsApp for a free quote.",
    },
    path: "/contact-us",
    image: {
      path: "/contact-us.jpg",
      alt: "Contact Us - Samana Movers",
    },
  },
});

const ContactUsPage = () => {
  return (
    <>
      {" "}
      <Script
        id="breadcrumb"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.samanamoversuae.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://www.samanamoversuae.com/contact-us",
              },
            ],
          }),
        }}
      >
        {" "}
      </Script>
      <main className="max-w-[1400px] mx-auto">
        <ContactSection
          h1
          cta
          title="Get A Moving Quote From Samana Movers"
          desc={
            <>
              <p>
                Get a personalized moving quote from Samana Movers and enjoy a
                smooth, stress-free relocation anywhere in the UAE.
              </p>
              <p>
                Since 2018, our licensed team has specialized in apartment and
                villa moves, offering affordable rates, professional packing,
                and complete insurance coverage.
              </p>
              <p>
                With transparent pricing and no hidden fees, we make it easy for
                you to plan your move confidently and securely.
              </p>
            </>
          }
        />
        <section className="mt-32 bg-white">
          <div className="text-center mb-12">
            <h2 className="md:text-5xl text-3xl font-black b1">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
            {contacts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white py-6 px-3 hover:shadow-lg transition"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#fcd200] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
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
            <Link href={"tel:+971509320597"}>
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
};

export default ContactUsPage;
