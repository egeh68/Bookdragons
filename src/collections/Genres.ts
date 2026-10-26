import { slugField, type CollectionConfig } from "payload";

export const Genres: CollectionConfig = {
  slug: "genres",
  admin: {
    useAsTitle: "name",
  },

  fields: [
    {
      name: "name",
      type: "text",
      label: "TiTTEL",
      required: true,
    },
    slugField(),
    {
      name: "Summary",
      type: "text",
      label: "oppsummering av boka",
      required: true,
    },
  ],
};
