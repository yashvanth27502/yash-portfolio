"use client";

import { useState } from "react"; // Import useState for managing form state
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS
import Swal from 'sweetalert2';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Whatsapp',
    description: (<span className="text-white no-underline hover:underline">+91 6364427502</span>),
    link: 'https://wa.me/916364427502',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: (<span className="text-white no-underline hover:underline">yashvanth27502@gmail.com</span>),
    link: "mailto:yashvanth27502@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Bengaluru, Karnataka - 76',
  },
];

import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    emailjs.send('service_f0y3d1f', 'template_zmpbtw9', templateParams, 'EDsBLzwXjwFd99Ix_')
    .then((response) => {
      Swal.fire({
          title: 'Success!',
          text: 'Email successfully sent!',
          icon: 'success',
          confirmButtonText: 'OK'
      });
  })
  .catch((error) => {
      Swal.fire({
          title: 'Error!',
          text: 'Failed to send email. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
      console.error('Failed to send email:', error);
  });
    // Optionally reset form data after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-sm text-white/60">Need a passionate graphic designer for stunning logos and UI designs? Let&apos;s bring your vision to life—reach out today!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
                <Input type="text" placeholder="Lastname" value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
                <Input type="email" placeholder="Email address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Input type="tel" placeholder="Phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              {/* select */}
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="UI Design">UI Design</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              {/* button */}
              <Button size="xl" className="max-w-40 h-12 justify-center items-center">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.link ? (
                      <a href={item.link} className="text-xl text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        {item.description}
                      </a>
                    ) : (
                      <h3 className="text-xl">{item.description}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
