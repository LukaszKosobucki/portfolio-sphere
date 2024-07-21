import { createClient } from "contentful";

export default async function fetchContentful() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const about = await client
    .getEntry("1zmTm1y1WP0WJrewEidzPn")
    .then((entry) => {
      return entry;
    })
    .catch(console.error);

  return {
    title: about?.fields.title as string,
    description: about?.fields.description,
  };
}
