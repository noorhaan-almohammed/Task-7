import Hero from "@/components/Hero";
import TourSearch from "@/components/TourSearchComponents/TourSearch";
import { compoany_info, services, special_offers, tourPackages } from "@/Data/data";
import BookBike from "@/sections/BookBike";
import CompoanyInfo from "@/sections/CompoanyInfo";
import CustomersSays from "@/sections/CustomersSays";
import PopularDestinantions from "@/sections/PopularDestinantions";
import Services from "@/sections/Services";
import SpecialOffer from "@/sections/SpecialOffer";
import TourPackages from "@/sections/TourPackages";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-open-sans">
      <Hero
        img="/images/hero_home.webp"
        title="Enjoy in the best way!"
        description="Enjoy our services for your trip anytime"
        gap="gap-6 xl:gap-10 2xl:gap-[60px]"
      >
        <div className="show-md-minh-770 bg-gradient-to-t bg-[#f7aa75] to-[#f8caac] py-5 md:to-transparent md:bg-transparent">
          <TourSearch />
        </div>
      </Hero>

      <div className="show-maxh-769 bg-gradient-to-t bg-[#f7aa75] to-[#f8caac] py-5">
        <TourSearch />
      </div>
      <div className="space-y-15 2xl:space-y-30 py-8 md:py-15 2xl:py-31">
       <PopularDestinantions/>
       <CompoanyInfo content = {compoany_info} imgClass_1="w-80 h-auto xl:w-[408] xl:h-[600px]" imgClass_2=" w-62 h-auto"/>
       <SpecialOffer content = {special_offers}/>
        <div className="space-y-16">
          <Services services={services} />
        <BookBike/>
        </div>
        <TourPackages content={tourPackages}/>
       <CustomersSays/>
      
      </div>
    </div>
  );
}
