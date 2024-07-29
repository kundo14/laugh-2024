export type Work = {
  name: string;
  slug: string;
  imagePreview: string;
  tags: string[];
  date: {
    start: number;
    end: number;
  };
  heroGift: string;
  heroTitle: string;
  heroDescription: string;
  deliverables: string[];
  images: string[];
  components: any[];
  bottomVideoLink: string;
};

export type WorkPreview = Pick<
  Work,
  "name" | "slug" | "imagePreview" | "tags" | "date"
>;

export type Quote = {
  quote: string;
  author: string;
};
