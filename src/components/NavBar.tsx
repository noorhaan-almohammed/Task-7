"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AuthModal from "./auth/AuthModal";
import SearchField from "./TourSearchComponents/SearchField";

function NavBar({ links }: { links: { href: string; label: string }[] }) {
  const pathname = usePathname(); // <-- ✅
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("signup");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`py-2 px-4 md:py-4 md:px-6 2xl:py-5 2xl:px-[62.5px] flex items-center justify-between fixed top-0 w-full transition-colors duration-300 z-10 ${
          scrolled ? "bg-[#111]/80 backdrop-blur-md" : "bg-[#FFFFFF33]"
        }`}
      >
        <Image
          loading="eager"
          src="/logo.svg"
          alt="logo"
          width={133}
          height={130}
          className="w-16 h-16 lg:w-20 lg:h-20 2xl:w-[133px] 2xl:h-[130px]"
        />

        <button
          className="block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/icons/menu.svg" alt="menu" className="w-10 h-10" />
        </button>

        <ul className="md:flex items-center justify-between gap-6 xl:gap-8 2xl:gap-10 hidden md:text-[16px] lg:text-xl font-semibold text-white ">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-orange ${
                  pathname === link.href
                    ? "border-b-2 border-orange hover:border-orange"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center justify-between gap-2.5 2xl:gap-2.5 text-white md:text-[16px] lg:text-xl font-semibold">
          <SearchField
            title="Eng"
            data={["Ar", "Eng"]}
            arrow="/icons/img_arrow_down.svg"
            className="bg-transparent w-14 "
            placeholderColor="text-white"
          />
          <button
            className="cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              setAuthType("login");
              setAuthModalOpen(true);
            }}
          >
            Login
          </button>
          <button
            className="bg-orange px-8 py-1 2xl:px-11 2xl:py-2.5 rounded-[50px] cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              setAuthType("signup");
              setAuthModalOpen(true);
            }}
          >
            Sign Up
          </button>
        </div>

        {menuOpen && (
          <div className="fixed top-0 left-0 p-10 flex flex-col items-center justify-between text-[16px] font-semibold bg-[#f8f5f2] w-screen h-screen">
            <div className="flex justify-between items-center w-full">
              <SearchField
                title="Eng"
                data={["Ar", "Eng"]}
                className="bg-transparent w-16 gap-2"
                placeholderColor="text-grey"
              />
              <img
                src="/icons/close.svg"
                alt="close menu"
                className=" bg-orange rounded-[6px] p-0.5 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>

            <ul className="flex flex-col items-center justify-evenly gap-10 w-full">
              {links.map((link) => (
                <li
                  className={`w-full p-4 text-center rounded-xl ${
                    pathname === link.href ? "bg-orange text-white" : ""
                  }`}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center justify-center gap-6">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setAuthType("login");
                  setAuthModalOpen(true);
                }}
              >
                Login
              </button>
              <button
                className="bg-orange px-10 py-2 rounded-3xl text-white"
                onClick={() => {
                  setMenuOpen(false);
                  setAuthType("signup");
                  setAuthModalOpen(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
        type={authType}
        switchType={(type) => setAuthType(type)}
      />
    </>
  );
}

export default NavBar;
