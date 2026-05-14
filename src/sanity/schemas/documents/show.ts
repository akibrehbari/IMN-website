import { defineField, defineType } from "sanity";

export const show = defineType({
  name: "show",
  title: "Show",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "showType",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Video Series", value: "video" },
          { title: "Podcast", value: "podcast" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubePlaylistId",
      title: "YouTube Playlist ID",
      type: "string",
      description: "For video series: the YouTube playlist ID to fetch episodes",
    }),
    defineField({
      name: "podcastFeedUrl",
      title: "Podcast Feed URL",
      type: "url",
      description: "For podcasts: RSS feed URL",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail",
      type: "showType",
    },
    prepare({ title, media, type }) {
      return {
        title,
        subtitle: type === "video" ? "Video Series" : "Podcast",
        media,
      };
    },
  },
});
