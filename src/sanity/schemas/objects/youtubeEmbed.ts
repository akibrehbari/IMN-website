import { defineField, defineType } from "sanity";

export const youtubeEmbed = defineType({
  name: "youtubeEmbed",
  title: "YouTube Video",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "YouTube URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  preview: {
    select: {
      url: "url",
      caption: "caption",
    },
    prepare({ url, caption }) {
      return {
        title: caption || "YouTube Video",
        subtitle: url,
      };
    },
  },
});
