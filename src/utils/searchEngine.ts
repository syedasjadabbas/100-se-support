import { ALL_CASES } from '../data/casesData';
import { TEAM_MEMBERS, FEMALE_VOLUNTEERS } from '../data/teamData';
import { BLOG_POSTS } from '../data/blogData';
import { VIDEOS_DATA } from '../data/videosData';

export type SearchResultType = 'all' | 'case' | 'team' | 'blog' | 'video' | 'page';

export interface SearchResultItem {
  id: string;
  type: 'case' | 'team' | 'blog' | 'video' | 'page';
  typeLabel: string;
  title: string;
  description: string;
  url: string;
  badge?: string;
  image?: string;
  date?: string;
  score: number;
}

export interface SearchCounts {
  all: number;
  case: number;
  team: number;
  blog: number;
  video: number;
  page: number;
}

// Static site pages and key initiatives indexed for search
const STATIC_PAGE_ITEMS: Omit<SearchResultItem, 'score'>[] = [
  {
    id: 'page-about',
    type: 'page',
    typeLabel: 'Page',
    title: 'About Us - 100seSupport',
    description: 'Learn about 100seSupport, our mission to change lives with PKR 100 donations, our transparent grassroots model, and our dedicated team of volunteers.',
    url: '/about-us',
    badge: 'About Us',
    image: '/assets/about-8.png',
  },
  {
    id: 'page-donate',
    type: 'page',
    typeLabel: 'Page',
    title: 'Donate Now - Bank & Mobile Accounts',
    description: 'Make a direct impact with PKR 100. Direct bank transfer via Meezan Bank (9201 0104980230 - Usama Waseem), Easypaisa (03133474377 - Haseeb Ur Rehman), and JazzCash (03030305309 - Amanullah).',
    url: '/donate-now',
    badge: 'Donation Accounts',
    image: '/assets/IMG-20210729-WA0027-1.jpg',
  },
  {
    id: 'page-monthly-subscription',
    type: 'page',
    typeLabel: 'Page',
    title: 'Monthly Subscription - PKR 100 Regular Pledge',
    description: 'Join thousands of everyday Pakistanis pledging PKR 100 every month to fund verified emergency, healthcare, and ration cases directly.',
    url: '/donate-now#monthly',
    badge: 'Monthly Pledge',
    image: '/assets/about-8.png',
  },
  {
    id: 'page-contact',
    type: 'page',
    typeLabel: 'Page',
    title: 'Contact Us - 100seSupport Team',
    description: 'Reach out to 100seSupport for inquiries, case verification, volunteering, and updates. Based in Khairpur Mirs, Sindh, Pakistan.',
    url: '/contact-us',
    badge: 'Contact',
    image: '/assets/about-8.png',
  },
  {
    id: 'page-flood-campaign',
    type: 'page',
    typeLabel: 'Page',
    title: 'Flood Relief Cases & Emergency Aid',
    description: 'Emergency response drives providing dry ration packs, clean drinking water, shelter rehabilitation, and supplies to flood-affected families across Sindh.',
    url: '/flood-cases',
    badge: 'Campaign',
    image: '/assets/300578359_448142667259681_655977676439561768_n.jpg',
  },
  {
    id: 'page-monthly-campaign',
    type: 'page',
    typeLabel: 'Page',
    title: 'Monthly Verified Support Cases',
    description: 'Transparent monthly drives providing urgent kitchen construction, small livelihood setups, groceries, and shelter assistance to deserving families.',
    url: '/monthly-cases',
    badge: 'Campaign',
    image: '/assets/20240531_111016000_iOS-e1717245683157-829x1024.png',
  },
  {
    id: 'page-heatwave-campaign',
    type: 'page',
    typeLabel: 'Page',
    title: 'Heatwave Emergency Relief Campaign',
    description: 'Summer relief campaigns providing chilled sugarcane juice and clean water distribution in extreme heat across Khairpur Mirs, Sindh.',
    url: '/heatwave',
    badge: 'Campaign',
    image: '/assets/WhatsApp-Image-2024-06-07-at-11.18.03-PM-scaled.jpeg',
  },
  {
    id: 'page-healthcare-campaign',
    type: 'page',
    typeLabel: 'Page',
    title: 'Healthcare & Patient Medical Assistance',
    description: 'Transparent medicine provision, hospital assistance, and verified medical treatment funds for critically ill patients unable to afford healthcare.',
    url: '/healthcare-cases',
    badge: 'Campaign',
    image: '/assets/341759218_212601078073447_524777491893904537_n.jpg',
  },
  {
    id: 'page-videos',
    type: 'page',
    typeLabel: 'Page',
    title: 'Videos & Field Verification Proof',
    description: 'Watch transparent on-the-ground case fulfillment videos, milestone celebrations, and proof of work across Pakistan.',
    url: '/videos',
    badge: 'Videos',
    image: '/assets/about-8.png',
  },
  {
    id: 'page-author',
    type: 'page',
    typeLabel: 'Page',
    title: '100sesupport.com - Official Author Archive',
    description: 'Articles, official case updates, and campaign progress published by the 100seSupport editorial and field team.',
    url: '/author-page',
    badge: 'Author',
    image: '/assets/about-8.png',
  },
];

