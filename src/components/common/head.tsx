import NextHead from "next/head";

export type HeadProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
};

export const defaultMeta: HeadProps = {
  title: "Laugh | share laughs, share sports",
  description: `Connecting fans through amazing stories.`,
  canonical: "https://wearelaugh.com/",
  ogImage: "https://wearelaugh.com/gray-og.jpg",
  // keywords for a sports marketing agency website.
  keywords:
    "marketing, sports, agency, digital, strategy, social media, branding, sponsorship, sports marketing, sports agency, sports digital, sports strategy, sports social media, sports branding, sports sponsorship, marketing deportivo, agencia deportiva, estrategia digital, redes sociales, patrocinio, marketing deportivo en españa, agencia deportiva en españa, estrategia digital en españa, redes sociales en españa, patrocinio en españa",
};

const Head = ({ headProps = defaultMeta }: { headProps?: HeadProps }) => {
  return (
    <>
      <NextHead>
        <title>{headProps.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="language" content="es_ES" />
        <meta property="fb:app_id" content="866902667619914" />
        <meta
          name="keywords"
          content={headProps.keywords || defaultMeta.keywords}
        />
        <meta name="author" content={headProps.title} />
        <link rel="icon" type="image/svg" href="/isologo.svg" />
        <link rel="icon" type="image/png" href="/isologo.png" />
        <meta name="description" content={headProps.description} />
        {/* Open Graph */}
        <meta property="og:url" content={headProps.canonical} key="ogurl" />
        <meta property="og:image" content={headProps.ogImage} key="ogimage" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content={headProps.title}
          key="ogsitename"
        />
        <meta property="og:title" content={headProps.title} key="ogtitle" />
        <meta
          property="og:description"
          content={headProps.description}
          key="ogdesc"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:image" content={headProps.ogImage} />
        <meta
          name="twitter:image:alt"
          content={`Imagen de portada del artículo: ${headProps.title}`}
        />
        <meta name="twitter:title" content={headProps.title} />
        <meta name="twitter:description" content={headProps.description} />
      </NextHead>
    </>
  );
};

export default Head;
