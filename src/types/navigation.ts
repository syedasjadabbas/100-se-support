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
        href: '/donate-now/',
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
    href: '/flood-cases/',
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

export const isNavItemActive = (itemId: string, itemHref: string, pathname: string): boolean => {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (itemId === 'home') {
    return path === '/';
  }

  if (itemId === 'about-us') {
    return path === '/about-us';
  }

  if (itemId === 'monthly-cases') {
    return path === '/monthly-cases';
  }

  if (itemId === 'flood-cases') {
    return path === '/flood-cases' || path === '/campaigns-page';
  }

  if (itemId === 'heatwave-cases') {
    return path === '/heatwave' || path === '/heatwave-cases';
  }

  if (itemId === 'videos') {
    return path === '/videos';
  }

  if (itemId === 'contact-us') {
    return path === '/contacts' || path === '/contact-us';
  }

  const cleanItemHref = itemHref.replace(/\/+$/, '') || '/';
  return path === cleanItemHref || path.startsWith(cleanItemHref + '/');
};
