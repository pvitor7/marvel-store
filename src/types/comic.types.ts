export interface IPrice {
    type: string;
    price: number;
  }
  
  export interface IComic {
    id: number; 
    title: string;
    type: string;
    price: number;
    img: string;
    quantity: number;
    creators: {items: ICreators[]};
    thumbnail: {extension: string, path: string}
    pageCount: string;
    description: string;
    prices: IPrice[];
  }
  
  export interface ICreators {
    name: string;
    role: string;
  }
  

  export interface IComicRequest {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: Array<{
      type: string;
      language: string;
      text: string;
    }>;
    resourceURI: string;
    urls: Array<{
      type: string;
      url: string;
    }>;
    series: {
      resourceURI: string;
      name: string;
    };
    variants: Array<{
      resourceURI: string;
      name: string;
    }>;
    collections: Array<any>;
    collectedIssues: Array<any>;
    dates: Array<{
      type: string;
      date: string;
    }>;
    prices: Array<{
      type: string;
      price: number;
    }>;
    thumbnail: {
      path: string;
      extension: string;
    };
    images: Array<{
      path: string;
      extension: string;
    }>;
    creators: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
        role: string;
      }>;
      returned: number;
    };
    characters: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
      }>;
      returned: number;
    };
    stories: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
        type: string;
      }>;
      returned: number;
    };
    events: {
      available: number;
      collectionURI: string;
      items: Array<{
        resourceURI: string;
        name: string;
      }>;
      returned: number;
    };
}
