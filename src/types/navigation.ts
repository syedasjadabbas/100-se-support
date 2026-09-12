export interface SubMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  children?: SubMenuItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    isActive: true,
  },
  {
    id: 'about-us',
    label: 'About Us',
    href: '/about-us/',
    children: [
      {
        id: 'core-practices',
        label: 'Our Core Practices',
        href: '/about-us/#core',
      },
      {
        id: 'who-we-are',
        label: 'Who We Are',
        href: '/about-us/#who',
      },
      {
        id: 'meet-our-team',
        label: 'Meet Our Team',
        href: '/about-us/#team',
      },
      {
        id: 'donate-sub',
        label: 'Donate',
        href: '/about-us/#donate',
      },
    ],
  },
  {
    id: 'monthly-cases',
    label: 'Monthly Cases',
    href: '/monthly-cases/',
  },
  {
    id: 'flood-cases',
    label: 'Flood Cases',
    href: '/campaigns-page/',
  },
  {
    id: 'heatwave-cases',
    label: 'Heatwave Cases',
    href: '/heatwave/',
  },
  {
    id: 'videos',
    label: 'Videos',
    href: '/videos/',
  },
  {
    id: 'contact-us',
    label: 'Contact Us',
    href: '/contacts/',
  },
];
