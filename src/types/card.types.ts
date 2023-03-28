export interface ICard{
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    prices?: {
      type: string;
      price: number;
    }[];
}

export interface ICardProps {
    comic: ICard;
  }