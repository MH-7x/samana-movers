"use client";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
const Navbar = () => {
  useEffect(() => {
    const toggleOpen = document.getElementById("toggleOpen");
    const toggleClose = document.getElementById("toggleClose");
    const collapseMenu = document.getElementById("collapseMenu");

    if (!toggleOpen || !toggleClose || !collapseMenu) return;

    const handleClick = () => {
      if (collapseMenu.style.display === "block") {
        collapseMenu.style.display = "none";
      } else {
        collapseMenu.style.display = "block";
      }
    };

    toggleOpen.addEventListener("click", handleClick);
    toggleClose.addEventListener("click", handleClick);

    // Cleanup on unmount
    return () => {
      toggleOpen.removeEventListener("click", handleClick);
      toggleClose.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <header className="tracking-wide shadow-xl shadow-neutral-200/50  relative z-50">
      <section className="md:py-[14px] py-3 relative b1-bg b-white overflow-hidden text-right md:px-16 px-3 flex items-center justify-between">
        <div className="flex items-center md:gap-x-8 gap-x-3 text-sm">
          <div className="flex items-center gap-2 md:text-sm text-xs">
            <Phone
              className="md:w-5 w-4 md:h-5 h-4 fill-[#F2F2F2]"
              strokeWidth={0.5}
            />
            <p className="font-medium">+971 56 356017</p>
          </div>{" "}
          <div className="flex items-center gap-2 md:text-sm text-xs">
            <MapPin className="md:w-5 w-4 md:h-5 h-4 " />
            <p className="font-medium">Al Estiqlal Street - Sharjah</p>
          </div>
        </div>
        <div className="md:flex hidden absolute inset-y-0 right-0 w-[500px] b2-bg origin-top-right transform skew-x-[36deg] -mr-20  items-center justify-center">
          <a
            href="javascript:;"
            className="p-2 rounded-lg transform skew-x-[-36deg] flex items-center  justify-center transition-all duration-500 b1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 71 72"
              fill="none"
            >
              <path
                d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                fill="#111827"
              />
            </svg>
          </a>
          <a
            href="javascript:;"
            className="p-2 rounded-lg transform skew-x-[-36deg] flex items-center  justify-center transition-all duration-500 b1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 71 72"
              fill="none"
            >
              <path
                d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                fill="#111827"
              />
            </svg>
          </a>
          <a
            href="javascript:;"
            className="p-2 rounded-lg transform skew-x-[-36deg] flex items-center  justify-center transition-all duration-500 b1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                fill="#111827"
              />
            </svg>
          </a>

          <a
            href="javascript:;"
            className="p-2 rounded-lg transform skew-x-[-36deg] flex items-center  justify-center transition-all duration-500 b1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 71 72"
              fill="none"
            >
              <path
                d="M33.2808 13.0437C25.8492 13.893 18.4439 20.0479 18.1382 28.84C17.9461 34.2083 19.435 38.2356 24.4258 39.3664C26.5915 35.4553 23.7272 34.5927 23.2818 31.7633C21.4523 20.1686 36.346 12.2615 44.14 20.3563C49.5324 25.9615 45.9826 43.206 37.2848 41.4136C28.9537 39.7017 41.3629 25.9749 34.713 23.2796C29.3074 21.0894 26.4343 29.9798 28.9974 34.396C27.4953 41.9902 24.2599 49.1464 25.5698 58.6715C29.8183 55.5158 31.2504 49.4727 32.425 43.1702C34.5601 44.4978 35.6998 45.8789 38.4244 46.0935C48.4714 46.8891 54.0822 35.8263 52.7112 25.6218C51.4929 16.5749 42.6729 11.971 33.2808 13.0437Z"
                fill="#111827"
              />
            </svg>
          </a>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between md:gap-4 gap-2 md:px-16 px-3 md:py-3 py-2 bg-white min-h-[65px]">
        <Link href={"/"} title="Company Logo" className="relative w-56 h-12 ">
          <Image
            src={"/logo-cropped.svg"}
            alt="Company Logo"
            fill
            className="absolute object-contain object-center"
          />
        </Link>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 w-11/12 h-16 hidden max-lg:block relative">
              <Link href={"/"} className="  ">
                <Image
                  src={"/logo-cropped.svg"}
                  alt="Company Logo"
                  fill
                  className="object-contain absolute object-center"
                />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#FCD200] text-[#182937] block font-medium text-[15px]"
              >
                Services
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#FCD200] text-[#182937] block font-medium text-[15px]"
              >
                Locations
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#FCD200] text-[#182937] block font-medium text-[15px]"
              >
                About Us
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#FCD200] text-[#182937] block font-medium text-[15px]"
              >
                Contact Us
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#FCD200] text-[#182937] block font-medium text-[15px]"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <Button className="lg:flex hidden">
          <CalendarCheck /> Book Online
        </Button>
        <div className="flex max-lg:ml-auto lg:hidden">
          <button id="toggleOpen" className="lg:hidden cursor-pointer">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
