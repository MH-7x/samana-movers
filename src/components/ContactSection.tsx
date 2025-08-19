import { AlarmCheck, PackageCheckIcon } from "lucide-react";

import { ReactNode } from "react";
import QuoteForm from "./QuoteForm";

const ContactSection = ({
  title,
  desc,
  cta,
}: {
  title?: string;
  desc?: ReactNode;
  cta?: boolean;
}) => {
  return (
    <section
      id="contact-section"
      className={`md:w-11/12 ${
        cta ? "mt-10" : "mt-32"
      } mx-auto grid md:grid-cols-2 md:gap-x-16 gap-y-16 items-center md:px-0 px-3`}
    >
      <div>
        <h2 className="b1 font-black md:text-5xl text-3xl">
          {title ? title : "Best House Moving Company in Dubai, UAE"}
        </h2>
        <div className="md:mt-8 mt-5 b-text">
          {desc ? (
            desc
          ) : (
            <>
              <p>
                Founded in 2018, our team of 50+ trained packers and movers
                delivers stress-free house shifting services across Dubai, Abu
                Dhabi, Sharjah, and Ajman.
              </p>
              <p>
                As experienced movers and packers in the UAE, we handle
                everything from apartment moves to villa relocations with care
                and efficiency
              </p>
            </>
          )}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-x-5 md:px-0 px-5">
          <div className="bg-white hover:bg-[#fcd200]/30 transition-colors duration-500 drop-shadow-lg flex flex-col items-center justify-center gap-y-4 p-6">
            <AlarmCheck className="w-10 h-10 b2" />
            <p className=" b1 font-medium">Quick Response</p>
          </div>
          <div className="b2-bg drop-shadow-lg flex flex-col items-center justify-center gap-y-4 p-6">
            <PackageCheckIcon className="w-10 h-10 b1" />
            <p className=" b1 font-medium">Packing Services</p>
          </div>
          <div className="bg-white hover:bg-[#fcd200]/30 transition-colors duration-500 drop-shadow-lg flex flex-col items-center justify-center gap-y-4 p-6">
            <AlarmCheck className="w-10 h-10 b2" />
            <p className=" b1 font-medium">Moving Protection</p>
          </div>
        </div>
      </div>
      <QuoteForm />
    </section>
  );
};

export default ContactSection;
