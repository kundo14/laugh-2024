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

export type CarouselSlideProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export type WorkTemplateProps = {
  name: string;
  slug: string;
  heroVideo: string;
  imagePreview: string;
  tags: string[];
  imageGallery: { url: string; description: string }[];
  startYear: number;
  endYear?: number;
  customComponents: any[];
  featured: boolean;
  heroTitle: string;
  heroDescription: string;
  deliverables: string[];
  bottomVideoLink: string;
};
