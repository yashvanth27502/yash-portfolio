"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiCanva ,SiAdobecreativecloud, SiAdobeindesign, SiAdobeaftereffects, SiFigma   } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// About data
const about = {
  title: 'About me',
  description: "Hello! I’m Yashvanth, a passionate graphic designer dedicated to crafting elegant digital experiences. With a Bachelor of Engineering (BE) in Computer Science Engineering and over a year of experience in the field, I bring a unique blend of technical skills and creative vision to every project I undertake.",
  info: [
    { fieldName: "Name:", fieldValue: "Yashvanth RV" },
    { fieldName: "Phone:", fieldValue: "+91 6364427502" },
    { fieldName: "Professional Experience:", fieldValue: "2+ Years" },
    { fieldName: "Nationality:", fieldValue: "Indian" },
    { fieldName: "Email:", fieldValue: "yashvanth27502@gmail.com" },
    { fieldName: "Freelance:", fieldValue: "Available" },
    { fieldName: "Languages:", fieldValue: "English, Kannada, Tamil" },
  ]
};

// Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "With over a year of dedicated experience as a graphic designer, I have developed a strong skill set in creating elegant digital experiences that leave a lasting impression. My journey has allowed me to work on various projects, honing my abilities in logo design and UI design while mastering a variety of design tools and programming languages.",
  items: [
    { company: "Future Revolution Pvt. Ltd.", position: "Graphic Designer", duration: "2023 - Present" },
    { company: "Uniferous Pvt. Ltd.", position: "Graphic Designer and UI Designer Intern", duration: "Oct 2023 - Nov 2023" },
    { company: "Lumos Learning", position: "Software Tester", duration: "Feb 2023 - Sept 2023" },
  ]
};

// Education data
const education = {
  icon: '/assets/resume/badge.svg',
  title: "My Education",
  description: "I hold a Bachelor of Engineering (BE) in Computer Science Engineering, which has provided me with a strong technical foundation that complements my work as a graphic designer. While my degree may not directly focus on design, the skills and knowledge I gained during my studies have been invaluable in my creative journey.",
  items: [
    { institution: "K S Institution of Technology", degree: "B.E. in Computer Science of Engineering", duration: "2019 - 2023" },
  ]
};

// Skills data
const skills = {
  title: "My skills",
  description: (<>As a <b>Graphic Designer</b> with a focus on creating elegant digital experiences, I possess a diverse skill set that enables me to deliver high-quality design solutions tailored to meet client needs. Here are some of the key skills I bring to the table: </>),
  skillList: [
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiAdobecreativecloud />, name: "Adobe Creative Suit" },
    { icon: <SiAdobeindesign />, name: "Adobe Indesign" },
    { icon: <SiAdobeaftereffects  />, name: "Adobe After Effects" },
    { icon: <SiFigma />, name: "Figma" },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3"> 
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3"> 
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div> 
              {/* Add more content for education if needed */}
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=> {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
              {/* Add more content for skills if needed */}
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px] mx-auto xl:mx-0"> 
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-5">
                      <span className="text-white/60 ">{item.fieldName}</span>
                      <span className="text-xl ">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
              {/* Add more content for about if needed */}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
