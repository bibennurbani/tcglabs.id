// File: app/page.tsx
import { Metadata } from 'next';
import { slow } from '@/lib/utils';
import CardComponent from '@/components/CardComponent';
import LanyardComponent from '@/components/LanyardComponent';
import AnimatedComponent from '@/components/AnimatedComponent';

export const metadata: Metadata = {
  title: "Biben Nurbani Hasan's Resume",
  description: 'Interactive resume for Biben Nurbani Hasan, Fullstack Developer',
};

// async function getProfileData() {
//   await slow(1000);
//   return {
//     name: 'Biben Nurbani Hasan',
//     position: 'Fullstack Developer',
//     location: 'Bandung, Indonesia',
//     employer: {
//       name: 'Devstack Indonesia',
//       role: 'Senior Analyst',
//       avatar: '/globe.svg',
//       startDate: 'Mar 2018',
//       endDate: 'Present',
//     },
//     skills: [
//       { name: 'JavaScript', proficiency: 'Advanced' },
//       { name: 'React.js', proficiency: 'Advanced' },
//       { name: 'Node.js', proficiency: 'Advanced' },
//       { name: 'Next.js', proficiency: 'Advanced' },
//       { name: 'TypeScript', proficiency: 'Intermediate' },
//       { name: 'NestJS', proficiency: 'Intermediate' },
//       { name: 'AWS Lambda', proficiency: 'Intermediate' },
//       { name: 'Docker', proficiency: 'Intermediate' },
//     ],
//     contact: {
//       email: 'bibennurbani@gmail.com',
//       phone: '+62 857 2154 9005',
//     },
//   };
// }

export default async function Page() {
  // const profileData = await getProfileData();

  return (
    <>
      <CardComponent />
      <LanyardComponent />
      <AnimatedComponent />
      {/* <TicketComponent profileData={profileData} /> */}
    </>
  );
}
