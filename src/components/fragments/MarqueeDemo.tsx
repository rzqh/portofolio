import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Mark Zuckerberg',
    username: '@zuck',
    body: 'Gokil websitemu qii! Desainnya emang juara banget dah!',
    img: 'https://avatar.vercel.sh/zuck',
  },
  {
    name: 'Elon Musk',
    username: '@elonmusk',
    body: 'Wih, keren abis! Desainnya clean banget, suka deh sama gaya modernnya!',
    img: 'https://avatar.vercel.sh/elon',
  },
  {
    name: 'Jeff Bezos',
    username: '@jeff',
    body: 'Aduh, desain websitenya estetik banget! Bikin betah scroll terus nih.',
    img: 'https://avatar.vercel.sh/jeff',
  },
  {
    name: 'Steve Jobs',
    username: '@steve',
    body: 'Gila sih desainnya! Setiap halaman ada aja yang bikin terpukau.',
    img: 'https://avatar.vercel.sh/steve',
  },
  {
    name: 'Tim Cook',
    username: '@tim_cook',
    body: 'Website ini beneran user-friendly banget, plus keren abis! Mantap!',
    img: 'https://avatar.vercel.sh/tim_cook',
  },
  {
    name: 'Luhut Binsar Pandjaitan',
    username: '@luhut.pandjaitan',
    body: 'Ini website bikin aku kagum! Desainnya menarik perhatian banget, sumpah!',
    img: 'https://avatar.vercel.sh/luhut',
  },
  {
    name: 'pak Bas PUPR woyoo',
    username: '@basuki_hadimuljono',
    body: 'Website mu mengesankan banget! Top markotop dah desainnya.',
    img: 'https://avatar.vercel.sh/bas',
  },
  {
    name: 'Linus Torvalds',
    username: '@linustorvaldsz',
    body: 'Simpel tapi elegan banget! Keren parah sih ini!',
    img: 'https://avatar.vercel.sh/linus',
  },
  {
    name: 'Gandalf Mitrandir',
    username: '@gthe_gray',
    body: 'Desainnya clean dan fresh banget! Seger liatnya.',
    img: 'https://avatar.vercel.sh/gandalf',
  },
  {
    name: 'Galadriel',
    username: '@ladyoflorien',
    body: 'Gokil! Website ini profesional banget, dan yang pasti menarik!',
    img: 'https://avatar.vercel.sh/galadriel',
  },
  {
    name: 'Sauron',    
    username: '@darklord',
    body: 'Desainnya bener-bener menawan! Suka banget deh sama detail-detailnya.',
    img: 'https://avatar.vercel.sh/sauron',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  // Ambil inisial nama
  const initials = name ? name.charAt(0).toUpperCase() : '?'; // Ambil huruf pertama, jadikan uppercase, atau gunakan "?" jika nama kosong

  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        {/* Menggunakan inisial sebagai pengganti gambar */}
        <div className='relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700'>
          <span className='text-sm font-semibold text-gray-800 dark:text-gray-200'>
            {initials}
          </span>
        </div>
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm text-zinc-400'>{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  );
}
