import { createClient } from "contentful";

export const fetchSpecificEntries = async ({
  content_type,
  title,
  multiple = false,
  order,
}: {
  content_type: string;
  title?: string;
  multiple?: boolean;
  order?: string;
}) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const query = {
    content_type,
    ...(title && { "fields.title": title }),
    limit: multiple ? 100 : 1,
    order,
  };

  const entries = await client.getEntries(query).then((res) => res.items);

  return entries;
};
