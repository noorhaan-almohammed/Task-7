export interface SliderItem {
  id: string;
  image: string;
  title: string;
  price: string;
  schedule: string;
  capacity: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  content: string;
}

export interface Stat {
  id: string;
  lable: string;
  count: number;
}

export interface destinationsType {
  id: string;
  image: string;
  title: string;
  price: string;
  schedule: string;
  capacity: string;
  description: string;
}

export interface CompoanyInfotype {
  title: string;
  prief: string;
  image: string;
  details: string;
  stats: Stat[];
}

export interface SpecialOffers {
  title: string;
  description: string;
  btn: string;
}
export interface ServiceType {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface tourPackagesType {
  id: string;
  image: string;
  title: string;
  price: string;
  features: {
    icon: string;
    label: string;
  }[];
}

export interface serviceFooterType {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

export interface contactFooterType {
  title: string;
  links: {
    icon: string;
    label: string;
  }[];
}
export interface socialMediaType {
  title: string;
  links: {
    icon: string;
    alt: string;
    href: string;
  }[];
}
export interface overAllType {
    icon: string;
    label: string;
}