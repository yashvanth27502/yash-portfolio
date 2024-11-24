"use client";

import { BsArrowDownRight, BSArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: '01',
    title: 'Logo Design ',
    description: 'Designing unique, memorable logos that define brand identity and enhance brand recognition.',
    href: '/work'
  },
  {
    num: '02',
    title: ' UI Design ',
    description: 'Creating intuitive, visually engaging user interfaces that optimize user experience across digital platforms.',
    href: '/work'
  },
  {
    num: '03',
    title: ' Graphic Design ',
    description: 'Developing eye-catching graphics that communicate brand messages effectively across various media channels.',
    href: '/work '
  },
];

import { motion } from 'framer-motion'

const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((service, index)=> {
          return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
            {/* top */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-90">
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            {/* heading */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
            {/* description */}
            <p className="text-white/60">{service.description}</p>
            {/* border */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
          })}
      </motion.div>
    </div>
  </section>
}

export default Services