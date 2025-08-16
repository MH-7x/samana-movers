import { type Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";

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
        <HeroSection />
        <ContactSection />
        <div className="min-h-screen" />
      </main>
    </>
  );
}
