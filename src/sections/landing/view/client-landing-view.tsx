'use client';

import Navbar from "@/components/nav/navbar";
import AboutView from "@/sections/about/about-view";
import ContactView from "@/sections/contact/contact-view";
import LandingHomeView from "@/sections/home/view/landing-home-view";
import ServicesView from "@/sections/services/view/services-view";
import { SkillsView } from "@/sections/skills/skills-view";
import TestimonialsView from "@/sections/testimonials/testimonials-view";
import { Dictionary, MenuItem } from "@/types/types";
import { useEffect, useState } from "react";

type Props = {
  menuItems: MenuItem[];
  translations: Dictionary;
};

export default function ClientLandingView({ menuItems, translations }: Props) {

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      menuItems.forEach((item) => {
        
        const section = document.getElementById(item.value);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = item.value;
          }
        }
      });
      setActiveSection(currentSection || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);


  const handleClick = (item: string) => {
    console.log('handleClick', item)
    
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`No section found for ${item}`);
    }
  };


  return (
    <>
      <Navbar items={menuItems} onClick={handleClick} activeSection={activeSection} />
      <LandingHomeView translations={translations} />
      <ServicesView translations={translations} />
      <AboutView translations={translations} />
      <SkillsView translations={translations} onClick={handleClick}/>
      <TestimonialsView translations={translations}/>
      <ContactView translations={translations}/>
    </>
  );
}
