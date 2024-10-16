export const info = {
  baseUrl: "localhost:4321",
  name: "Tom Picaud",
  jobDescription: "Blockchain addict",
  about: `I'm a software engineer with a Master's degree in Computer Engineering, located in Poitiers, France. My diverse studies covered software modeling, cryptography, language theory, and full-stack web development. I've worked with Java, C++, Python, Rust, React, Angular, NestJS, Electron, and PostgreSQL. Independently, I've delved into blockchain, gaining a strong understanding. Eager to continue learning, particularly in blockchain, as I believe it has a promising future.
          `,
  ethereum: {
    address: "0x08f415734a68C83B5D99245E36f22f4e1CD29E04",
    ens: "tpicaud.eth",
  },

  experience: [
    {
      name: "ALTEN",
      location: "Rennes, Brittany, France",
      startDate: "Aug 2023",
      endDate: "Sep 2024",
      description: [
        "• Capitalized on blockchain projects from the group's laboratories",
        "• Helped interns and new employees to get started with their blockchain environments",
        "• Aggregated and organize knowledge",
        "• Animated a blockchain community within a team",
        "• Developed a traceability system on Hyperledger Fabric",
        "• Deployed Hyperledgfer Fabric networks",
        "• Developed smart contracts"
      ],
    },
    {
      name: "IRISA - INRIA laboratory",
      location: "Rennes, Brittany, France",
      startDate: "Jun 2022",
      endDate: "Jul 2022",
      description: [
        "• Developed a reliable broadcast algorithm to replace blockchain consensus",
        "• Learned Rust, cryptographic signatures and networking",
      ],
    },

    {
      name: "Table Tennis Châteaugiron",
      location: "Châteaugiron, Brittany, France",
      startDate: "Sep 2016",
      endDate: "Feb 2023",
      description: [
        "• Trained senior/junior players during weekly sessions",
        "• Created customized sessions",
        "• Led a group of people",
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
      description: "Planning poker application built with Angular and NestJS, which allows users to create a room and estimate tasks duration for projects.",
      isFeatured: true,
      thumbnail: "/assets/images/planning_poker.png",
      githubUrl: "https://github.com/12-3-8-s9b9o9j9t/tsd-project"
    },
  ],
};
