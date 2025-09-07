import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    title: "Apartment Moving",
    desc: "Our apartment movers and packers in UAE handle relocations of any size, from studio flats to multi-bedroom units. We pack your belongings securely and move them carefully so you can settle in quickly.",
    href: "/apartment-movers-uae",
    image: {
      src: "/apartment-moving-uae.jpg",
      alt: "Apartment Movers in Dubai",
    },
  },
  {
    title: "Villa Moving",
    desc: "For larger homes and villas, our specialized villa movers and packers in UAE provide xcomplete moving solutions. We safely disassemble, pack, and transport your furniture and household items, ensuring nothing is damaged.",
    href: "/villa-movers-in-dubai",
    image: {
      src: "/villa-moving-dubai.jpg",
      alt: "Villa Movers in Dubai",
    },
  },
  {
    title: "Local Moving",
    desc: " Planning a move within the same emirate? Our local moving service offers quick, efficient door-to-door relocation anywhere in Dubai, Abu Dhabi, Sharjah, or Ajman.",
    href: "/local-movers-in-dubai",
    image: {
      src: "/local-moving-sharjah-movers.jpg",
      alt: "Local Moving in Sharjah",
    },
  },
  {
    title: "Long-Distance Moving",
    desc: " Moving across emirates? We handle long-distance moves throughout the xUAE with care. Your belongings are protected during the entire journey, from pickup to delivery. ",
    href: "/long-distance-movers-dubai",
    image: {
      src: "/long-distance-moving.jpg",
      alt: "Long Distance Movers in UAE",
    },
  },
  {
    title: "Packing Services",
    desc: "Take advantage of our expert packing services in UAE. We use durable boxes, bubble wrap, and packing tape to secure all your items. You can opt for full packing service or supply your own boxes – whichever you prefer. ",
    href: "#",
    image: {
      src: "/expert-packing-services-uae.jpg",
      alt: "moving and packing services in uae",
    },
  },
  {
    title: "Furniture Installation",
    desc: "Save time on the other end of your move. Our team will reassemble and install your furniture and appliances at the new location, so you can enjoy your home immediately.  ",
    href: "#",
    image: {
      src: "/furniture-installation-abu-dhabi.jpg",
      alt: "furniture installation",
    },
  },
  {
    title: "Single-Item Moving",
    desc: " Need to move a heavy sofa or a large appliance? We offer single-item relocation. Our crew uses specialized equipment to lift, carry, and install any standalone piece of furniture safely. ",
    href: "#",
    image: {
      src: "/single-item-relocation-dubai.jpg",
      alt: "single item movers in dubai",
    },
  },
];

const Services = () => {
  return (
    <section
      id="moving-services"
      className="grid md:grid-cols-3 grid-cols-1 gap-7 md:mt-52 mt-60 md:px-0 px-3 md:w-11/12 mx-auto "
    >
      <div>
        <h2 className="md:text-4xl text-3xl font-black b1 mt-10">
          Our Moving & Packing Services in UAE
        </h2>
        <p className="b-text mt-3">
          We provide a range of services to help you move from one place to
          another and align to your specific needs.
        </p>
        <Link href={"/services"}>
          <Button variant={"secondary"} className="mt-5">
            View All Services
          </Button>
        </Link>
        <Image
          src={"/google-reviews-badge.png"}
          alt={"google reviews"}
          width={150}
          height={150}
          className="mt-8"
        />
      </div>
      {services.map((service, i) => (
        <div key={i} id={service.title.split(" ").join("-")}>
          <div className="w-full h-72 relative z-0 overflow-hidden ">
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
                title={service.title}
                className="text-sm text-[#a38906] underline underline-offset-1"
              >
                Service Details..
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
