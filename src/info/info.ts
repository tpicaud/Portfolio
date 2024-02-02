export const info = {
  baseUrl: "?",
  name: "Tom Picaud",
  jobDescription: "Blockchain addict",
  about: `I am currently a student in software engineering, in my fifth and final year at ESIR, a French school based in Rennes.
      I have studied a wide range of domains during my academic journey, including software modeling, cryptography, language theory, 
      and full-stack web development. As a result, I have worked with technologies such as Java, C++, Python, Rust, as well as React,  
      Angular, NestJS, Electron, and PostgreSQL.
      In parallel, I delved into blockchain on my own, which has allowed me to acquire a strong understanding of the underlying technologies 
      and the ecosystem. My goal is to continue learning new things, especially in the blockchain field, as I am convinced it has a 
      great future ahead that I want to be a part of.
          `,

  experience: [
    {
      name: "ALTEN",
      location: "Rennes, Brittany, France",
      startDate: "Aug 2023",
      endDate: "Present",
      description: [
        "• Capitalize on blockchain projects from the group's laboratories",
        "• Help interns and new employees to get started with their blockchain environments",
      ],
    },
    {
      name: "IRISA - INRIA laboratory",
      location: "Rennes, Brittany, France",
      startDate: "Jun 2022",
      endDate: "Jul 2022",
      description: [
        "• Development of a reliable broadcast algorithm to replace blockchain consensus",
        "• Learning Rust, cryptographic signatures and networking",
      ],
    },

    {
      name: "Table Tennis Châteaugiron",
      location: "Châteaugiron, Brittany, France",
      startDate: "Sep 2016",
      endDate: "Feb 2023",
      description: [
        "• Coach of the club's senior/junior players",
        "• Creation of customized sessions",
        "• Leading a group of people",
      ],
    },
  ],

  education: [
    {
      name: "Ecole Supérieure d'Ingénieurs de Rennes",
      location: "Rennes, Brittany, France",
      startDate: "2019",
      endDate: "2024",
      description: [
        "• Engineer diploma in computer science (equivalent to a master's degree)",
        "• International experience in Poland (Poznań University of Technology), 4 months"
      ],
    },
    {
      name: "Lycée Sévigné High School",
      location: "Cesson-Sévigné, Brittany, France",
      startDate: "2016",
      endDate: "2019",
      description: ["• Baccalauréat diploma, English section, with honors"],
    },
    {
      name: "UFCV Bretagne",
      location: "Brittany, France",
      startDate: "2018",
      endDate: "2019",
      description: ["• Youth worker certificate, lifeguard qualification"],
    },
  ],

  skills: [
    {
      name: "Java",
      icon: "/assets/logo/skills/java.jpg",
      level: 80,
    },
    {
      name: "Angular",
      icon: "/assets/logo/skills/angular.jpg",
      level: 80,
    },
    {
      name: "React",
      icon: "/assets/logo/skills/react.jpg",
      level: 60,
    },
    {
      name: "Rust",
      icon: "/assets/logo/skills/rust.jpg",
      level: 60,
    },
    {
      name: "Python",
      icon: "/assets/logo/skills/python.png",
      level: 60,
    },
    {
      name: "C++",
      icon: "/assets/logo/skills/c++.jpg",
      level: 50,
    },
  ],

  interests: [
    {
      name: "Hiking",
      icon: "/assets/logo/interests/hiking.png",
    },
    {
      name: "Sport",
      icon: "/assets/logo/interests/sport.png",
    },
    {
      name: "Music",
      icon: "/assets/logo/interests/music.png",
    },
    {
      name: "Economics",
      icon: "/assets/logo/interests/economics.png",
    },
    {
      name: "Blockchain",
      icon: "/assets/logo/interests/blockchain.png",
    }
  ],

  socialMedia: {
    github: "https://github.com/tpicaud",
    email: "tom.picaud@hotmail.com",
    linkedin: "https://www.linkedin.com/in/tom-picaud-b9281222b/",
  },

  projects: [
    {
      title: "Portfolio",
      description: "Portfolio built with astro, react and tailwindcss, using some Material UI components, inspired by a template available in the astro documentation.",
      isFeatured: true,
      thumbnail: "/assets/images/portfolio.png",
      githubUrl: "https://github.com/tpicaud/Portfolio",
      //liveUrl: "",
    },
    {
      title: "Blockchain implementation",
      description: "Basic blockchain implementation in python, which allows the user to run a blockchain, create a wallet and send transactions to the network.",
      isFeatured: true,
      thumbnail: "/assets/images/blockchain_implementation.png",
      githubUrl: "https://github.com/tpicaud/put-blockchain-implementation"
    },
    {
      title: "Byzantine reliable broadcast",
      description: "A reliable broadcast algorithm in Rust based on a Ph.D. student's work, which reaches nodes consensus without using computational power.",
      isFeatured: true,
      thumbnail: "/assets/images/brb.png",
      githubUrl: "https://github.com/tpicaud/brb-message-adversary"
    },
    {
      title: "Planning poker",
      description: "Planning poker application built with Angular and NestJS, which allows users to create a room and estimate tasks using the planning poker method.",
      isFeatured: true,
      thumbnail: "/assets/images/planning_poker.png",
      githubUrl: "https://github.com/12-3-8-s9b9o9j9t/tsd-project"
    },
  ],
};