// Lazy-built searchable documents cache
let searchIndex: Omit<SearchResultItem, 'score'>[] | null = null;

function buildSearchIndex(): Omit<SearchResultItem, 'score'>[] {
  if (searchIndex) return searchIndex;

  const items: Omit<SearchResultItem, 'score'>[] = [];

  // 1. Static Pages
  items.push(...STATIC_PAGE_ITEMS);

  // 2. Team Members (Executive)
  TEAM_MEMBERS.forEach((m) => {
    items.push({
      id: `team-${m.id}`,
      type: 'team',
      typeLabel: 'Team Member',
      title: m.name,
      description: `${m.name} is a dedicated volunteer and team member of 100seSupport contributing to grassroots community drives and transparent field verification.`,
      url: `/about-us#team`,
      badge: 'Team Member',
      image: m.image,
    });
  });

  // 3. Female Volunteers
  FEMALE_VOLUNTEERS.forEach((m) => {
    items.push({
      id: `volunteer-${m.id}`,
      type: 'team',
      typeLabel: 'Volunteer',
      title: m.name,
      description: `${m.name} is a committed female volunteer at 100seSupport supporting community mobilization, verification, and family relief drives.`,
      url: `/about-us#team`,
      badge: 'Female Volunteer',
      image: m.image,
    });
  });

  // 4. Blog Posts
  BLOG_POSTS.forEach((post) => {
    items.push({
      id: `blog-${post.id}`,
      type: 'blog',
      typeLabel: 'Blog Post',
      title: post.title,
      description: post.excerpt || post.content.replace(/<[^>]*>/g, '').slice(0, 180),
      url: `/${post.slug}/`,
      badge: post.category || 'Blog',
      image: post.image,
      date: post.date,
    });
  });

  // 5. Videos
  VIDEOS_DATA.forEach((video) => {
    items.push({
      id: `video-${video.id}`,
      type: 'video',
      typeLabel: 'Video',
      title: video.title,
      description: video.description || `Watch the field verification and impact video for ${video.title}.`,
      url: '/videos',
      badge: 'Video Proof',
      image: video.poster,
    });
  });

  // 6. All Cases (Cases, Flood, Monthly, Heatwave, Healthcare)
  ALL_CASES.forEach((c) => {
    const categoryTitle =
      c.category === 'flood'
        ? 'Flood Case'
        : c.category === 'monthly'
        ? 'Monthly Case'
        : c.category === 'heatwave'
        ? 'Heatwave Case'
        : 'Case';

    items.push({
      id: `case-${c.id}`,
      type: 'case',
      typeLabel: 'Case',
      title: c.title,
      description: c.description,
      url: c.link || `/campaigns/${c.slug}/`,
      badge: c.isHealthcare ? 'Healthcare' : categoryTitle,
      image: c.image,
    });
  });

  searchIndex = items;
  return searchIndex;
}

/**
 * Normalizes query string for indexing and matching
 */
function cleanString(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9\s]/gi, ' ').trim();
}

/**
 * Performs a global search across all site content
 */
