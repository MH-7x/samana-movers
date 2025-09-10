import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import Link from "next/link";

import imageSrc from "../../../public/location/movers-and-packers-in-uae.jpg";
import { ArrowDown, ArrowUpRight, Check, CheckCircle } from "lucide-react";
import { stats } from "@/components/WhyChooseUs";
import Script from "next/script";
import { locFaqs } from "@/lib/raws";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in UAE | Moving Services in All Emirates",
      desc: "Complete relocation solutions across Dubai, Abu Dhabi, Sharjah & Ajman. Professional house & office moving, packing services. 24/7 support available",
    },
    path: "/areas-we-serve",
    image: {
      alt: "Movers and Packers in UAE | Moving Services in All Emirates",
      path: "/location/movers-and-packers-in-uae.jpg",
    },
  },
});
const page = () => {
  return (
    <>
      <Script
        id="breadcrumb"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Areas We Serve",
                item: "https://www.samanamoversuae.com/areas-we-serve",
              },
            ],
          }),
        }}
      >
        {" "}
      </Script>
      <Script
        strategy="beforeInteractive"
        id="faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locFaqs),
        }}
      >
        {" "}
      </Script>
      <main className="max-w-[1400px] mx-auto">
        <section className="w-full h-[500px] relative ">
          <Image
            src={imageSrc}
            alt="Our Moving Services in UAE"
            fill
            loading="eager"
            className="absolute object-cover object-center"
          />
          <div className="flex flex-col items-start justify-center absolute w-full h-full top-0 left-0 bg-gradient-to-r from-white/75 via-white/75 md:via-white/50 md:to-white/25 to-white/50 md:px-20 px-3">
            <h1 className="b1 font-black md:text-5xl text-3xl max-w-3xl">
              Movers and Packers in UAE - Areas We Serve in UAE
            </h1>
            <p className="mt-5 b-text max-w-2xl md:text-lg">
              At Samana Movers, we&lsquo;re proud to say we are best movers and
              packers in UAE and offer comprehensive moving and packing services
              throughout the United Arab Emirates. With years of experience and
              a dedicated team of professionals, we ensure seamless relocations
              across all major emirates and their surrounding areas.
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

        <div className="mt-16 max-w-lg mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
          <Link href={"#dubai-moving-services"}>
            <Button size={"lg"}>
              Dubai Moving Services <ArrowDown />
            </Button>
          </Link>
          <Link href={"#abu-dhabi-moving-services"}>
            <Button size={"lg"}>
              Abu Dhabi Moving Services <ArrowDown />
            </Button>
          </Link>
          <Link href={"#sharjah-moving-services"}>
            <Button size={"lg"}>
              Sharjah Moving Services <ArrowDown />
            </Button>
          </Link>
          <Link href={"#ajman-moving-services"}>
            <Button size={"lg"}>
              Ajman Moving Services <ArrowDown />
            </Button>
          </Link>
        </div>

        <section className="mt-32 grid md:grid-cols-2 grid-cols-1 items-center md:w-11/12 mx-auto">
          <div className="bg-green-400 md:h-[600px] h-[400px] relative">
            <Image
              src={"/location/two-movers-with-boxs-in-hand.jpg"}
              alt="two samana movers team members with boxs in hands"
              fill
              className="absolute object-cover object-top"
            />
          </div>
          <div className="md:px-20 px-3 py-14 bg-white drop-shadow-xl md:-ml-16 z-10">
            <p className="b2 md:text-start text-center font-medium uppercase">
              areas we serve
            </p>
            <h2 className="md:text-4xl text-3xl md:text-start text-center font-black b1 mt-4">
              Our Service Coverage Areas in the UAE
            </h2>

            <p className="md:mt-7 mt-5 text-[#5e5e5e]">
              Whether you&lsquo;re moving your home, office, or commercial
              space, our expert movers and packers are available across the
              UAE&lsquo;s most vibrant emirates.We understand the unique
              requirements of each location and provide tailored moving
              solutions to meet your specific needs.
            </p>

            <div className="flex gap-x-5 mt-8 md:justify-start justify-center ">
              <Link href={"/about-us"}>
                <Button size={"lg"}>ABOUT US</Button>
              </Link>
              <Link href={"/contact-us"}>
                <Button variant={"secondary"} size={"lg"}>
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="dubai-moving-services"
          className="mt-32 md:w-11/12 w-full mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-3xl font-black b1 text-center">
            Dubai Moving Services
          </h2>
          <h3 className="md:text-3xl text-2xl font-black b1 mt-16">
            Comprehensive Relocation Services in Dubai
          </h3>
          <p className="b-text max-w-3xl mt-5">
            As the UAE&lsquo;s bustling commercial hub, Dubai demands efficient
            and reliable moving services. Samana Movers provides premium house
            shifting, office relocation, and packing services throughout Dubai
            and all its districts.
          </p>
          <h4 className="my-5 font-bold b1 text-xl">
            Areas We Cover in Dubai:
          </h4>
          <ul className="b-text flex gap-5 flex-wrap ">
            <li className="lis">Downtown Dubai & Business Bay</li>
            <li className="lis">Dubai Marina & JBR</li>
            <li className="lis">Palm Jumeirah & Dubai Islands</li>
            <li className="lis">Jumeirah & Umm Suqeim</li>
            <li className="lis">Al Barsha & Al Quoz</li>
            <li className="lis">Dubai Sports City & Motor City</li>
            <li className="lis">Dubai Silicon Oasis</li>
            <li className="lis">International City & Dubai Investment Park</li>
            <li className="lis">Deira & Bur Dubai</li>
            <li className="lis">Dubai Hills Estate & Arabian Ranches</li>
            <li className="lis">Discovery Gardens & JVC</li>
            <li className="lis">Dubai Creek Harbour</li>
            <li className="lis">Al Nahda & Al Qusais</li>
            <li className="lis">Mirdif & Al Mizhar</li>
            <li className="lis">
              All other Dubai neighborhoods and communities
            </li>
          </ul>
          <h4 className="my-5 font-bold b1 text-xl">
            Our Dubai Services Include:
          </h4>
          <ul className="b-text max-w-md">
            <li className="lis">
              <Link href="/villa-movers-in-dubai">Residential villa </Link> and{" "}
              <Link href={"/apartment-movers-uae"}>apartment moving</Link>
            </li>
            <li className="lis">
              <Link href={"/local-movers-in-dubai"}>
                Office and commercial relocations
              </Link>
            </li>
            <li className="lis">Furniture dismantling and assembly</li>
            <li className="lis">Professional packing and unpacking</li>
            <li className="lis">Storage solutions</li>
          </ul>
          <Button className="mt-10" size={"lg"}>
            More Details About Dubai Moving Services <ArrowUpRight />
          </Button>
        </section>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <section
            id="abu-dhabi-moving-services"
            className="mt-32 md:px-10 px-3 py-16 b1-bg"
          >
            <h2 className="md:text-4xl text-3xl font-black b-white md:text-start text-center">
              Abu Dhabi Moving Services
            </h2>
            <h3 className="md:text-3xl text-2xl font-black b-white mt-16">
              Capital City Relocation Experts
            </h3>
            <p className="text-gray-300 max-w-3xl mt-5">
              As the UAE&lsquo;s capital, Abu Dhabi requires moving services
              that understand both residential luxury and corporate
              professionalism. Samana Movers delivers exceptional moving
              experiences across Abu Dhabi&lsquo;s diverse neighborhoods.
            </p>
            <h4 className="my-5 font-bold b-white text-xl">
              Areas We Cover in Abu Dhabi:
            </h4>
            <ul className="text-gray-300 flex gap-5 flex-wrap ">
              <li className="lis">Abu Dhabi Island & Corniche</li>
              <li className="lis">Al Reem Island</li>
              <li className="lis">Saadiyat Island</li>
              <li className="lis">Yas Island</li>
              <li className="lis">Al Raha Beach & Al Raha Gardens</li>
              <li className="lis">Khalifa City A & Khalifa City B</li>
              <li className="lis">Mohammed Bin Zayed City</li>
              <li className="lis">Al Shamkha & Al Rahba</li>
              <li className="lis">Al Reef & Al Reef Villas</li>
              <li className="lis">Masdar City</li>
              <li className="lis">Al Mushrif & Al Nahyan</li>
              <li className="lis">Al Bateen & Al Khalidiyah</li>
              <li className="lis">Tourist Club Area</li>
              <li className="lis">Marina Village & Al Marina</li>
              <li className="lis">All Abu Dhabi regions and communities</li>
            </ul>
            <h4 className="my-5 font-bold b-white text-xl">
              Specialized Abu Dhabi Moving Services:
            </h4>
            <ul className="text-gray-300 max-w-md">
              <li className="lis">Government office relocations</li>
              <li className="lis">Embassy moving services</li>
              <li className="lis">High-value item transportation</li>
              <li className="lis">Professional packing and unpacking</li>
              <li className="lis">Same-day moving services</li>
            </ul>
            <Button variant={"secondary"} className="mt-10" size={"lg"}>
              More Details Abu Dhabi Moving Services <ArrowUpRight />
            </Button>
          </section>
          <section
            id="sharjah-moving-services"
            className="mt-32 md:px-10 px-3 py-16 b2-bg"
          >
            <h2 className="md:text-4xl text-3xl font-black b1 md:text-start text-center">
              Sharjah Moving Services
            </h2>
            <h3 className="md:text-3xl text-2xl font-black b1 mt-16">
              Trusted Movers in the Cultural Capital
            </h3>
            <p className="b-text max-w-3xl mt-5">
              Sharjah&lsquo;s rich heritage and growing residential communities
              require movers who respect both tradition and modern living. Our
              Sharjah moving services combine efficiency with cultural
              sensitivity.
            </p>
            <h4 className="my-5 font-bold b1 text-xl">
              Areas We Cover in Sharjah:
            </h4>
            <ul className="b-text flex gap-5 flex-wrap ">
              <li className="liss">Al Nahda Sharjah</li>
              <li className="liss">Al Taawun & Al Khan</li>
              <li className="liss">Al Majaz & Al Qasba</li>
              <li className="liss">University City</li>
              <li className="liss">Al Qasimia & Al Nud</li>
              <li className="liss">Muwaileh & Muwaileh Commercial</li>
              <li className="liss">Al Rahmaniya & Sustainable City</li>
              <li className="liss">Sharjah Waterfront City</li>
              <li className="liss">Al Sajaa Industrial Area</li>
              <li className="liss">Tilal City & Nasma Residences</li>
              <li className="liss">Al Juraina & Al Darari</li>
              <li className="liss">Al Riffa & Al Ramtha</li>
              <li className="liss">Kalba, Khor Fakkan & East Coast areas</li>
              <li className="liss">All Sharjah neighborhoods and districts</li>
            </ul>
            <h4 className="my-5 font-bold b1 text-xl">
              Sharjah Moving Specialties:
            </h4>
            <ul className="b-text max-w-md">
              <li className="liss">Family villa relocations</li>
              <li className="liss">Student accommodation moves</li>
              <li className="liss">Industrial equipment transportation</li>
              <li className="liss">Warehouse relocations</li>
              <li className="liss">Cross-emirate moving services</li>
            </ul>
            <Button className="mt-10" size={"lg"}>
              More Details Sharjah Moving Services <ArrowUpRight />
            </Button>
          </section>
        </div>
        <section
          id="ajman-moving-services"
          className="mt-32 md:w-11/12 w-full mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-3xl font-black b1 text-center">
            Ajman Moving Services
          </h2>
          <h3 className="md:text-3xl text-2xl font-black b1 mt-16">
            Affordable & Reliable Moving in Ajman
          </h3>
          <p className="b-text max-w-3xl mt-5">
            Ajman&lsquo;s rapidly growing communities deserve quality moving
            services at competitive prices. Samana Movers brings professional
            relocation solutions to all Ajman areas.
          </p>
          <h4 className="my-5 font-bold b1 text-xl">
            Areas We Cover in Ajman:
          </h4>
          <ul className="b-text flex gap-5 flex-wrap ">
            <li className="lis">Ajman Downtown & Ajman Corniche</li>
            <li className="lis">Al Nuaimiya & Al Rashidiya</li>
            <li className="lis">Al Rawda & Al Zahra</li>
            <li className="lis">Al Jurf Industrial Area</li>
            <li className="lis">Ajman Uptown</li>
            <li className="lis">Emirates City</li>
            <li className="lis">Al Alia & Al Hamidiya</li>
            <li className="lis">Garden City & Al Mowaihat</li>
            <li className="lis">Al Rumaila & Al Bustan</li>
            <li className="lis">Ajman Marina</li>
            <li className="lis">Al Humaid City</li>
            <li className="lis">All Ajman districts and surrounding areas</li>
          </ul>
          <h4 className="my-5 font-bold b1 text-xl">
            Ajman Moving Service Highlights:
          </h4>
          <ul className="b-text max-w-md">
            <li className="lis">Budget-friendly moving packages</li>
            <li className="lis">Flexible scheduling options</li>
            <li className="lis">Small apartment specialists</li>
            <li className="lis">Furniture protection services</li>
            <li className="lis">Express moving services</li>
          </ul>
          <Button className="mt-10" size={"lg"}>
            More Details Ajman Moving Services <ArrowUpRight />
          </Button>
        </section>
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
                Why Choose Us
              </p>
              <h2 className="md:text-4xl text-3xl font-bold mt-2 b-white">
                Why Choose Samana Movers for Your UAE Relocation?
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 mt-20">
              <div
                className={` p-5 border-b-2 border-[#fcd200]
                `}
              >
                <div className="flex items-center mb-4 flex-col gap-y-3">
                  <Check className="text-[#fcd200]" size={40} />
                  <h3 className={`text-xl  font-medium  b-white`}>
                    Comprehensive Coverage
                  </h3>
                </div>
                <p className={`b-white text-sm`}>
                  We don&lsquo;t just serve the main cities – our network
                  extends to every community, district, and neighborhood within
                  each emirate. From luxury villas in Emirates Hills to
                  apartments in International City, we&lsquo;re there when you
                  need us.
                </p>
              </div>
              <div
                className={` p-5 border-b-2 border-[#fcd200] 
                `}
              >
                <div className="flex items-center mb-4 flex-col gap-y-3">
                  <Check className="text-[#fcd200]" size={40} />
                  <h3 className={`text-xl  font-medium  b-white`}>
                    Local Expertise
                  </h3>
                </div>
                <p className={`b-white text-sm`}>
                  Our teams are familiar with:
                </p>
                <ul className="grid md:grid-cols-2 b-white text-sm gap-2 mt-2">
                  <li>Building regulations and moving restrictions</li>
                  <li>Optimal routes and timing for each area</li>
                  <li>Parking arrangements and permissions</li>
                  <li>Community-specific requirements</li>
                </ul>
              </div>
              <div
                className={` p-5 border-b-2 border-[#fcd200] 
                `}
              >
                <div className="flex items-center mb-4 flex-col gap-y-3">
                  <Check className="text-[#fcd200]" size={40} />
                  <h3 className={`text-xl  font-medium  b-white`}>
                    Professional Standards
                  </h3>
                </div>
                <p className={`b-white text-sm`}>
                  We have professional standards when its comes to moving in
                  UAE:
                </p>
                <ul className="grid md:grid-cols-2 b-white text-sm gap-2 mt-2">
                  <li>
                    Licensed & Insured: Fully authorized to operate across all
                    UAE emirates
                  </li>
                  <li>
                    Trained Staff: Professional movers trained in handling all
                    types of relocations
                  </li>
                  <li>
                    Modern Equipment: State-of-the-art moving vehicles and
                    equipment
                  </li>
                  <li>
                    Transparent Pricing: No hidden charges, clear quotations
                  </li>
                  <li>24/7 Support: Round-the-clock customer service</li>
                </ul>
              </div>
            </div>

            {/* Stats Section */}
            <div className="absolute md:-bottom-24 -bottom-40 left-1/2 transform -translate-x-1/2 w-11/12 bg-white rounded-lg shadow-lg md:p-8 p-3 flex md:justify-around justify-center items-center flex-wrap text-gray-900">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-4xl font-bold text-yellow-500">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-between md:w-11/12 mx-auto mt-64 md:px-0 px-3">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl lg:text-5xl font-black b1 mb-6">
              Same-Day Moving Service Areas
            </h2>
            <p className="b-text mb-4">
              We offer same-day moving services in central areas of:
            </p>
            <ul className=" my-6">
              {[
                "Dubai (Downtown, Marina, JLT, Business Bay",
                "Abu Dhabi (Island, Al Reem, Saadiyat)",
                "Sharjah (Al Nahda, Al Taawun, Al Majaz)",
                "Ajman (Downtown, Al Nuaimiya, Al Rashidiya)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 space-y-2">
                  <CheckCircle className="b2 w-5 h-5 mt-1" />
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-medium">Next-Day Service</h3>
            <p className="b-text mb-2">
              Available for all other areas within our service coverage
            </p>
            <h3 className="text-lg font-medium">Emergency Moving Services</h3>
            <p className="b-text mb-2">
              24/7 emergency relocation services available across all emirates
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
        <section className="mt-32 b1-bg md:px-20 px-3 md:py-0 pt-16 items-center md:gap-0 gap-y-10 min-h-96 grid md:grid-cols-2 relative overflow-hidden">
          <div>
            <h2 className="md:text-4xl text-3xl font-black b-white">
              Book Your Move Today with Samana Movers
            </h2>
            <p className="b-white mt-4">
              No matter where you&lsquo;re located in the UAE, Samana Movers is
              ready to make your relocation smooth and stress-free. Our
              comprehensive coverage ensures that whether you&lsquo;re moving
              within the same building or across emirates, we&lsquo;ve got you
              covered.
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

export default page;
