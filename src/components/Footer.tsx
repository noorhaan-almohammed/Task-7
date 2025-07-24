"use client";

import {
  contactFooterType,
  serviceFooterType,
  socialMediaType,
} from "@/Types/type";
import Image from "next/image";
import Link from "next/link";

const Footer = ({
  services,
  home,
  help,
  contact,
  social,
}: {
  services: serviceFooterType;
  home: serviceFooterType;
  help: serviceFooterType;
  contact: contactFooterType;
  social: socialMediaType;
}) => {
  return (
    <footer className="bg-grey px-4 md:px-6 lg:px-12 xl:px-32 2xl:px-62.5 py-8 sm:py-10 lg:py-[38px] mt-5 sm:mt-7 lg:mt-9">
      <div className="w-full">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-8 items-center lg:items-start w-full">

          <div className="self-center lg:self-start">
            <Image
              height={130}
              width={133}
              src="/logo.svg"
              alt="Footer Logo"
              className="w-25 sm:w-30 lg:w-33 h-auto"
            />
          </div>

          <div className="w-full h-[1px] bg-white opacity-10"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-4">

            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 w-full lg:w-1/5">
              <h3 className="text-lg sm:text-xl font-bold xl:font-extrabold leading-7.5 text-white">
                {services.title}
              </h3>
              <div className="flex flex-col items-center lg:items-start gap-3">
                {services.links.map((link, index) => {
                  return (
                    <Link
                      href={link.href}
                      key={index}
                      className="text-base sm:text-lg xl:font-semibold font-normal leading-6.5 text-white hover:text-orange cursor-pointer transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-row gap-8 sm:gap-12 lg:gap-8 w-full lg:w-2/5">
              <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 w-full sm:w-1/2">
                <h3 className="text-lg sm:text-xl font-bold xl:font-extrabold leading-7.5 text-white">
                  {home.title}
                </h3>
                <div className="flex flex-col items-center lg:items-start gap-3">
                  {home.links.map((link, index) => {
                    return (
                      <Link
                        href={link.href}
                        key={index}
                        className="text-base sm:text-lg xl:font-semibold font-normal leading-6.5 text-white hover:text-orange cursor-pointer transition-colors"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 w-full sm:w-1/2">
                <h3 className="text-lg sm:text-xl font-bold xl:font-extrabold leading-7.5 text-white">
                  {help.title}
                </h3>
                <div className="flex flex-col items-center lg:items-start gap-3">
                  {help.links.map((link, index) => {
                    return (
                      <Link
                        href={link.href}
                        key={index}
                        className="text-base sm:text-lg xl:font-semibold font-normal leading-6.5 text-white hover:text-orange cursor-pointer transition-colors"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 w-full lg:w-1/4">
              <h3 className="text-lg sm:text-xl font-bold xl:font-extrabold text-white leading-7.5">
                {contact.title}
              </h3>
              <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5">
                {contact.links.map((link, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <Image
                        width={24}
                        height={24}
                        src={link.icon}
                        alt={link.label}
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      />
                      <span className="text-base sm:text-lg font-normal xl:font-semibold leading-6.5 text-white">
                        {link.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 items-center lg:items-start w-full lg:w-auto">
              <h3 className="text-lg sm:text-xl font-bold xl:font-extrabold text-white leading-7.5">
                {social.title}
              </h3>
              <div className="flex gap-4 sm:gap-5">
                {social.links.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <Image
                        width={50}
                        height={50}
                        src={item.icon}
                        alt={item.alt}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12.5 lg:h-12.5 hover:opacity-80 cursor-pointer transition-opacity"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white opacity-10"></div>

          <div className="text-center w-full">
            <p className="text-sm sm:text-base font-normal text-white leading-6.5">
              Copyright © 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
