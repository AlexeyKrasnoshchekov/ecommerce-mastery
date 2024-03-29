import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "2mn3ixwo",
  dataset: "production",
  apiVersion: "2022-07-15",
  useCdn: false,
  token: "process.env.NEXT_PUBLIC_SANITY_TOKEN",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(sorce);
