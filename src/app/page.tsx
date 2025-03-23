import { HackathonCard } from '@/components/hackathon-card';
import { BlurFade } from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import Markdown from 'react-markdown';
import { Meteors } from '@/components/magicui/meteors';
import { InteractiveHoverButtonDemo } from '../components/fragments/InteractiveHoverButtonDemo';
import SplashCursor from '../components/fragments/cursor/SplashCursor';
import { MarqueeDemo } from '@/components/fragments/MarqueeDemo';
import { AnimatedBeamDemo } from '@/components/fragments/AnimatedBeamDemo';
import BlobCursor from '@/components/fragments/cursor/BlobCursor';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import Icons from '@/components/fragments/Icons';
// import { BlurFadeDemo } from '@/components/fragments/gridimage/BlurFadeDemo';
import TrueFocus from '@/components/fragments/textfocus/TrueFocus';
import Lanyard from '@/components/Lanyard/Lanyard';
import GitHubCalendar from 'react-github-calendar';
// import { InteractiveGridPatternDemo } from '@/components/fragments/background/InteractiveGridPatternDemo';
import RotatingText from '@/components/fragments/rotatetxt/RotatingText';
import InfiniteScroll from '@/components/fragments/infinityscroll/InfiniteScroll';
import React from 'react';
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      <main className='flex flex-col min-h-[100dvh] space-y-10 '>
        <SplashCursor />
        <Meteors number={30} />
        <section id='hero'>
          <div className='mx-auto w-full max-w-2xl space-y-8'>
            <div className='gap-2 flex justify-between'>
              <div className='flex-col flex flex-1 space-y-1.5 relative z-10'>
                <TrueFocus
                  sentence={`Hi, I'm Rizqi 🥷`}
                  manualMode={false}
                  blurAmount={5}
                  borderColor='red'
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
                <BlurFadeText
                  className='max-w-[600px] md:text-xl'
                  delay={BLUR_FADE_DELAY}
                >
                  <p dangerouslySetInnerHTML={{ __html: DATA.description }} />
                </BlurFadeText>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className='relative flex h-[200px] w-[200px] flex-col items-center justify-center overflow-hidden z-0'>
                  <OrbitingCircles iconSize={20}>
                    <Icons.sql/>
                    <Icons.docker />
                    <Icons.tailwindcss />
                    <Icons.airflow />
                    <Icons.powerbi />
                  </OrbitingCircles>
                  <Avatar className='size-28 border'>
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  </Avatar>
                  <OrbitingCircles iconSize={20} radius={70} reverse speed={2}>
                    <Icons.sql />
                    <Icons.docker />
                    <Icons.tailwindcss />
                    <Icons.airflow />
                    <Icons.powerbi />
                  </OrbitingCircles>
                </div>
              </BlurFade>
            </div>
          </div>
          {/* <CardImage /> */}
          <div style={{ height: '500px', position: 'relative' }}>
            <InfiniteScroll />
          </div>
        </section>
        <section id='about'>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            {/* <h2 className='text-xl font-bold'>About</h2> */}
            <div className='flex gap-2 items-center'>
              <span className='font-extrabold text-lg'>Daily</span>{' '}
              <RotatingText
                texts={[
                  'eat',
                  'sleep',
                  'coding',
                  'praying',
                  'digital nomad',                  
                  'swag hunter',
                ]}
                mainClassName='text-lg inline-block px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg font-extrabold'
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />{' '}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mb-10'>
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        {/* <section id='image'>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className='text-xl font-bold'>Image Owner</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mb-6'></Markdown>
            <BlurFadeDemo />
          </BlurFade>
        </section> */}

        <section id='work'>
          <div className='flex min-h-0 flex-col gap-y-3'>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className='text-xl font-bold'>Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company} 
                  title={work.company}
                  subtitle={work.title}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? 'Present'}`}
                  description={Array.isArray(work.description) ? (
                    <div>
                      {work.description.map((line, index) => (
                        <React.Fragment key={index}>
                          {line.startsWith('-') ? (
                            <li>{line.slice(1).trim()}</li>
                          ) : (
                            <p>{line}</p>
                          )}                          
                          {index < work.description.length - 1 && <div style={{ height: '0.5rem' }} />}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <p>{work.description}</p>
                  )}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id='education'>
          <div className='flex min-h-0 flex-col gap-y-3'>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className='text-xl font-bold'>Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}                  
                  // href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  description={Array.isArray(education.description) ? (
                    <div>
                      {education.description.map((line, index) => (
                        <React.Fragment key={index}>
                          {line.startsWith('-') ? (
                            <li>{line.slice(1).trim()}</li>
                          ) : (
                            <p>{line}</p>
                          )}                          
                          {index < education.description.length - 1 && <div style={{ height: '0.5rem' }} />}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <p>{education.description}</p>
                  )}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id='skills'>
          <div className='flex min-h-0 flex-col gap-y-3'>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className='text-xl font-bold'>Skills</h2>
            </BlurFade>

            <div className='flex flex-wrap gap-1 '>
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge
                    key={skill}
                    // className={skill === 'Copilot' ? 'bg-black' : 'bg-zinc-200'}
                  >
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
          <AnimatedBeamDemo />
        </section>
        <section id='projects'>
          <div className='space-y-12 w-full py-12'>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                    Projects
                  </div>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Check out my latest work
                  </h2>
                  <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>                    
                    I&apos;ve worked on a variety of projects, from simple AI chatbot to image recognition and recommendation system model. Here are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
            <GitHubCalendar username='rzqh' />
          </div>
          <InteractiveHoverButtonDemo
            link='https://github.com/rzqh'
            value='More on my Github'
          />
        </section>
        <section id='hackathons'>
          <div className='space-y-12 w-full py-12'>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                    Achievements & Certifications
                  </div>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                    The Journey of Growth
                  </h2>
                  <p className='text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed'>
                  Through a dedicated journey of growth, I obtained MSIB Batch 6 & 7 completion, Alibaba Cloud: Certified Developer, and undertook 15+ courses. 
                  This path led me to won competitions, valuable internships and deep industry insights                  
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      // description={projecta}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      // links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>

              <InteractiveHoverButtonDemo
                link='https://www.linkedin.com/in/rizqi-hasanuddin/'
                value='More on my LinkedIn'
              />
            </BlurFade>
          </div>
        </section>

        <section id='contact'>
          <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className='space-y-3'>                
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Get in Touch
                </h2>
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                  Contact
                </div>
              </div>
            </BlurFade>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          <MarqueeDemo />
        </section>
      </main>
    </>
  );
}
