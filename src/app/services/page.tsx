import ContactSection from "@/components/ContactSection";
import { services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { ArrowUpRightFromSquare, Check, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ServicesFaqs } from "../../../data";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Moving Services in UAE | Samana Movers",
      desc: "We offer a wide range of moving services in UAE, including apartments, villas, and single furnitures. Our experienced team ensures a smooth and stress-free relocation process.",
    },
    path: "/services",
    image: {
      alt: "Moving Services in UAE | Samana Movers",
      path: "/young-mover-finding-necessary-box.jpg",
    },
  },
});

const ServicesPage = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <section className="w-full h-[450px] relative ">
        <Image
          src={"/young-mover-finding-necessary-box.jpg"}
          alt="Our Moving Services in UAE"
          fill
          className="absolute object-cover object-center"
        />
        <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75 md:via-white/50 md:to-white/25 to-white/50 md:px-20 px-3">
          <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
            Our Moving & Packing Services in UAE - Samana Movers
          </h1>
          <p className="mt-5 b-text max-w-2xl md:text-lg">
            At Samana Movers, we provide reliable moving and packing services
            across the UAE. From apartments to villas, our licensed team ensures
            a smooth, safe, and stress-free relocation.
          </p>
          <div className="mt-5 flex gap-x-5">
            <Button size={"lg"} callBtn variant={"secondary"}>
              Call Now
            </Button>
            <Link href={"/contact-us"}>
              {" "}
              <Button size={"lg"}>Get A Quote</Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="moving-services"
        className="grid md:grid-cols-3 grid-cols-1 gap-7  mt-32 md:px-0 px-3 md:w-11/12 mx-auto "
      >
        <div className="md:col-span-3 col-span-1 text-center mb-20">
          <p className="b2 font-medium md:text-lg">Our Services</p>
          <h2 className="font-black b1 md:text-5xl text-3xl">
            Moving Services We <br /> Provide in UAE
          </h2>
        </div>
        {services.map((service, i) => (
          <div key={i} id={service.title.split(" ").join("-")}>
            <div className="w-full h-72 relative z-0 overflow-hidden col-span-1">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="w-11/12 mx-auto shadow-lg shadow-neutral-100 bg-white/90 min-h-32 z-10 transform -translate-y-[40px] py-5 px-3 ">
              <Link href={service.href}>
                <h3 className="text-xl font-semibold b1 text-center">
                  {service.title}
                </h3>
              </Link>
              <p className="b-text mt-3 text-sm text-center md:line-clamp-3 line-clamp-4">
                {service.desc}
              </p>
              <div className="flex items-center justify-start gap-x-3 w-full mt-3">
                <Link
                  href={service.href}
                  className="text-sm text-[#a38906] underline underline-offset-1"
                >
                  Service Details..
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <ContactSection
        title="Request For Moving Services in UAE"
        desc={
          <>
            <p>
              Book your move with Samana Movers today. Our licensed team in
              Sharjah provides fast, affordable, and insured moving services
              across the UAE.
            </p>
            <p>
              Request reliable moving services in the UAE with Samana Movers. We
              ensure smooth apartment and villa relocations with expert packing
              and safe transport.
            </p>
          </>
        }
      />
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

      <div className="mt-32 md:w-11/12 mx-auto md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 gap-16">
        <div className="relative md:h-auto h-[500px] overflow-hidden">
          <Image
            src={"/young-mover-with-packaged-product.jpg"}
            alt="Moving Services in UAE"
            fill
            className="absolute object-cover object-center"
          />
          <div className="bg-[#182937]/80 absolute top-0 left-0 w-full h-full p-13">
            <h3 className="text-3xl md:text-5xl font-black b-white">
              We Are Expert In Move Your Needs
            </h3>
            <ul className="mt-7 text-lg b-white">
              <li className="flex items-center gap-x-3">
                <Check className="text-[#fcd200] " />{" "}
                <span>No Hidden Charges</span>
              </li>
              <li className="flex items-center gap-x-3">
                <Check className="text-[#fcd200] " />{" "}
                <span>Free Estimates</span>
              </li>
              <li className="flex items-center gap-x-3">
                <Check className="text-[#fcd200] " />{" "}
                <span>Moving Protection</span>
              </li>
              <li className="flex items-center gap-x-3">
                <Check className="text-[#fcd200] " />{" "}
                <span>Flexible & Affordable</span>
              </li>
              <li className="flex items-center gap-x-3">
                <Check className="text-[#fcd200] " />{" "}
                <span>Delivery On Time</span>
              </li>
              <li className="flex items-center gap-x-3">
                <Check className="text-[#fcd200] " />{" "}
                <span>24 -Hours Emergency Services</span>
              </li>
            </ul>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="mt-7 px-12"
              callBtn
            >
              Call Now
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0  md:w-52 w-32 bg-[#fcd200] origin-top-right transform -skew-x-[36deg] -mr-[360px] " />
        </div>
        <div>
          <p className="b2 font-medium md:text-lg">Clients Inquires</p>
          <h2 className="text-3xl md:text-4xl font-black b1">
            Questions Related To Moving
          </h2>
          <p className="mt-3 b-text">
            Having question about your moving in UAE, We got the best answers
            for you. You can get more details by call us or fill the quote form.
          </p>
          <div className=" mt-10">
            {ServicesFaqs.slice(0, 3).map((faq, i) => (
              <details
                key={i}
                className="group  rounded-lg p-4 "
                open={i === 0}
              >
                <summary className="flex justify-between items-center cursor-pointer  font-medium text-gray-700">
                  <h3 className="md:text-lg col-span-6 text-base">
                    {faq.question}
                  </h3>
                </summary>
                <div className="mt-2 ">
                  <div className="md:text-base text-sm flex flex-col gap-y-1 ans">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-11/12 mx-auto mt-10 grid md:grid-cols-2 md:px-0 px-3 grid-cols-1 gap-5">
        {ServicesFaqs.slice(3).map((faq, i) => (
          <details key={i} className="group  rounded-lg p-4 border-b">
            <summary className="flex justify-between items-center cursor-pointer  font-medium text-gray-700">
              <h3 className="md:text-lg col-span-6 text-base">
                {faq.question}
              </h3>
            </summary>
            <div className="mt-2 ">
              <div className="md:text-base text-sm flex flex-col gap-y-1 ans">
                {faq.answer}
              </div>
            </div>
          </details>
        ))}
      </div>

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
  );
};

export default ServicesPage;
