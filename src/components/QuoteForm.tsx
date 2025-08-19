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

const QuoteForm = ({ side }: { side?: boolean }) => {
  return (
    <form
      id="Quote-Form"
      className={`bg-white  ${side ? "mt-10" : "md:ml-16 drop-shadow-xl"}`}
    >
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
  );
};

export default QuoteForm;
