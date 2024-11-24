import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FaDribbble, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
    { icon: <FaDribbble />, path: 'https://dribbble.com/Yashvanth', label: 'Dribbble' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/yashvanth-rv/', label: 'LinkedIn' },
    { icon: <FaInstagram />, path: '', label: 'In Progress' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Social;
