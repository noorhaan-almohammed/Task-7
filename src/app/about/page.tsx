import Hero from "@/components/Hero";
import OverAll from "@/components/OverAll";
import { compoany_about_info, overAllData } from "@/Data/data";
import CompoanyInfo from "@/sections/CompoanyInfo";
import CustomersSays from "@/sections/CustomersSays";
import Link from "next/link";

function About() {
  return (
    <div className="font-open-sans">
      <Hero
        img="/images/about_hero.webp"
        title="Our team cares about your full relax"
        description="Enjoy our services for your trip anytimeBut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        gap="gap-10"
      >
        <Link
          href="/tour-packages"
          className="px-6 py-3.5 font-semibold text-base sm:text-xl leading-[100%] text-white border-[1.5px] border-white rounded-full transition-colors duration-300 hover:bg-white hover:text-[#c8910c] hover:border-[#c8910c] hover:inset-shadow-slate-100 hover:shadow-md hover:shadow-[#ffcc54]"
        >
          View our Tour Packages
        </Link>
      </Hero>
      <div className="space-y-15 2xl:space-y-30 py-8 md:py-15 2xl:py-31">
        <CompoanyInfo
          content={compoany_about_info}
          imgClass_1="rounded-3xl overflow-hidden aspect-[2] w-[500px] h-[412px] object-cover 2xl:w-[600px] 2xl:h-[512px]"
          imgClass_2="rounded-2xl aspect-[1.816] w-full object-cover"
          borderClass="bg-white border border-[#efefef] p-6.5 rounded-3xl"
          borderClass2="bg-white border border-[#efefef] p-3.5 rounded-2xl mt-5"
        />
        <OverAll content={overAllData} />
        <CustomersSays />
      </div>
    </div>
  );
}

export default About;
