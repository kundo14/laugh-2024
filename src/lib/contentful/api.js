import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getComponent = (component) => {
  const componentType = component.sys.contentType.sys.id;

  switch (componentType) {
    case "quoteComponent":
      return {
        type: "quote",
        quote: component.fields.quote,
        author: component.fields.author,
      };
    case "slidingTextComponent":
      return {
        type: "slidingText",
        text: component.fields.text,
      };
    case "imageTextGallery":
      return {
        type: "imageTextGallery",
        items: component.fields.components.map((component) => {
          return {
            text: component.fields.name,
            image: `https:${component.fields.image.fields.file.url}`,
          };
        }),
      };
      default:
        return null;
    }
}

export const getWorkTemplate = async (slug) => {
  const page = await client.getEntries({
    content_type: "workTemplate",
    "fields.slug": slug,
    include: 5,
  });

  const cleanWork = {
    name: page.items[0].fields.name,
    slug: page.items[0].fields.slug,
    heroVideo: `https:${page.items[0].fields.heroVideo.fields.file.url}`,
    imagePreview: `https:${page.items[0].fields.imagePreview.fields.file.url}`,
    tags: page.items[0].fields.tags,
    imageGallery: page.items[0].fields.imageGallery.map((image) => {
      return {
        url: `https:${image.fields.file.url}`,
        description: image.fields.description,
      };
    }),
    date: {
      start: page.items[0].fields.startYear,
      end: page.items[0].fields.endYear,
    },
    featured: page.items[0].fields.featured,
    heroTitle: page.items[0].fields.heroTitle,
    deroDescription: page.items[0].fields.heroDescription,
    deliverables: page.items[0].fields.deliverables,
    bottomVideoLink: page.items[0].fields.bottomVideoLink,
    components: page.items[0].fields.customComponents.map((component) => getComponent(component)),
  };

  return cleanWork;
}

export const getWorksRoutes = async () => {
  const page = await client.getEntries({
    content_type: "workTemplate",
  });

  // we get the possible slugs for the getStaticPaths
  const routes = page.items.map((p) => {
    return p.fields.slug;
  });

  return routes;
};
