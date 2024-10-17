import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { fetchSpecificEntries } from "./services/contentful";

export async function generateMetadata(): Promise<Metadata> {
  const seoResponse = await fetchSpecificEntries({
    content_type: "seoConfig",
    title: "LK Portfolio",
  });
  const seoData = seoResponse[0].fields;

  return {
    metadataBase: new URL(`${seoData.canonicalUrl}`),
    title: `${seoData.pageTitle}`,
    description: `${seoData.seoDescription}`,
    authors: {
      name: `${seoData.author}`,
    },
    robots: `${seoData.canonicalUrl}`,
    openGraph: {
      title: `${seoData.pageTitle}`,
      description: `${seoData.seoDescription}`,
      images: [
        {
          url: `${seoData.seoImage}`,
          alt: `${seoData.seoImage}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoData.pageTitle}`,
      description: `${seoData.seoDescription}`,
      images: `${seoData.seoImage}`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
