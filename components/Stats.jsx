"use client";

import CountUp from "react-countup";

const stats =[
    {
        num: 2,
        text: "+ Years of Professional Experience",
    },
    {
        num: 19,
        text: "Projects Completed",
    },
    {
        num: 7,
        text: "Tools Mastered",
    },
    {
        num: 99,
        text: "+ Happy Clients",
    },
]

const Stats = () => {
      return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[800vm] mx-auto xl:max-w-none">
                {stats.map((item, index)=> {
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
      </section>
    }
    
    export default Stats