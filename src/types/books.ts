export interface BookVolumeInfo {
  title: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: {
    type: string;
    identifier: string;
  }[];
  readingModes?: {
    text: boolean;
    image: boolean;
  };
  pageCount?: number;
  printType?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface BookSaleInfo {
  country: string;
  saleability: string;
  isEbook?: boolean;
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
  retailPrice?: {
    amount: number;
    currencyCode: string;
  };
  buyLink?: string;
  offers?: {
    finskyOfferType: number;
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
    retailPrice?: {
      amount: number;
      currencyCode: string;
    };
    giftable: boolean;
  }[];
}

export interface BookAccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub?: {
    isAvailable: boolean;
  };
  pdf?: {
    isAvailable: boolean;
  };
  webReaderLink?: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface BookSearchInfo {
  textSnippet?: string;
}

export interface BookItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: BookVolumeInfo;
  saleInfo: BookSaleInfo;
  accessInfo: BookAccessInfo;
  searchInfo: BookSearchInfo;
}

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items?: BookItem[];
}
