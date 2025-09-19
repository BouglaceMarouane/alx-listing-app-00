import { StaticImageData } from "next/image";

interface thumbimageProps {
  image: StaticImageData | string; // 👈 for static imports
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  thumbimageProps: thumbimageProps;
//   image: string;
  discount: string;
}
