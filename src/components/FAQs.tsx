import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface FAQProps {
  question: string;
  answer: string | ReactNode;
}

export function FAQs({ faqs }: { faqs: FAQProps[] }) {
  return (
    <section id="faqs" className="md:w-11/12 w-full mt-32 mx-auto md:px-0 px-3">
      <h2 className="text-center b1 font-black md:text-4xl text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto mt-10">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value={faq.question}>
              <AccordionTrigger className="md:text-xl text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 b-text  text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
