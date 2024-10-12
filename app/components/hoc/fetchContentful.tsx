import { createClient } from "contentful";

export default async function fetchContentful() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });
  let contentObj: {
    [key: string]: any;
  } = { experience: [], projects: [], skills: [] };

  const content = await client
    .getEntries()
    .then((entries) => {
      entries.items.map((item) => {
        const id = item?.sys.contentType.sys.id;
        const key = (
          item.fields.name
            ? (item.fields.name as string)
            : (item.fields.title as string)
        )
          .replace(/\s+/g, "")
          .toLocaleLowerCase();
        if (id === "experience") {
          // contentObj.experience.push({ [key]: item.fields });
          contentObj.experience = [...contentObj.experience, item.fields];
        } else if (id === "project") {
          contentObj.projects = [...contentObj.projects, item.fields];
        } else if (id === "skill") {
          contentObj.skills = [...contentObj.skills, item.fields];
        } else {
          contentObj[key] = item.fields;
        }
      });
      return contentObj;
    })
    .catch(console.error);

  return { ...content };
}
