import { langParam } from "@/types/types";
import { getDictionary } from "@/utils/dictionaries";

export const fetchMenuItems = async (lang: langParam) => {
  const dict = await getDictionary(lang);
  return [
    { name: dict.navbar.home, value: 'home' },
    { name: dict.navbar.services, value: 'services' },
    { name: dict.navbar.about, value: 'about' },
    { name: dict.navbar.skills, value: 'skills' },
    { name: dict.navbar.clients, value: 'clients' },
    { name: dict.navbar.contacts, value: 'contact' },
  ];
};


export const fetchTranslations = async (lang: langParam) => {
  const dict = await getDictionary(lang);
  return {
    home: {
      title: dict.home.title,
      subtitle: dict.home.subtitle,
    },
    services: {
      title: dict.services.title,
      apiDeveloping: dict.services.apiDeveloping,
      webDeveloping: dict.services.webDeveloping,
      coding: dict.services.coding,
      description: dict.services.description,
      description2: dict.services.description2,
      description3: dict.services.description3,
      button: dict.services.button,
    },
    about: {
      title: dict.about.title,
      description: dict.about.description,
      name: dict.about.name,
      phone: dict.about.phone,
      email: dict.about.email,
      linkedin: dict.about.linkedin,
      greeting: dict.about.greeting,
      curriculum: dict.about.curriculum,
    },
    skills: {
      title: dict.skills.title,
      headText: dict.skills.headText,
      bodyText: dict.skills.bodyText,
      contact: dict.skills.contact
    },
    clients: {
      title: dict.clients.title,
      subtitle: dict.clients.subtitle,
      testimonial_1: dict.clients.testimonial_1
    }
  };
};