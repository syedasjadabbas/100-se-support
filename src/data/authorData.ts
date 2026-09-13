export interface AuthorProfile {
  name: string;
  image: string;
  badgeSvg: string;
  bio: string[];
  socials: {
    facebook: string;
    twitter: string;
    pinterest: string;
    email: string;
  };
}

export const AUTHOR_DATA: AuthorProfile = {
  name: 'Anna Rue',
  image: '/assets/author-page.jpg',
  badgeSvg: '/assets/open-profile-element.svg',
  bio: [
    'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
    'Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
  ],
  socials: {
    facebook: 'https://www.facebook.com/sharer.php?u=https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fauthor-page%2F',
    twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fauthor-page%2F',
    pinterest: 'https://www.pinterest.com/pin/create/button/',
    email: 'mailto:?subject=Author%20Page&body=https%3A%2F%2F100sesupport.com%2Fmystaging01%2Fauthor-page%2F',
  },
};
