import { defineField, defineType } from "sanity";

export const statItem = defineType({
  name: "statItem",
  title: "Stat",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: 'e.g. "YouTube Subscribers"',
    }),
    defineField({
      name: "value",
      title: "Display Value",
      type: "string",
      description: 'e.g. "500K+"',
    }),
    defineField({
      name: "numericValue",
      title: "Numeric Value",
      type: "number",
      description: "The raw number for animation (e.g. 500000)",
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: 'e.g. "+", "K", "M"',
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "value",
    },
  },
});
