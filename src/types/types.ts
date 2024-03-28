export type FooterLink = {
  id: string;
  title: string;
  url: string;
};

export type Language = {
  id: string;
  title: string;
  url: string;
};

export type Product = {
  id: string;
  title: string;
  newPrice: number;
  oldPrice?: number;
  rate: number;
  src: string;
};

export type CartItem = Product & {
  total: number;
};

export type Route = {
  id: string;
  path: string;
  component: JSX.Element;
};

export type SocialLink = {
  id: string;
  url: string;
  icon: string;
};
