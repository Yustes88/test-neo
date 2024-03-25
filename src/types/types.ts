export type Product = {
  id: string;
  title: string;
  newPrice: number;
  oldPrice?: number;
  rate: number;
  src: string;
};

export type FooterLink = {
  id: string;
  title: string;
  url: string;
};
