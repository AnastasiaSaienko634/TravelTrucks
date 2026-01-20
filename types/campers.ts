export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  consumption: string;
  height: string;
  length: string;
  width: string;
  tank: string;
  form: string;

  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;

  gallery: {
    original: string;
    thumb?: string;
  }[];

  reviews?: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}
