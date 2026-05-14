import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Ibex Media Network",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "heroVideoUrl",
      title: "Homepage Hero Video URL",
      type: "url",
      description: "YouTube URL for homepage hero video",
    }),
    defineField({
      name: "heroHeadline",
      title: "Homepage Hero Headline",
      type: "string",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Homepage Hero Subheadline",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "IMN In Numbers",
      type: "array",
      of: [{ type: "statItem" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "socialLinks",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
    }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "seo",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
    }),
    defineField({
      name: "announcementBar",
      title: "Announcement Bar Text",
      type: "string",
      description: "Optional top-of-page announcement. Leave empty to hide.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
