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
    category: 'Petty',
    title: 'project 2',
    description: 'The Petty Web UI project is a modern and user-friendly web interface designed specifically for an online pet shop. This UI brings together a clean, welcoming design with intuitive navigation, making it easy for pet owners to browse and purchase a variety of pet products, pet food, accessories, and pet care items. With visually engaging elements and a warm color palette, the interface captures the joy of pet ownership and creates a delightful shopping experience. Key features include a responsive design that adapts seamlessly to desktop and mobile devices, an organized product catalog, and a simple checkout process. Each product page includes high-quality images, detailed descriptions, and pricing information, ensuring customers have all the information they need to make informed purchases. Additionally, the UI integrates a search bar, filters, and category options to help users find products quickly.',
    stack: [{name: "Figma"}, {name: "Photoshop"}],
    image: '/assets/work/thumb2.jpg',
    live: "https://www.figma.com/proto/wILUs7Rgd5KBEWFXZaZYtM/Petty?page-id=0%3A1&node-id=404-720&node-type=symbol&viewport=174%2C220%2C0.05&t=rrBPe8hZmRV6nPrF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=404%3A720",
    dribbble: "https://dribbble.com/shots/22581847-PETTY-Food-Related-Shop-UI-Design",
  },
  {
    num: '03',
    category: 'Big Mishra Pedha Poster and Reels',
    title: 'project 3',
    description: (<>For this Ganesh Chaturthi, I collaborated with Big Mishra Peda to create engaging festival-themed posters and reels that captured the spirit of the celebration. These visually appealing designs incorporated traditional elements and festive colors to resonate with audiences celebrating Lord Ganesha. The posters featured vibrant visuals and typography that highlighted Big Mishra Peda&apos;s authentic sweets and special offerings for the holiday, while the reels showcased these delicious treats in dynamic, eye-catching videos designed to drive engagement on social media. <br /><br />This project combined my skills in graphic design and social media content creation to help Big Mishra Peda connect with customers during the festive season. The content was optimized for reach and interaction, attracting more views and boosting brand awareness during Ganesh Chaturthi. Perfect for driving festival sales and enhancing customer engagement, these posters and reels helped bring the celebration to life for Big Mishra Peda&apos;s audience.</>),
    stack: [{name: "Photoshop"  }, {name: "After Effects"}, {name: "Canva"}],
    image: '/assets/work/thumb3.jpg',
    live: "https://dribbble.com/shots/25124650-Ganesh-Chaturthi-Posters-For-Big-Mishra-Peda",
    dribbble: "https://dribbble.com/shots/25124650-Ganesh-Chaturthi-Posters-For-Big-Mishra-Peda",
  },
  {
    num: '04',
    category: 'Aprycot - Restaurant Management UI',
    title: 'project 4',
    description: (<>The Aprycot Restaurant Management UI project is a custom-designed user interface built to streamline restaurant operations and enhance management efficiency. This intuitive UI offers a clean and modern design tailored for restaurant owners, managers, and staff, focusing on ease of navigation and functionality. Key features include order management, table reservations, inventory tracking, staff scheduling, and real-time analytics, all accessible through an organized, easy-to-use dashboard.

      With a responsive layout, the Aprycot UI is optimized for both desktop and tablet devices, allowing seamless access across various platforms. Each component of the interface, from the order summary panels to the sales insights charts, is designed with clarity and functionality in mind, helping restaurant teams manage daily tasks efficiently. Additionally, the Aprycot UI offers customizable elements to accommodate different types of restaurant setups, from small cafes to multi-location franchises.
      
      The Aprycot Restaurant Management UI not only enhances productivity but also improves the overall user experience, making it a powerful tool for modern restaurant operations. This UI project serves as a solution for restaurants aiming to streamline workflows, reduce errors, and optimize customer service.
      
      </>),
    stack: [{name: "Photoshop"  }, {name: "Figma"}],
    image: '/assets/work/thumb4.png',
    live: "https://www.figma.com/proto/XWHtXyUgE3CBn5VvybroKv/Restaurant-Management-UI?page-id=2%3A604&node-id=2-634&node-type=frame&viewport=298%2C256%2C0.21&t=MA9GfxRtMcGHaL4K-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A634&show-proto-sidebar=1",
    dribbble: "https://dribbble.com/shots/24006593-Aprycot-Restaurant-Management-UI",
  },
  {
    num: '05',
    category: 'Splitify – Effortless Expense Sharing Made Simple UI',
    title: 'project 5',
    description: (<>The Splitify One-Page Website Design introduces users to Splitify, a powerful expense-sharing app that makes splitting costs with friends and family fast, easy, and secure. This design offers a streamlined, user-focused interface that highlights Splitify’s features, from bill-splitting and real-time expense tracking to group payment options that simplify shared expenses. <br />The one-page layout is crafted to engage users, with sections dedicated to explaining the app’s key benefits, such as tracking expenses in real-time, easy settlement of shared costs, and intuitive financial management tools. Optimized for both mobile and desktop, this design ensures that users can manage their expenses on the go. With a focus on functionality and convenience, the Splitify website provides an engaging and informative landing experience, helping users quickly understand how the app can bring ease to group expense management.</>),
    stack: [{name: "Ui Skills"  }, {name: "Figma"}],
    image: '/assets/work/thumb5.png',
    live: "https://www.figma.com/proto/BKj0hUI5MGRkP4ikrmVvTg/One-Page-Website-Design_Dark_Theme-(Community)?page-id=0%3A1&node-id=201-16&node-type=frame&viewport=-24%2C739%2C0.21&t=izC3eRwaWrvWe6OL-1&scaling=scale-down-width&content-scaling=fixed",
    dribbble: " ",
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