import { AlarmCheck, PackageCheckIcon } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePicker } from "./ui/DatePicker";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="md:w-11/12 mt-32 mx-auto grid md:grid-cols-2 md:gap-x-16 gap-y-16 items-center md:px-0 px-3"
    >
      <div className="">
        <h2 className="b1 font-black md:text-5xl text-3xl">
          Best House Moving Company in Dubai, UAE
        </h2>
        <div className="md:mt-8 mt-5 b-text">
          <p>
            Founded in 2018, our team of 50+ trained packers and movers delivers
            stress-free house shifting services across Dubai, Abu Dhabi,
            Sharjah, and Ajman.
          </p>
          <p>
            As experienced movers and packers in the UAE, we handle everything
            from apartment moves to villa relocations with care and efficiency
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-x-5">
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
      <form id="Quote-Form" className="bg-white drop-shadow-lg md:ml-16">
        <div className="p-5 b1-bg">
          <h3 className="md:text-3xl text-2xl font-black b-white text-center">
            Request A Quote
          </h3>
        </div>
        <div className="md:p-10 py-10 px-5 flex flex-col gap-y-5">
          <Input type="text" placeholder="Your Name" />
          <Input type="number" placeholder="Phone Number" />
          <div className="grid grid-cols-2 gap-x-5">
            <Select name="moving-from">
              <SelectTrigger className="w-full rounded-none py-[26px]">
                <SelectValue placeholder="Moving From" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectGroup>
                  <SelectLabel>City</SelectLabel>
                  <SelectItem value="Dubai">Dubai</SelectItem>
                  <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                  <SelectItem value="Sharjah">Sharjah</SelectItem>
                  <SelectItem value="Ajman">Ajman</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select name="moving-to">
              <SelectTrigger className="w-full rounded-none py-[26px]">
                <SelectValue placeholder="Moving To" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectGroup>
                  <SelectLabel>City</SelectLabel>
                  <SelectItem value="Dubai">Dubai</SelectItem>
                  <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                  <SelectItem value="Sharjah">Sharjah</SelectItem>
                  <SelectItem value="Ajman">Ajman</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DatePicker />
          <Textarea placeholder="More Details.." />
          <Button className="py-7" size={"lg"}>
            Send Now
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
