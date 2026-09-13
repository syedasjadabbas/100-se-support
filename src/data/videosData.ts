export interface VideoItem {
  id: string;
  title: string;
  section: '2nd-anniversary' | '3rd-anniversary' | 'case-videos';
  src: string;
  poster?: string;
  description?: string;
}

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: '2nd-anniversary',
    title: '2nd Anniversary Celebration',
    section: '2nd-anniversary',
    src: 'https://100sesupport.com/wp-content/uploads/2024/06/2nd-anniversary-Video.m4v.mp4',
    poster: '/assets/IMG-20210729-WA0027-1.jpg',
    description: 'Looking back at 2 years of continuous impact and grassroots community support across Pakistan.',
  },
  {
    id: '3rd-anniversary',
    title: '3rd Anniversary Milestone',
    section: '3rd-anniversary',
    src: 'https://100sesupport.com/wp-content/uploads/2024/06/3rd-anniversary.mp4',
    poster: '/assets/about-8.png',
    description: 'Celebrating 3 years of transparent and direct assistance fueled by PKR. 100 donations.',
  },
  {
    id: 'case-vid-1',
    title: 'Medical Aid & Healthcare Verification',
    section: 'case-videos',
    src: 'https://100sesupport.com/wp-content/uploads/2024/06/357400763_650323223661497_2516329416650192730_n.mp4',
    poster: '/assets/341759218_212601078073447_524777491893904537_n.jpg',
    description: 'Direct medical relief and prescription aid provided to a patient in urgent need.',
  },
  {
    id: 'case-vid-2',
    title: 'Ration Pack & Basic Needs Distribution',
    section: 'case-videos',
    src: 'https://100sesupport.com/wp-content/uploads/2024/06/20240531_081915000_iOS.mp4',
    poster: '/assets/294883611_426663139407634_7377770372108596763_n-e1717236773990-578x1024.jpg',
    description: 'Delivering essential groceries and flour bags directly to deserving families.',
  },
  {
    id: 'case-vid-3',
    title: 'Water Tank Installation Project',
    section: 'case-videos',
    src: 'https://100sesupport.com/wp-content/uploads/2024/06/APRIL-TANK-CASE-1.mp4',
    poster: '/assets/IMG_20220711_103203-1-scaled.jpg',
    description: 'Clean drinking water storage installation for rural communities facing acute water scarcity.',
  },
  {
    id: 'case-vid-4',
    title: 'Monthly Case On-Site Fulfillment',
    section: 'case-videos',
    src: 'https://100sesupport.com/wp-content/uploads/2024/06/May-case.mov',
    poster: '/assets/315834509_472331661665103_6828342614131799185_n.jpg',
    description: 'Field visit and direct verification of monthly support recipients by our volunteer team.',
  },
];
