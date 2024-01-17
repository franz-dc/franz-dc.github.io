import { TProject } from '~/types';

export const projects: TProject[] = [
  {
    name: 'Beyond Ys',
    description:
      "A fan website dedicated to Nihon Falcom's works. You can find information about Falcom's games, characters, music, staff, and more! Comes with a built-in music player for soundtracks.",
    technologies: ['Next.js', 'Firebase', 'YouTube API'],
    links: [
      {
        category: 'GitHub',
        url: 'https://github.com/franz-dc/beyond-ys',
        caption: 'GitHub (Main)',
      },
      {
        category: 'GitHub',
        url: 'https://github.com/franz-dc/beyond-ys-editor',
        caption: 'GitHub (Editor)',
      },
      {
        category: 'Website',
        url: 'https://beyondys.com',
        caption: 'Website',
      },
    ],
    mainImage: '/images/beyond-ys-main.webp',
    otherImages: [
      {
        src: '/images/beyond-ys-character.webp',
        title: 'Beyond Ys: Character Page',
      },
      {
        src: '/images/beyond-ys-game.webp',
        title: 'Beyond Ys: Game Page',
      },
      {
        src: '/images/beyond-ys-staff.webp',
        title: 'Beyond Ys: Staff Page',
      },
    ],
  },
  {
    name: 'Parking System',
    description:
      'Find and reserve a parking slot for your local parking space. Includes two parts: a web interface and hardware for each parking slot.',
    technologies: ['React', 'Firebase', 'Material UI', 'C++'],
    links: [
      {
        category: 'GitHub',
        url: 'https://github.com/franz-dc/smart-parking-front',
        caption: 'GitHub (Client)',
      },
      {
        category: 'GitHub',
        url: 'https://github.com/franz-dc/smart-parking-esp32',
        caption: 'GitHub (Driver)',
      },
      {
        category: 'Website',
        url: 'https://sps-dev-chi.vercel.app',
        caption: 'Website',
      },
    ],
    mainImage: '/images/parking-main.webp',
    otherImages: [
      {
        src: '/images/parking-reserve.webp',
        title: 'Parking System: Reservation Page',
      },
      {
        src: '/images/parking-lot-availability.webp',
        title: 'Parking System: Lot Availability Page',
      },
      {
        src: '/images/parking-admin-dashboard.webp',
        title: 'Parking System: Admin Dashboard Page',
      },
    ],
  },
  {
    name: 'Room Reservation',
    description:
      'Rent and reserve a room from a particular premise. You can set date and time schedules and list of guests for ease of tracking.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery'],
    links: [],
    mainImage: '/images/room-reservation-main.webp',
    otherImages: [],
  },
];
