'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import './InfiniteScroll.css';
import Image from 'next/image';

interface SocialMediaItem {
  Profile: string;
  Followers: number;
  Following?: number; // Optional property
  Suka?: string; // Optional property
  Repository?: number; // Optional property
  Contributions?: number; // New property for commit count
  Post?: number; // New property for post count
  Published?: number; // New property for published count
  Link: string;
  Username?: string;
}

interface InfinitySosmed {  
  Linkedin: SocialMediaItem[];
  Medium: SocialMediaItem[];
  Github: SocialMediaItem[];
  Instagram: SocialMediaItem[];
}

const infinitysosmed: InfinitySosmed = {  
  Linkedin: [
    {
      Profile:
        'https://rzqhhh.sirv.com/portofolio/linkedin-pp.jpeg',
      Followers: 2034,      
      Username: 'Rizqi Hasanuddin',
      Link: 'https://www.linkedin.com/in/rizqi-hasanuddin/',
    },
  ],
  Medium: [
    {
      Profile:
        'https://miro.medium.com/v2/resize:fill:64:64/1*WpU_NWnQVDEwH9dKi4JjoQ.jpeg',
      Followers: 3,
      Username: 'Rizqi Hasanuddin',
      Post: 3, 
      Published: 1, 
      Link: 'https://medium.com/@rizqih',
    },
  ],
  Github: [
    {
      Profile: 'https://avatars.githubusercontent.com/u/85202182?s=400&u=f2b24bbf716b35c63be426fb51dc64d7d6fb0b2e&v=4',
      Followers: 5,      
      Repository: 45,
      Contributions: 347, 
      Username: 'rzqh',
      Link: 'https://github.com/rzqh',
    },
  ],
  Instagram: [
    {
      Profile:        
        '/gwe.jpeg',
      Followers: 1.024,
      Following: 1.948,
      Username: 'rzqhh___',
      Link: 'https://www.instagram.com/rzqhh___/',
    },
  ],
};

gsap.registerPlugin(Observer);

const InfiniteScroll: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    return 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items: (SocialMediaItem & { type: keyof InfinitySosmed })[] =
      Object.entries(infinitysosmed).flatMap(([key, value]) =>
        (value as SocialMediaItem[]).map((item) => ({
          ...item,
          type: key as keyof InfinitySosmed,
        }))
      );

    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: 'wheel,touch,pointer',
      preventDefault: true,
      onPress: ({ target }) => {
        if (target instanceof HTMLElement) {
          target.style.cursor = 'grabbing';
        }
      },
      onRelease: ({ target }) => {
        if (target instanceof HTMLElement) {
          target.style.cursor = 'grab';
        }
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === 'wheel' ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: 'expo.out',
            y: `+=${distance}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number;
    const autoplay = true;
    const autoplayDirection = 'down'; // Change to "up" for upward movement
    const autoplaySpeed = 1; // Adjust speed as needed

    if (autoplay) {
      const directionFactor = autoplayDirection === 'down' ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      tick();
    }

    return () => {
      observer.kill();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const getPath = (type: keyof InfinitySosmed): string => {
    switch (type) {      
      case 'Linkedin':
        return '/images/linkedin.png';
      case 'Medium':
        return '/images/medium.png';
      case 'Github':
        return '/images/github.png';
      case 'Instagram':
        return '/images/instagram.png';
      default:
        return '/images/default_icon.png';
    }
  };

  const items: (SocialMediaItem & { type: keyof InfinitySosmed })[] =
    Object.entries(infinitysosmed).flatMap(([key, value]) =>
      (value as SocialMediaItem[]).map((item) => ({
        ...item,
        type: key as keyof InfinitySosmed,
      }))
    );

  return (
    <>
      <style jsx>
        {`
          .infinite-scroll-wrapper {
            max-height: 100%;
          }

          .infinite-scroll-container {
            width: 30rem;
            cursor: grab;
          }

          .infinite-scroll-item {
            height: 150px;
            margin-top: -0.5em;
          }

          .cursor-pointer {
            cursor: pointer;
          }

          .card-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>
      <div className='infinite-scroll-wrapper' ref={wrapperRef}>
        <div
          className='infinite-scroll-container'
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div
              className='infinite-scroll-item flex flex-col items-center justify-center gap-2 cursor-pointer'
              key={i}
            >
              <a
                href={item.Link}
                target='_blank'
                rel='noopener noreferrer'
                className='card-link'
              >
                <div className='flex items-center gap-2'>
                  <Image
                    src={item.Profile}
                    alt={'image'}
                    width={30}
                    height={30}
                    className='rounded-full'
                  />
                  <span className='text-xs'>{item.Username}</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <Image
                    src={getPath(item.type)}
                    alt={`${item.type}`}
                    width={10}
                    height={10}
                    className='text-xs'
                  />
                  <span className='text-[10px]'>{item.type}</span>
                </div>
                <div className='flex gap-2 text-xs'>
                  {' '}
                  <div>{item.Followers} Followers</div>
                  {'Following' in item && <div>{item.Following} Following</div>}
                  {'Contributions' in item && <div>{item.Contributions} Contributions</div>} {/* Display commit count */}
                  {'Post' in item && <div>{item.Post} Post</div>} {/* Display post count */}
                  {'Published' in item && <div>{item.Published} Published</div>} {/* Display published count */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;