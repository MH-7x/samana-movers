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
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group  rounded-lg p-4 "
            open={index === 0}
          >
            <summary className="flex justify-between items-center cursor-pointer  font-medium text-gray-700">
              <div className="w-full grid grid-cols-7 items-center space-x-3">
                <div className="w-10 col-span-1 h-10 flex items-center justify-center rounded-full b1-bg b2 text-xl ">
                  ?
                </div>
                <h3 className="md:text-lg col-span-6 text-base">
                  {faq.question}
                </h3>
              </div>
            </summary>
            <div className="mt-4 md:pl-11 pl-7 pr-4 py-2 bg-[#fcd200]/10 text-gray-700 border-l-4 border-secondary">
              <div className="md:text-base text-sm flex flex-col gap-y-1 ans">
                {faq.answer}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
