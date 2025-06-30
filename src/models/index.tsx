export type Quote = {
  type: "quote";
  quote: string;
  author?: string | null;
};

export type GalleryRow = {
  assets: string[];
  caption?: string | null;
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

export type ImageGalleryProps = {
  type: "gallery";
  rows: GalleryRow[];
};

export type CustomComponent =
  | Quote
  | TextSlider
  | ImageTextGalleryProps
  | ImageGalleryProps;

export type WorkTemplateProps = {
  name: string;
  slug: string;
  imagePreview: string;
  tags: string[];
  date: {
    start: number;
    end: number;
  };
  imageGallery?: { url: string; description: string }[] | null;
  heroVideo: string;
  heroTitle: any;
  heroDescription?: any;
  featured: boolean;
  deliverables: string[];
  components?: CustomComponent[];
  bottomVideoLink?: string | null;
  youTubeVideos?: string[] | null;
};

export type WorkPreview = Pick<
  WorkTemplateProps,
  "name" | "slug" | "imagePreview" | "tags" | "date" | "featured" | "heroVideo"
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

export type Client = {
  name: string;
  logo: string;
};
