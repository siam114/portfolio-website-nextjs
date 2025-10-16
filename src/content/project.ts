import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: 'Real Estate Platform',
        description: 'A full-stack real estate platform built with React, Express, Node, and Tailwind CSS.',
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Stripe'],
        githubLink: 'https://github.com/siam114/EstateHive',
        demoLink: 'https://estatehive-357ff.web.app/',
        image: '/projects/estatehive.png',
      },
      {
        title: 'QuickChat App',
        description: 'QuickChat is a real-time chat app using Socket.io for instant, smooth messaging.',
        technologies: ['Node.js', 'mongoose', "bcrypt", 'Socket.io'],
        githubLink: 'https://github.com/siam114/Chat-App',
        demoLink: 'https://chat-app-gamma-six-33.vercel.app/login',
        image: '/projects/quickapp.png',
      },
      {
        title: 'SportAxis Website',
        description: 'SportAxis delivers real-time sports updates with a fast and intuitive cross-device experience.',
        technologies: ['React', "Firebase", "mongoDB", 'node.js'],
        githubLink: 'https://github.com/siam114/sportsAxios',
        demoLink: 'https://sportaxis-project.web.app/',
        image: '/projects/sportaxis.png',
      },
      {
        title: 'Blog Platform',
        description: 'A blogging platform with user authentication and markdown support.',
        technologies: ['Gatsby', 'GraphQL', 'Contentful'],
        githubLink: 'https://github.com',
        demoLink: 'https://querymate-project.web.app/',
        image: '/projects/blog-website.jpeg',
      },
      {
        title: 'Weather App',
        description: 'A weather application that provides real-time weather updates.',
        technologies: ['React', 'OpenWeatherMap API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/weather-app.png',
      },
      {
        title: 'Chat Application',
        description: 'A real-time chat application using WebSocket technology.',
        technologies: ['React', 'Node.js', 'Socket.io'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/chat-app.png',
      },
      {
        title: 'Recipe Finder',
        description: 'A recipe search application using the Edamam API.',
        technologies: ['React', 'Edamam API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/recipe-finder.png',
      },
      {
        title: 'Expense Tracker',
        description: 'A personal finance tracker to manage expenses and income.',
        technologies: ['React', 'Firebase'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/expense-tracker.webp',
      }
  ];