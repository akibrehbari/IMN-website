import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "iziejn93",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// ============================================================
// SEED DATA
// ============================================================

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "Ibex Media Network",
  tagline: "Digital-First News from Pakistan",
  heroHeadline: "Stories That Move Mountains",
  heroSubheadline:
    "Pakistan's digital-first news platform amplifying underrepresented voices through impactful video journalism.",
  stats: [
    { _key: "stat1", _type: "statItem", label: "YouTube Subscribers", value: "500K+", numericValue: 500000, suffix: "+" },
    { _key: "stat2", _type: "statItem", label: "Countries Reached", value: "30+", numericValue: 30, suffix: "+" },
    { _key: "stat3", _type: "statItem", label: "Stories Published", value: "1000+", numericValue: 1000, suffix: "+" },
    { _key: "stat4", _type: "statItem", label: "Awards Won", value: "15+", numericValue: 15, suffix: "+" },
  ],
  socialLinks: {
    _type: "socialLinks",
    youtube: "https://www.youtube.com/@ibexmedianetwork",
    facebook: "https://www.facebook.com/ibexmedianetwork",
    instagram: "https://www.instagram.com/ibexmedianetwork",
    twitter: "https://twitter.com/ibexmedia",
  },
  contactEmail: "info@ibexmedianetwork.com",
  footerText: "Ibex Media Network (IMN) is Pakistan's leading digital-first news platform, dedicated to amplifying underrepresented voices through impactful video journalism.",
};

const categories = [
  {
    _id: "category-climate-change",
    _type: "category",
    title: "Climate Change",
    slug: { _type: "slug", current: "climate-change" },
    description: "Tracking environmental change, climate policy, and community resilience across Pakistan.",
    color: "#2E7D32",
    featured: true,
  },
  {
    _id: "category-gilgit-baltistan",
    _type: "category",
    title: "Gilgit Baltistan",
    slug: { _type: "slug", current: "gilgit-baltistan" },
    description: "Stories from the roof of the world — culture, people, environment, and transformation of Pakistan's northern frontier.",
    color: "#1565C0",
    featured: true,
  },
  {
    _id: "category-womens-space",
    _type: "category",
    title: "Women's Space",
    slug: { _type: "slug", current: "womens-space" },
    description: "Amplifying women's voices, celebrating achievements, and highlighting the challenges and triumphs of women across Pakistan.",
    color: "#7B1FA2",
    featured: true,
  },
  {
    _id: "category-arts-culture",
    _type: "category",
    title: "Arts & Culture",
    slug: { _type: "slug", current: "arts-culture" },
    description: "Exploring the vibrant arts, music, and cultural heritage of Pakistan.",
    color: "#E65100",
    featured: false,
  },
  {
    _id: "category-politics",
    _type: "category",
    title: "Politics & Society",
    slug: { _type: "slug", current: "politics-society" },
    description: "In-depth political analysis and social commentary from across Pakistan.",
    color: "#C62828",
    featured: false,
  },
];

