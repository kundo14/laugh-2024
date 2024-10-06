import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getComponent = (component) => {

  if (!component || !component.sys || !component.sys.contentType || !component.sys.contentType.sys || !component.sys.contentType.sys.id) {
    return null;
  }

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
        type: "text-slider",
        text: component.fields.text,
      };
    case "imageTextGallery":
      return {
        type: "image-text-gallery",
        images: component.fields.components.map((component) => {
          return {
            text: component.fields.text,
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
    heroDescription: page.items[0].fields.heroDescription,
    deliverables: page.items[0].fields.deliverables,
    bottomVideoLink: page.items[0].fields.bottomVideoLink,
    components: page.items[0].fields.customComponents && page.items[0].fields.customComponents.map((component) => getComponent(component)),
  };

  return cleanWork;
}

export const getWorksByTag = async (tag) => {
  try {
    // Ensure that the tag is passed in lowercase
    const page = await client.getEntries({
      content_type: "workTemplate",
      "fields.tags[in]": tag.toLowerCase(), // Use [in] operator to filter by the tag
      include: 5, // Include nested data if needed
    });

    if (!page.items.length) {
      return []; // Return an empty array if no works are found
    }

    // Map the results to return the relevant data
    const cleanWorks = page.items.map((item) => ({
      name: item.fields.name,
      slug: item.fields.slug,
      imagePreview: `https:${item.fields.imagePreview.fields.file.url}`,
      tags: item.fields.tags,
      date: {
        start: item.fields.startYear,
        end: item.fields.endYear,
      },
      featured: item.fields.featured,
    }));

    return cleanWorks;
  } catch (error) {
    console.error("Error fetching works by tag:", error);
    return []; // Return an empty array if an error occurs
  }
};

export const getWorks = async () => {
  const page = await client.getEntries({
    content_type: "workTemplate",
    include: 5,
  });

  const cleanWorks = page.items.map((item) => ({
    name: item.fields.name,
    slug: item.fields.slug,
    imagePreview: item.fields.imagePreview.fields ? `https:${item.fields.imagePreview.fields.file.url}` : null,
    tags: item.fields.tags,
    date: {
      start: item.fields.startYear,
      end: item.fields.endYear,
    },
    featured: item.fields.featured,
  }))

  return cleanWorks;
};



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
