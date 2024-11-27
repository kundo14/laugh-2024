export type Quote = {
  type: "quote";
  quote: string;
  author?: string | null;
};

export type TextSlider = {
  type: "text-slider";
  text: string;
};

export type ImageTextProps = {
  image: string;
  text: string;
};

export type ImageTextGalleryProps = {
  type: "image-text-gallery";
  images: ImageTextProps[];
};

export type CustomComponent = Quote | TextSlider | ImageTextGalleryProps;

export type WorkTemplateProps = {
  name: string;
  slug: string;
  imagePreview: string;
  tags: string[];
  date: {
    start: number;
    end: number;
  };
  imageGallery: { url: string; description: string }[];
  heroVideo: string;
  heroTitle: any;
  heroDescription: any;
  featured: boolean;
  deliverables: string[];
  components: CustomComponent[];
  bottomVideoLink?: string | null;
};

export type WorkPreview = Pick<
  WorkTemplateProps,
  "name" | "slug" | "imagePreview" | "tags" | "date" | "featured"
>;

export type CarouselSlideProps = {
  title: string;
  image: string;
};

export type Peep = {
  name: string;
  role: string;
  image: string;
  location: string;
};
