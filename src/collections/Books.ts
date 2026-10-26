import { slugField, type CollectionConfig } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "TiTTEL",
      required: true,
    },
    slugField(),
    {
      name: "summary",
      type: "text",
      label: "oppsummering av boka",
      required: true,
    },
    {
      name: "price",
      type: "number",
      label: "pris",
      min: 0,
      required: true,
    },
    {
      name: "authors",
      type: "relationship",
      label: "forfatter",
      relationTo: "authors",
      hasMany: false,
      required: true,
    },
    {
      name: "genres",
      type: "relationship",
      relationTo: "genres",
      hasMany: true,
      required: false,
    },
    {
      name: "targetAudience",
      type: "relationship",
      relationTo: "target-audiences",
      hasMany: true,
      required: false,
    },
  ],
};
