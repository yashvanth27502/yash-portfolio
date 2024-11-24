import { Button } from "@/components/ui/button"
import {FiDownload} from 'react-icons/fi'
import Socials from '@/components/Social'
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="h3">UI/UX DESIGNER</span>
          <h1 className="h1 mb-6">
            Hello I&apos;m <br/> <span className="text-accent">Yashvanth</span>
          </h1>
          <span className="text-md capitalize">Your Expert in Crafting Elegant Digital Experiences</span>
          <p className="max-w-[500px] mb-9 text-white/80">I am a UI/UX designer with over a year of experience, specializing in <b className="text-accent">UI Design, Logo Design, and Graphic Design</b> that elevate brands through refined and visually compelling digital solutions. Proficient in various programming languages and advanced design tools, I ensure that each project aligns with the unique identity of my clients.</p>
          {/* buttons and Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
        <Link href="https://drive.google.com/file/d/1h5uaP5ji6JO2IjuPwLwINfI0wGmEtntV/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
              <Button variant="outline" size="lg" className="h-16 uppercase flex items-center gap-2">
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </Link>
            <div className="mb-8 xl:mb-0 flex-row">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0"> 
          <Photo/>
        </div>
      </div>
    </div>
    <Stats/>
  </section>
}

export default Home