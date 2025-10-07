export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration and clear communication with clients.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zones and always open to syncs.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Constantly learning, adapting, and improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI/ML Engineer passionate about building real-world impact.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building innovative AI systems and automation tools.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to collaborate or start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
  
  export const projects = [
  {
    id: 1,
    title: "Nyaya-Sahay – AI Legal Chatbot",
    des: "An AI-powered legal chatbot handling 5,000+ queries with 1.5s avg response time using RAG, FastAPI, and Dockerized AWS deployment.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/parthkaria14/nyaya-sahay-SIH2024",
  },
  {
    id: 2,
    title: "Fauxreal AI – Synthetic Dataset Generator",
    des: "A synthetic data generation framework using CTGANs, WGANs, and VAEs to expand datasets and improve ML model generalization.",
    img: "/p2.svg",
    iconLists: ["/pytorch.svg", "/gan.svg", "/python.svg", "/data.svg", "/ml.svg"],
    link: "https://github.com/Devp21/FauxReal-Ai",
  },
  {
    id: 3,
    title: "Law4All – Multilingual Legal Aid System",
    des: "A multilingual legal chatbot supporting English, Hindi, Gujarati, and Marathi, built with LangChain, LLaMA-70B, and AWS S3.",
    img: "/p3.svg",
    iconLists: ["/langchain.svg", "/llama.svg", "/aws.svg", "/python.svg", "/ml.svg"],
    link: "",
  },
  {
    id: 4,
    title: "AdGenius AI – Marketing Optimization Agent",
    des: "A generative AI agent using Falcon-7B and LangChain to automate and optimize digital marketing campaigns.",
    img: "/p4.svg",
    iconLists: ["/langchain.svg", "/fastapi.svg", "/falcon.svg", "/ai.svg", "/python.svg"],
    link: "https://github.com/parthkaria14/AdGenius-AI",
  },
];

  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Intern – Fyregig",
    desc: "Developed a real-time binary audio classifier (90% accuracy) using Librosa and Scikit-learn, optimized for <200ms inference and deployed on AWS ECS with Docker.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Intern – Solunation",
    desc: "Built MiniFlush, a multiplayer Python + MongoDB game backend supporting 100+ concurrent players with WebSockets, reducing server load by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Development Intern – Smowcode",
    desc: "Engineered a JSON-to-node compiler automating workflows (60% setup reduction) and improved execution by 40% using Cython optimizations.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer Intern – Ryzen Tech",
    desc: "Developed and deployed 3 e-commerce platforms using ReactJS, Shopify, and Next.js, handling 1,000+ monthly orders with scalable infrastructure.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Web Developer Intern – Hungry Brain",
    desc: "Implemented SEO optimizations and enhanced Shopify listings, increasing organic traffic by 35% in 2 months.",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
];

  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];