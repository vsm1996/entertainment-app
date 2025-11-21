export interface Icon {
  fill?: string;
  className?: string;
}

export interface ItemProp {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: any;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
}
