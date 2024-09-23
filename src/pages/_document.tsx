import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="preload"
          href="/gifs/adidas.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/gifs/bplay.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="preload" href="/gifs/puma.mp4" as="video" type="video/mp4" />
        <link
          rel="preload"
          href="/gifs/corona.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/gifs/netflix.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="preload" href="/gifs/ea.mp4" as="video" type="video/mp4" />
        <link
          rel="preload"
          href="/images/textures/paper.jpg"
          as="image"
          type="image/jpg"
        />
        <link
          rel="preload"
          href="/images/textures/texture.jpg"
          as="image"
          type="image/jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
