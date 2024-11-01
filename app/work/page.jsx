"use client";

import {motion} from 'framer-motion'
import React, {useState} from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsDribbble } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'Paginated Banner About Animal',
    title: 'project 1',
    description: (<>The Paginated Banner About Animals project is designed to enhance user engagement through an interactive, paginated banner that showcases various <a className="text-accent" href='https://en.wikipedia.org/wiki/Wildlife'>wildlife</a> facts, <a className="text-accent" href='https://kids.nationalgeographic.com/animals'>animal species</a>, and nature photography. With a clean and intuitive paginated design, users can easily navigate through animal information without clutter. Each slide features high-quality images, detailed descriptions, and interesting facts about different animal species, from exotic wildlife to endangered species, making it perfect for educational websites, nature blogs, and animal conservation platforms. This project is built to optimize user experience while supporting search engine optimization (SEO) goals. By combining responsive design, fast load times, and mobile compatibility, it delivers a seamless browsing experience across devices, encouraging longer site visits and boosting SEO metrics. With relevant keywords like wildlife exploration, animal facts, and interactive animal banners, this banner project is crafted to attract organic traffic, helping nature enthusiasts and educational content seekers find engaging information about the animal kingdom.</>),
    stack: [{name: "Figma"}, {name: "Photoshop"}],
    image: '/assets/work/thumb1.jpg',
    live: "https://www.figma.com/proto/AmAVymtDxj8KgAMKQ72NlT/animal-slider-yashvanth?page-id=88%3A46&node-id=88-47&node-type=frame&viewport=459%2C398%2C0.22&t=hosfJkddQzBos0KT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=88%3A47&show-proto-sidebar=1",
    dribbble: "https://dribbble.com/shots/24389173-Paginated-Banner-About-Animal?utm_source=Clipboard_Shot&utm_campaign=Yashvanth&utm_content=Paginated%20Banner%20About%20Animal&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Yashvanth&utm_content=Paginated%20Banner%20About%20Animal&utm_medium=Social_Share",
  },
  {
    num: '02',
    category: 'full stack',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nulla et doloremque error aut dignissimos veniam consectetur ratione in.',
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}],
    image: '/assets/work/thumb2.png',
    live: "",
    dribbble: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nulla et doloremque error aut dignissimos veniam consectetur ratione in.',
    stack: [{name: "Next.js"  }, {name: "Tailwind.css"}],
    image: '/assets/work/thumb3.png',
    live: "",
    dribbble: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return ( <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
                {/* project category */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                {/* project description */}
                <p className='text-white/60'>{project.description}</p>
                {/* stack */}
                <ul className='flex gap-4'>
                  {project.stack.map((item, index)=> {
                    return <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  })}
                </ul>
                {/* border */}
                <div className='border border-white/20'></div>
                {/* buttons */}
                <div className='flex items-center gap-4 pb-8'>
                  {/* live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* dribbble project button */}
                  <Link href={project.dribbble}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsDribbble className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Dribbble Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidePrevClass={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>  
              {projects.map((project, index)=> {
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-cover' alt='' />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-30 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper> 
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Work;