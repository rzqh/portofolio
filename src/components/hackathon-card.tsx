import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { PaddingIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface Props {
  title: string;

  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,

  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className='relative ml-10 py-4'>
      <div className='absolute -left-16 flex items-center justify-center bg-white rounded-full'>
        <Avatar className='border size-12 m-auto'>
          <AvatarImage
            src={image}
            alt={title}
            className='object-contain scale-75'
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-1 flex-col justify-start'>
        {dates && (
          <time className='text-xs text-muted-foreground'>{dates}</time>
        )}
        <h2 className='font-semibold leading-none'>{title}</h2>
        {location && (
          <p className='text-sm text-muted-foreground'>{location}</p>
        )}        
      </div>
      {links && links.length > 0 && (
        <div className='mt-2 flex flex-row flex-wrap items-start gap-1'>
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className='flex gap-2'>
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
