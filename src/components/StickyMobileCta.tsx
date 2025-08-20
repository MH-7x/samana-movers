import { Phone } from "lucide-react";
import React from "react";

const StickyMobileCta = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-7xl px-3 pb-4 sm:hidden">
      <div className="mx-0  border border-[#fcd200] bg-white p-5 shadow-xl rounded-lg">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm">
            <div className="font-semibold text-gray-900">Ready to move?</div>
            <div className="text-gray-600 mt-1">Free quote • No surprises</div>
          </div>
          <a
            href="tel:971000000000"
            className="inline-flex items-center justify-center rounded-xl b1-bg px-4 py-3 text-sm  text-white "
          >
            <Phone strokeWidth={1.2} size={18} className="mr-2" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCta;
