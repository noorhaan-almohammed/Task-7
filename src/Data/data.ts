import {
  CompoanyInfotype,
  contactFooterType,
  destinationsType,
  overAllType,
  serviceFooterType,
  ServiceType,
  socialMediaType,
  SpecialOffers,
  Testimonial,
  tourPackagesType,
} from "@/Types/type";
import { title } from "process";

export const links: {
  href: string;
  label: string;
}[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/tour-packages", label: "Tour Packages" },
  { href: "/contact-us", label: "Contact Us" },
];

export const Number_of_people: Array<string> = ["1-5", "6-10", "+11"];
export const date: Array<string> = [
  "Satday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
];
export const time: Array<string> = ["Morning", "Noon", "Afternoon", "Night"];
export const type: Array<string> = ["City Tour", "Museum Visit", "Adventure"];

export const Transportation: Array<string> = ["Bus", "Car", "Walking"];

export const destinations: destinationsType[] = [
  {
    id: "1",
    image: "/images/slide-card.webp",
    title: "Lucca Bike Tour",
    price: "34",
    schedule: "EVERY DAY",
    capacity: "3-10",
    description:
      "A tour of the city and its surroundings led by a professional guide led by a professional guide led by a professional guide led by a professional guide.",
  },
  {
    id: "2",
    image: "/images/slide-card2.webp",
    title: "Wine tasting In Tuscany",
    price: "34",
    schedule: "MONDAY",
    capacity: "10-30",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat the best Tuscan wine and eat the best Tuscan wine and eat the best Tuscan wine and eat.",
  },
  {
    id: "3",
    image: "/images/slide-card3.webp",
    title: "Cinque Terre Tour",
    price: "34",
    schedule: "TO BE DECIDED",
    capacity: "10-50",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough, and you can never go there enough, and you can never go there enough.",
  },
  {
    id: "4",
    image: "/images/slide-card4.webp",
    title: "Siena and Surroundings",
    price: "34",
    schedule: "TO BE DECIDED",
    capacity: "5-10",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience and the cities that surround it to experience and the cities that surround it to experience.",
  },
  {
    id: "5",
    image: "/images/slide-card2.webp",
    title: "Lucca Bike Tour",
    price: "34",
    schedule: "EVERY DAY",
    capacity: "3-10",
    description:
      "A tour of the city and its surroundings led by a professional guide led by a professional guide led by a professional guide led by a professional guide.",
  },
  {
    id: "6",
    image: "/images/slide-card.webp",
    title: "Wine tasting In Tuscany",
    price: "34",
    schedule: "MONDAY",
    capacity: "10-30",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat the best Tuscan wine and eat the best Tuscan wine and eat the best Tuscan wine and eat.",
  },
  {
    id: "7",
    image: "/images/slide-card4.webp",
    title: "Cinque Terre Tour",
    price: "34",
    schedule: "TO BE DECIDED",
    capacity: "10-50",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough, and you can never go there enough, and you can never go there enough.",
  },
  {
    id: "8",
    image: "/images/slide-card3.webp",
    title: "Siena and Surroundings",
    price: "34",
    schedule: "TO BE DECIDED",
    capacity: "5-10",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience and the cities that surround it to experience and the cities that surround it to experience.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lyod Gomez",
    avatar: "/images/person.webp",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: "2",
    name: "Lyod Gomez",
    avatar: "/images/person.webp",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: "3",
    name: "Lyod Gomez",
    avatar: "/images/person.webp",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: "4",
    name: "Lyod Gomez",
    avatar: "/images/person.webp",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];

export const compoany_info: CompoanyInfotype = {
  title: " WELCOME TO OUR SITE!",
  prief: "We are the best company for your visit",
  image: "/images/about_picture.webp",
  details:
    "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!",
  stats: [
    { id: "1", lable: "Years Experience", count: 20 },
    { id: "2", lable: "Happy Customer", count: 100 },
    { id: "3", lable: "Choice of Services", count: 15 },
    { id: "4", lable: "Professional Guides", count: 10 },
  ],
};
export const compoany_about_info: CompoanyInfotype = {
  title: " WELCOME TO OUR SITE!",
  prief: "We Are The Center Of Lucca To Offer You The Best",
  image: "/images/best_offer_lucca.webp",
  details:
    "We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!",
  stats: [
    { id: "1", lable: "Years Experience", count: 20 },
    { id: "2", lable: "Happy Customer", count: 100 },
    { id: "3", lable: "Choice of Services", count: 15 },
    { id: "4", lable: "Professional Guides", count: 10 },
  ],
};
export const special_offers: SpecialOffers = {
  title: "Get Special Offers for Organizations",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  btn: "Contact Us",
};

export const services: ServiceType[] = [
  {
    id: "1",
    image: "/images/service.webp",
    title: "Bike and rickshaw rental",
    description: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: "2",
    image: "/images/service2.webp",
    title: "Guided tour of the countryside",
    description:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: "3",
    image: "/images/service3.webp",
    title: "Taxi and NCC service",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    id: "4",
    image: "/images/service4.webp",
    title: "Bus Package",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

export const tourPackages: tourPackagesType[] = [
  {
    id: "1",
    image: "/images/rickshaw.webp",
    title: "BIKE / RICKSHAW",
    price: "10",
    features: [
      { icon: "/icons/icon_one_day.svg", label: "Your bike for a day" },
      { icon: "/icons/icon_map.svg", label: "City App" },
      { icon: "/icons/icon_city_map.svg", label: "Discount on Rickshaw" },
      { icon: "/icons/icon_support.svg", label: "Guaranteed Support" },
    ],
  },
  {
    id: "2",
    image: "/images/bike_tours.webp",
    title: "BIKE TOURS",
    price: "30",
    features: [
      {
        icon: "/icons/icon_mountain_bike.svg",
        label: "A Mountain Bike Included",
      },
      { icon: "/icons/icon_guide.svg", label: "A Guide For You" },
      { icon: "/icons/icon_water.svg", label: "Bottle of water" },
      { icon: "/icons/icon_support.svg", label: "Guaranteed Support" },
    ],
  },
  {
    id: "3",
    image: "/images/bus_trip.webp",
    title: "BUS TRIPS",
    price: "45",
    features: [
      { icon: "/icons/icon_ticket.svg", label: "Park ticket" },
      { icon: "/icons/icon_bus.svg", label: "Return bus" },
      { icon: "/icons/icon_companion.svg", label: "Companion" },
      { icon: "/icons/icon_support.svg", label: "Guaranteed Support" },
    ],
  },
  {
    id: "4",
    image: "/images/service3.webp",
    title: "TRANSFER",
    price: "10",
    features: [
      { icon: "/icons/icon_driver.svg", label: "Personal Driver" },
      { icon: "/icons/icon_location.svg", label: "Wherever You Want" },
      { icon: "/icons/icon_best_price.svg", label: "At the best price" },
      { icon: "/icons/icon_support.svg", label: "Guaranteed Support" },
    ],
  },
];

export const serviceFooter: serviceFooterType = {
  title: "Services",
  links: [
    { href: "#", label: "Bike and Rickshaw rental" },
    { href: "#", label: "Guided Tours of Lucca" },
    { href: "#", label: "Guided Bike Tour of Lucca" },
    { href: "#", label: "Trip In The Tuscan Hills" },
    { href: "#", label: "Transportation With Luxury Cars" },
    { href: "#", label: "Wine Tours By Bus With Guide" },
  ],
};

export const homeFooter: serviceFooterType = {
  title: "Home",
  links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/tour-packages", label: "Tour Packages" },
  ],
};
export const helpFooter: serviceFooterType = {
  title: "Help",
  links: [
    { href: "#", label: "Terms of Use" },
    { href: "#", label: "Privacy Policy" },
  ],
};
export const contactFooter: contactFooterType = {
  title: "Contacts",
  links: [
    {
      icon: "/icons/img_ci_location.svg",
      label: "Piazza Napoleone, Lucca, Tuscany",
    },
    {
      icon: "/icons/img_clarity_phone_handset_solid.svg",
      label: "+39 346 368 5708",
    },
    {
      icon: "/icons/img_fluent_mail_16_filled.svg",
      label: "italiainlimo@gmail.com",
    },
  ],
};
export const socialMedia: socialMediaType = {
  title: "Social Media",
  links: [
    { icon: "/icons/img_ant_design_twit.svg", alt: "Twitter", href: "#" },
    { icon: "/icons/img_entypo_social_f.svg", alt: "Facebook", href: "#" },
    {
      icon: "/icons/img_ant_design_twit_orange_600.svg",
      alt: "Instagram",
      href: "#",
    },
  ],
};
export const overAllData: overAllType[] = [
  {icon: "/icons/icon_map_overall.svg", label: "Complete Packages For All Your Wishes"},
  {icon: "/icons/icon_experience.svg", label: "Over 30 Years Of Experience"},
  {icon: "/icons/icon_guide_overall.svg", label: "Expert Guides For You"},
  {icon: "/icons/icon_best_price_overall.svg", label: "Guaranteed fun at the best price!"}
]