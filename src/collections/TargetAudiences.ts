import type { CollectionConfig } from "payload";

export const TargetAudiences: CollectionConfig = {
  slug: "target-audiences",

  admin: {
    useAsTitle: "name",
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