const authors = [
  {
    _id: "author-aamir-khan",
    _type: "author",
    name: "Aamir Khan",
    slug: { _type: "slug", current: "aamir-khan" },
    role: "Senior Reporter",
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Aamir Khan is a senior reporter at IMN covering climate change and environmental stories across northern Pakistan. With over 10 years of experience in journalism, he brings deep local knowledge to his reporting.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "author-fatima-ali",
    _type: "author",
    name: "Fatima Ali",
    slug: { _type: "slug", current: "fatima-ali" },
    role: "Women's Rights Correspondent",
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Fatima Ali covers women's rights and empowerment stories. She is passionate about amplifying women's voices in media and has reported from across Pakistan.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "author-bilal-shah",
    _type: "author",
    name: "Bilal Shah",
    slug: { _type: "slug", current: "bilal-shah" },
    role: "Culture & Arts Editor",
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Bilal Shah is the culture and arts editor at IMN. He covers Pakistan's rich cultural heritage, traditional music, and contemporary art scenes.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
];

const stories = [
  {
    _id: "story-vanishing-glaciers",
    _type: "story",
    title: "The Vanishing Glaciers of Gilgit-Baltistan: A Climate Emergency",
    slug: { _type: "slug", current: "vanishing-glaciers-gb" },
    subtitle: "How rising temperatures are reshaping the landscape and lives of northern Pakistan's mountain communities",
    excerpt: "As global temperatures rise, the glaciers of Gilgit-Baltistan are retreating at an alarming rate. Communities that have depended on these frozen reservoirs for generations now face an uncertain future.",
    publishedAt: "2025-03-01T10:00:00Z",
    featured: true,
    author: { _type: "reference", _ref: "author-aamir-khan" },
    categories: [
      { _type: "reference", _ref: "category-climate-change", _key: "cat1" },
      { _type: "reference", _ref: "category-gilgit-baltistan", _key: "cat2" },
    ],
    tags: ["Climate", "Glaciers", "Gilgit-Baltistan", "Environment", "Water Crisis"],
    body: [
      {
        _key: "block1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "High in the Karakoram mountains, where Pakistan meets China and Afghanistan, the glaciers are disappearing. These massive ice formations, some stretching for kilometers, have been the lifeblood of communities in Gilgit-Baltistan for centuries. They feed rivers, irrigate farms, and sustain ecosystems. But now, they are vanishing at an unprecedented rate.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "The Scale of the Crisis",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "According to recent studies, Pakistan has lost nearly 30% of its glacier cover in the past five decades. The Passu Glacier, once a tourist attraction visible from the Karakoram Highway, has retreated by over 2 kilometers since 1990. Scientists predict that at the current rate of warming, many smaller glaciers could disappear entirely within the next 30 years.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block4",
        _type: "block",
        style: "blockquote",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "\"We used to have water flowing through our channels all summer. Now, by August, the streams run dry. Our orchards are dying, and our children are leaving for the cities.\" — Muhammad Ali, a farmer from Passu village",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block5",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Glacial Lake Outburst Floods",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "As glaciers melt, they form unstable lakes dammed by loose moraine deposits. When these natural dams break, the resulting Glacial Lake Outburst Floods (GLOFs) can be devastating. In 2024 alone, Pakistan experienced over 20 GLOF events, destroying homes, bridges, and farmland across Gilgit-Baltistan and Chitral.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block7",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Community Resilience and Adaptation",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Despite these challenges, communities in Gilgit-Baltistan are not simply waiting for disaster. Local organizations have established early warning systems, built protective walls around vulnerable villages, and begun transitioning to drought-resistant crops. The Aga Khan Agency for Habitat has been instrumental in training communities to monitor glacial lakes and prepare evacuation plans.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "The story of Gilgit-Baltistan's glaciers is ultimately a global story. These mountains and their frozen reserves affect water security for over a billion people downstream in the Indus River basin. What happens here will ripple across South Asia and beyond.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "story-women-digital-media",
    _type: "story",
    title: "Women Leading Change in Pakistan's Digital Media",
    slug: { _type: "slug", current: "women-digital-media" },
    subtitle: "Meet the women journalists breaking barriers in Pakistan's evolving media landscape",
    excerpt: "From newsrooms to YouTube channels, Pakistani women journalists are redefining storytelling and challenging traditional narratives in the country's rapidly growing digital media space.",
    publishedAt: "2025-02-20T10:00:00Z",
    featured: true,
    author: { _type: "reference", _ref: "author-fatima-ali" },
    categories: [
      { _type: "reference", _ref: "category-womens-space", _key: "cat1" },
    ],
    tags: ["Women", "Media", "Digital", "Journalism", "Empowerment"],
    body: [
      {
        _key: "block1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "In a media landscape long dominated by men, a new generation of Pakistani women journalists is carving out space — not just in traditional newsrooms, but across YouTube, podcasts, and social media platforms that reach millions.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "The Digital Revolution",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "With over 100 million internet users and one of the fastest-growing smartphone markets in the world, Pakistan's digital ecosystem is booming. Women journalists are leveraging these platforms to tell stories that mainstream media often overlooks — from rural health challenges to women's entrepreneurship in conservative communities.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block4",
        _type: "block",
        style: "blockquote",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "\"Digital media gave us a voice that traditional newsrooms never would. We can tell our own stories, in our own way, to audiences who actually want to hear them.\" — Sana Mirza, digital journalist",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "The impact of these women-led digital platforms extends beyond journalism. They are building communities, mentoring young women, and challenging societal norms about what women can achieve in Pakistan's public sphere. Their work is proof that meaningful change often starts with a story well told.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "story-music-revival",
    _type: "story",
    title: "Inside the Traditional Music Revival of the Northern Areas",
    slug: { _type: "slug", current: "music-revival-north" },
    subtitle: "A new generation blends ancient instruments with modern sounds",
    excerpt: "Young musicians in Gilgit-Baltistan are breathing new life into centuries-old musical traditions, creating a fusion that honors the past while speaking to the present.",
    publishedAt: "2025-02-10T10:00:00Z",
    featured: true,
    author: { _type: "reference", _ref: "author-bilal-shah" },
    categories: [
      { _type: "reference", _ref: "category-arts-culture", _key: "cat1" },
      { _type: "reference", _ref: "category-gilgit-baltistan", _key: "cat2" },
    ],
    tags: ["Music", "Culture", "Heritage", "Gilgit-Baltistan", "Arts"],
    body: [
      {
        _key: "block1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "In the valleys of Gilgit-Baltistan, where snow-capped peaks meet ancient trade routes, a musical revolution is quietly underway. Young musicians are picking up instruments their grandparents played — the rubab, the surnai, the daf — and creating something entirely new.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Ancient Sounds, Modern Ears",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "The rubab, a stringed instrument with origins along the Silk Road, is experiencing a renaissance. Young players are combining its haunting tones with electronic beats, guitar riffs, and hip-hop rhythms. The result is a sound that is unmistakably rooted in the mountains of Pakistan but resonates with global audiences.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Festivals like the Silk Route Festival and the Shandur Polo Festival have become platforms for these new artists to reach wider audiences. Social media, particularly YouTube and Instagram, has allowed musicians from remote valleys to share their work with millions around the world.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "story-tech-startups-hunza",
    _type: "story",
    title: "Youth Entrepreneurship: Tech Startups from Hunza Valley",
    slug: { _type: "slug", current: "tech-startups-hunza" },
    excerpt: "Young entrepreneurs in Pakistan's north are launching tech startups that are gaining global attention and transforming their communities.",
    publishedAt: "2025-01-28T10:00:00Z",
    featured: false,
    author: { _type: "reference", _ref: "author-fatima-ali" },
    categories: [
      { _type: "reference", _ref: "category-gilgit-baltistan", _key: "cat1" },
    ],
    tags: ["Technology", "Startups", "Hunza", "Youth", "Innovation"],
    body: [
      {
        _key: "block1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Hunza Valley, known worldwide for its stunning landscapes and longevity of its residents, is emerging as an unlikely tech hub. Young entrepreneurs, many educated at local universities and online platforms, are building startups that solve real problems for their communities while gaining traction globally.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "From e-commerce platforms connecting local artisans with international buyers to apps that help farmers monitor crop health using satellite data, these startups represent a new chapter in the region's development story.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: "story-renewable-energy",
    _type: "story",
    title: "Pakistan's Renewable Energy Revolution",
    slug: { _type: "slug", current: "renewable-energy-pakistan" },
    excerpt: "From solar farms in Sindh to hydropower in the north, Pakistan is investing heavily in green energy as the country grapples with an energy crisis and climate change.",
    publishedAt: "2025-01-15T10:00:00Z",
    featured: false,
    author: { _type: "reference", _ref: "author-aamir-khan" },
    categories: [
      { _type: "reference", _ref: "category-climate-change", _key: "cat1" },
    ],
    tags: ["Energy", "Solar", "Climate", "Sustainability"],
    body: [
      {
        _key: "block1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "Pakistan, long plagued by energy shortages, is turning to renewable sources at a scale that would have been unimaginable a decade ago. The country's solar capacity has tripled in the past three years, and hydropower projects in the north are bringing electricity to communities that have relied on firewood for generations.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _key: "block2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "child1",
            _type: "span",
            text: "In Sindh and Punjab, vast solar farms are transforming the landscape. The Quaid-e-Azam Solar Park in Bahawalpur is one of the largest in the world, with a capacity that powers hundreds of thousands of homes. Meanwhile, in the mountainous north, micro-hydropower projects are proving that clean energy solutions can work at community scale.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
  },
];

const shows = [
  {
    _id: "show-originals",
    _type: "show",
    title: "IMN Originals",
    slug: { _type: "slug", current: "originals" },
    description: "In-depth original documentaries and investigative reports from across Pakistan. Our flagship series exploring untold stories.",
    showType: "video",
    featured: true,
  },
  {
    _id: "show-gb-diaries",
    _type: "show",
    title: "GB Diaries",
    slug: { _type: "slug", current: "gb-diaries" },
    description: "Stories from the mountains of Gilgit-Baltistan — the people, cultures, and landscapes of Pakistan's northern frontier.",
    showType: "video",
    featured: true,
  },
  {
    _id: "show-climate-watch",
    _type: "show",
    title: "Climate Watch",
    slug: { _type: "slug", current: "climate-watch" },
    description: "Tracking environmental change and its impact on communities across Pakistan. From glaciers to coastlines.",
    showType: "video",
    featured: true,
  },
  {
    _id: "show-her-voice",
    _type: "show",
    title: "Her Voice",
    slug: { _type: "slug", current: "her-voice" },
    description: "A podcast amplifying women's stories and perspectives from Pakistan. Conversations that matter.",
    showType: "podcast",
    featured: true,
  },
];

const partners = [
  {
    _id: "partner-undp",
    _type: "partner",
    name: "UNDP Pakistan",
    url: "https://www.undp.org/pakistan",
    tier: "flagship",
  },
  {
    _id: "partner-british-council",
    _type: "partner",
    name: "British Council",
    url: "https://www.britishcouncil.pk",
    tier: "flagship",
  },
  {
    _id: "partner-unesco",
    _type: "partner",
    name: "UNESCO",
    url: "https://www.unesco.org",
    tier: "collaborator",
  },
  {
    _id: "partner-wwf",
    _type: "partner",
    name: "WWF Pakistan",
    url: "https://www.wwfpak.org",
    tier: "collaborator",
  },
];

const awards = [
  {
    _id: "award-digital-news",
    _type: "award",
    title: "Best Digital News Platform",
    organization: "Pakistan Digital Awards",
    year: 2024,
    description: "Recognized for excellence in digital journalism and storytelling.",
  },
  {
    _id: "award-video-journalism",
    _type: "award",
    title: "Excellence in Video Journalism",
    organization: "South Asian Media Forum",
    year: 2023,
    description: "Awarded for outstanding video documentary work in the South Asian region.",
  },
  {
    _id: "award-climate-reporting",
    _type: "award",
    title: "Climate Reporting Award",
    organization: "Environmental Media Association",
    year: 2023,
    description: "Honored for comprehensive climate change coverage across Pakistan.",
  },
];

const teamMembers = [
  {
    _id: "team-ceo",
    _type: "teamMember",
    name: "Imran Ahmed",
    role: "Founder & CEO",
    order: 1,
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [{ _key: "c1", _type: "span", text: "Leading IMN's mission to amplify underrepresented voices through digital journalism.", marks: [] }],
        markDefs: [],
      },
    ],
  },
  {
    _id: "team-editor",
    _type: "teamMember",
    name: "Sarah Qadir",
    role: "Editor in Chief",
    order: 2,
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [{ _key: "c1", _type: "span", text: "Driving editorial excellence and impactful storytelling across all platforms.", marks: [] }],
        markDefs: [],
      },
    ],
  },
  {
    _id: "team-video",
    _type: "teamMember",
    name: "Hassan Raza",
    role: "Head of Video Production",
    order: 3,
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [{ _key: "c1", _type: "span", text: "Creating compelling visual narratives that bring Pakistan's stories to life.", marks: [] }],
        markDefs: [],
      },
    ],
  },
  {
    _id: "team-digital",
    _type: "teamMember",
    name: "Nadia Iqbal",
    role: "Digital Strategy Director",
    order: 4,
    bio: [
      {
        _key: "bio1",
        _type: "block",
        style: "normal",
        children: [{ _key: "c1", _type: "span", text: "Expanding IMN's digital presence and audience engagement across platforms.", marks: [] }],
        markDefs: [],
      },
    ],
  },
];

// ============================================================
// SEED FUNCTION
// ============================================================

async function seed() {
  console.log("Starting Sanity content seed...\n");

  const transaction = client.transaction();

  // Site Settings
  console.log("Adding Site Settings...");
  transaction.createOrReplace(siteSettings);

  // Categories
  console.log("Adding Categories...");
  for (const cat of categories) {
    transaction.createOrReplace(cat);
  }

  // Authors
  console.log("Adding Authors...");
  for (const author of authors) {
    transaction.createOrReplace(author);
  }

  // Stories
  console.log("Adding Stories...");
  for (const story of stories) {
    transaction.createOrReplace(story);
  }

  // Shows
  console.log("Adding Shows...");
  for (const show of shows) {
    transaction.createOrReplace(show);
  }

  // Partners
  console.log("Adding Partners...");
  for (const partner of partners) {
    transaction.createOrReplace(partner);
  }

  // Awards
  console.log("Adding Awards...");
  for (const award of awards) {
    transaction.createOrReplace(award);
  }

  // Team Members
  console.log("Adding Team Members...");
  for (const member of teamMembers) {
    transaction.createOrReplace(member);
  }

  console.log("\nCommitting transaction...");
  const result = await transaction.commit();
  console.log(`\nDone! Seeded ${result.results.length} documents to Sanity.`);
  console.log("\nDocuments created:");
  console.log("  - 1 Site Settings");
  console.log(`  - ${categories.length} Categories`);
  console.log(`  - ${authors.length} Authors`);
  console.log(`  - ${stories.length} Stories`);
  console.log(`  - ${shows.length} Shows`);
  console.log(`  - ${partners.length} Partners`);
  console.log(`  - ${awards.length} Awards`);
  console.log(`  - ${teamMembers.length} Team Members`);
  console.log("\nYou can now view this content in the Sanity Studio and on the website!");
}

seed().catch((err) => {
  console.error("Error seeding content:", err);
  process.exit(1);
});
