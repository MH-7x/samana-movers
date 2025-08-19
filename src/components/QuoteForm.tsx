"use client";
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
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SendMail } from "@/lib/FormSubmission";
import { toast } from "sonner";
import { CheckCheckIcon, X } from "lucide-react";

const QuoteForm = ({ side }: { side?: boolean }) => {
  const handleSubmit = async () => {
    const form = document.querySelector("form");
    if (form) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      try {
        const results = await SendMail({
          data: {
            message: data.message as string,
            movingFrom: data["moving-from"] as string,
            movingTo: data["moving-to"] as string,
            name: data.name as string,
            phone: data.phone as string,
          },
        });
        if (results.success) {
          form.reset();
          toast("Your request has been sent successfully!", {
            description: (
              <span className="text-stone-600">
                We will contact you shortly.
              </span>
            ),
            style: {
              backgroundColor: "#ECD920",
              color: "#1c1716",
            },
            icon: <CheckCheckIcon />,
          });
        } else {
          throw new Error(results.error || "Failed to send your request.");
        }
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to send your request.",
          {
            icon: <X />,
          }
        );
      }
    }
  };

  return (
    <form
      id="Quote-Form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={`bg-white  ${side ? "mt-10" : "md:ml-16 drop-shadow-xl"}`}
    >
      <div className="p-5 b1-bg">
        <h3 className="md:text-3xl text-2xl font-black b-white text-center">
          Request A Quote
        </h3>
      </div>
      <div
        className={`${
          side ? "px-5" : "md:p-10"
        } py-10 px-5 flex flex-col gap-y-5`}
      >
        <Input required name="name" type="text" placeholder="Your Name" />
        <Input required name="phone" type="number" placeholder="Phone Number" />
        <div className="grid grid-cols-2 gap-x-5">
          <Select required name="moving-from">
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
                <SelectItem value="Ras Al Khaimah">Ras Al Khaimah</SelectItem>
                <SelectItem value="Fujairah">Fujairah</SelectItem>
                <SelectItem value="Umm Al Quwain">Umm Al Quwain</SelectItem>
                <SelectItem value="Al Ain">Al Ain</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select required name="moving-to">
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
                <SelectItem value="Ras Al Khaimah">Ras Al Khaimah</SelectItem>
                <SelectItem value="Fujairah">Fujairah</SelectItem>
                <SelectItem value="Umm Al Quwain">Umm Al Quwain</SelectItem>
                <SelectItem value="Al Ain">Al Ain</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Textarea required name="message" placeholder="More Details.." />
        <Button className="py-7" size={"lg"}>
          Send Now
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;
