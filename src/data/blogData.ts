export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 37896,
    slug: 'flood-case-1',
    title: 'Flood Case 1',
    date: 'May 31, 2024',
    author: '100sesupport.com',
    image: '/assets/300578359_448142667259681_655977676439561768_n.jpg',
    excerpt: 'Relief and emergency assistance provided during the catastrophic floods to affected families.',
    content: `
      <p>During the devastating floods across Sindh and Pakistan, 100seSupport stepped in on the ground to provide immediate emergency relief, dry ration packs, clean drinking water, and rehabilitation assistance to displaced families.</p>
      <p>Every single contribution of PKR. 100 aggregated into substantial relief operations, ensuring that the most vulnerable households received immediate support without intermediaries.</p>
      <p>Through thorough on-site verification and direct delivery, our volunteer team reached remote areas to deliver essential supplies directly to affected women, children, and elderly residents.</p>
    `,
    category: 'Blog',
  },
];
