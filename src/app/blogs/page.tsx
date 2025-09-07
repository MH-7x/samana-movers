import React from "react";
import imageSec from "../../../public/samana-movers-blogs.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  AlarmCheck,
  ArrowRightIcon,
  CalendarCheck2Icon,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { BlogsPagination } from "@/components/BlogsPagination";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Our Blogs - Samana Movers",
      desc: "Stay informed with our expert tips and insights on moving and packing services in the UAE. Read our blog posts to learn about the latest trends, tips, and tricks for a stress-free relocation experience.",
    },
    image: {
      alt: "Our Blogs - Samana Movers",
      path: "/samana-movers-blogs.jpg",
    },
    path: "/blogs",
  },
});

const Blogs = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <section className="w-full h-[350px] relative ">
        <Image
          src={imageSec}
          alt="Our Blogs - Samana Movers"
          fill
          loading="eager"
          placeholder="blur"
          className="absolute object-cover object-center"
        />
        <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75 md:via-white/50 md:to-white/25 to-white/50 md:px-20 px-3">
          <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
            Our Blogs
          </h1>
          <p className="mt-5 b-text max-w-2xl md:text-lg">
            Stay informed with our expert tips and insights on moving and
            packing services in the UAE. Read our blog posts to learn about the
            latest trends, tips, and tricks for a stress-free relocation
            experience.
          </p>
        </div>
      </section>
      <section className="md:w-11/12 mx-auto my-32 md:px-0 px-3">
        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-y-10 items-start">
          <div className="b1-bg p-10 flex flex-col gap-y-8 w-full grid-cols-1 md:order-1 order-2">
            <h3 className="b-white font-medium text-2xl border-b-2 border-[#fcd200] pb-3">
              Latest Post
            </h3>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index}>
                <Link href={"#"}>
                  <h4 className="line-clamp-2 hover:underline hover:underline-offset-2  font-medium b-white text-lg">
                    Load Boards Show Flat Demand & Higher Rates
                  </h4>
                </Link>
                <div>
                  <div className="flex items-center gap-x-2 text-gray-500 text-sm mt-1">
                    <CalendarCheck2Icon size={17} />
                    <span>April 6, 2025</span>
                  </div>
                </div>
              </div>
            ))}
            <h3 className="text-3xl font-black b-white mt-10">Categories</h3>
            <ul className=" b-white">
              {[1, 2, 3, 4].map((_, i) => (
                <li
                  key={i}
                  className="flex items-center gap-x-2 mb-3 hover:underline hover:underline-offset-1"
                >
                  <ArrowRightIcon className="w-4 h-4 b2" />
                  Moving Tips
                </li>
              ))}
            </ul>
            <div className=" mt-10 relative">
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
          </div>
          <div className="col-span-2 grid md:grid-cols-2 grid-cols-1 gap-10 md:order-2 order-1">
            {[1, 2, 3, 4].map((_, index) => (
              <BlogCard
                key={index}
                image="/ocal-moving-sharjah-movers-2.jpg"
                category="Commercial Moving"
                title="Load Boards Show Flat Demand & Higher Rates"
                date="April 6, 2021"
                excerpt="Duis dictum vestibulum ante vitae ullamcorper. Risusque phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magna."
                href="#"
              />
            ))}
            <BlogsPagination />
          </div>
        </div>
      </section>
      <section className=" b1-bg md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
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

export default Blogs;
