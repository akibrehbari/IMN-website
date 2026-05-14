// Document schemas
import { story } from "./documents/story";
import { show } from "./documents/show";
import { episode } from "./documents/episode";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { partner } from "./documents/partner";
import { teamMember } from "./documents/teamMember";
import { award } from "./documents/award";
import { siteSettings } from "./documents/siteSettings";

// Object schemas
import { blockContent } from "./objects/blockContent";
import { seo } from "./objects/seo";
import { youtubeEmbed } from "./objects/youtubeEmbed";
import { statItem } from "./objects/statItem";
import { socialLinks } from "./objects/socialLinks";
import { cta } from "./objects/cta";

export const schemaTypes = [
  // Documents
  story,
  show,
  episode,
  author,
  category,
  partner,
  teamMember,
  award,
  siteSettings,
  // Objects
  blockContent,
  seo,
  youtubeEmbed,
  statItem,
  socialLinks,
  cta,
];
