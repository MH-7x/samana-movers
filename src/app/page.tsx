import { type Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import imageSrc from "../../public/loading-boxes-XX9YJCF.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers | House Shifting Services in UAE",
      desc: "Samana Movers is top rated moving company in UAE with over 15+ years of experties in moving with UAE. We offer affordable moving services for homes, offices and single furnitures.",
    },
    image: {
      path: "/nice-movers-transport-trucks.jpg",
      alt: "Nice Movers Company Trucks",
    },
    path: "",
  },
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1400px] mx-auto">
        <section
          className="relative h-[550px] overflow-hidden appearAni"
          id="hero-section"
        >
          <Image
            src={imageSrc}
            alt="Samana Movers and Packers"
            fill
            loading="eager"
            placeholder="blur"
            className="absolute object-cover md:object-center object-right"
          />
          <div className="absolute md:px-16 px-3 top-0 left-0 w-full h-full bg-gradient-to-r md:from-white/50 from-white/60 md:via-white/25 via-white/60 to-white/60 md:to-white/0 flex flex-col items-start justify-center">
            <span className="b-text font-medium md:text-start text-center md:mb-5 mb-3 uppercase tracking-wider w-full">
              Provide Best Moving Service
            </span>
            <h1 className="md:text-5xl text-3xl md:text-start text-center max-w-2xl b1 tracking-wide font-black">
              Samana Movers – Movers and Packers in the UAE
            </h1>
            <div className="mt-8 max-w-2xl b1 md:text-start text-center md:text-lg">
              <p>
                Samana Movers is a premier moving company in the UAE,
                specializing exclusively in residential relocation.
              </p>
              <p>
                {" "}
                Whether you’re moving down the street or to another emirate,
                Samana Movers ensures your belongings arrive safely at your new
                home.
              </p>
            </div>
            <Button
              className="mt-8 md:mx-0 mx-auto"
              size={"lg"}
              variant={"secondary"}
            >
              <Phone /> Call Now{" "}
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