export function performGlobalSearch(
  query: string,
  filterType: SearchResultType = 'all'
): SearchResultItem[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const rawTokens = cleanString(trimmed)
    .split(/\s+/)
    .filter((t) => t.length > 0);

  if (rawTokens.length === 0) return [];

  const cleanQuery = rawTokens.join(' ');
  const index = buildSearchIndex();

  const results: SearchResultItem[] = [];

  for (const item of index) {
    if (filterType !== 'all' && item.type !== filterType) {
      continue;
    }

    const cleanTitle = cleanString(item.title);
    const cleanDesc = cleanString(item.description);
    const cleanBadge = cleanString(item.badge || '');
    const cleanId = cleanString(item.id);

    let score = 0;

    // 1. Exact title matches
    if (cleanTitle === cleanQuery) {
      score += 200;
    } else if (cleanTitle.startsWith(cleanQuery)) {
      score += 120;
    } else if (cleanTitle.includes(cleanQuery)) {
      score += 90;
    }

    // 2. Exact description/badge match
    if (cleanDesc.includes(cleanQuery)) {
      score += 45;
    }
    if (cleanBadge.includes(cleanQuery)) {
      score += 40;
    }
    if (cleanId.includes(cleanQuery)) {
      score += 35;
    }

    // 3. Token-by-token scoring
    let allTokensInTitle = true;
    let anyTokenMatched = false;

    for (const token of rawTokens) {
      let tokenMatched = false;

      // Token in title
      if (cleanTitle.includes(token)) {
        score += 30;
        tokenMatched = true;
      } else {
        allTokensInTitle = false;
      }

      // Token in badge/type
      if (cleanBadge.includes(token) || item.typeLabel.toLowerCase().includes(token)) {
        score += 20;
        tokenMatched = true;
      }

      // Token in description
      if (cleanDesc.includes(token)) {
        score += 15;
        tokenMatched = true;
      }

      // Token in ID
      if (cleanId.includes(token)) {
        score += 10;
        tokenMatched = true;
      }

      if (tokenMatched) {
        anyTokenMatched = true;
      }
    }

    // Bonus if all tokens appeared in the title
    if (allTokensInTitle && rawTokens.length > 1) {
      score += 50;
    }

    if (score > 0 && anyTokenMatched) {
      results.push({
        ...item,
        score,
      });
    }
  }

  // Sort by highest score first
  return results.sort((a, b) => b.score - a.score);
}

/**
 * Calculates result counts for each category filter tab
 */
export function getSearchCounts(query: string): SearchCounts {
  const allResults = performGlobalSearch(query, 'all');

  const counts: SearchCounts = {
    all: allResults.length,
    case: 0,
    team: 0,
    blog: 0,
    video: 0,
    page: 0,
  };

  for (const item of allResults) {
    counts[item.type] = (counts[item.type] || 0) + 1;
  }

  return counts;
}

/**
 * Highlight snippet helper for generating marked text snippets
 */
export interface HighlightPart {
  text: string;
  isMatch: boolean;
}

export function highlightTextParts(text: string, query: string, maxLength = 160): HighlightPart[] {
  if (!text) return [];
  if (!query.trim()) {
    const truncated = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    return [{ text: truncated, isMatch: false }];
  }

  const tokens = cleanString(query)
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (tokens.length === 0) {
    const truncated = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    return [{ text: truncated, isMatch: false }];
  }

  // Find the first index of any token in text
  const lowerText = text.toLowerCase();
  let firstIndex = -1;
  for (const token of tokens) {
    const idx = lowerText.indexOf(token);
    if (idx !== -1 && (firstIndex === -1 || idx < firstIndex)) {
      firstIndex = idx;
    }
  }

  let start = 0;
  let end = text.length;

  if (firstIndex !== -1 && text.length > maxLength) {
    start = Math.max(0, firstIndex - 40);
    end = Math.min(text.length, start + maxLength);
    // Adjust start if end hit boundary
    if (end - start < maxLength) {
      start = Math.max(0, end - maxLength);
    }
  } else if (text.length > maxLength) {
    end = maxLength;
  }

  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';

  // Build regex matching any token
  const escapedTokens = tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTokens.join('|')})`, 'gi');

  const parts = snippet.split(regex);
  return parts.map((part) => ({
    text: part,
    isMatch: tokens.some((t) => t.toLowerCase() === part.toLowerCase()),
  }));
}
