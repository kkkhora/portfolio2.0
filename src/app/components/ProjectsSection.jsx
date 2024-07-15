"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "business landing website",
    description: "food service business website",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://spimfg.com.my/",
    previewUrl: "https://spimfg.com.my/",
  },
  {
    id: 2,
    title: "e-commerce website",
    description: "electronic products online shop",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://aiwa.com.sg/",
    previewUrl: "https://aiwa.com.sg/",
  },
  {
    id: 3,
    title: "business landing website",
    description: "construction company business website",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://berlateh.com/",
    previewUrl: "https://berlateh.com/",
  },
  {
    id: 4,
    title: "business landing website",
    description: "fruit company business website",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://sunnyfruithouse.com/",
    previewUrl: "https://sunnyfruithouse.com/",
  },
  {
    id: 5,
    title: "e-commerce website",
    description: "electronic products and homeware online shop",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.bylumos.my/",
    previewUrl: "https://www.bylumos.my/",
  },
  {
    id: 6,
    title: "business landing website",
    description: "school education website",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://ohmy.com.my/about.html",
    previewUrl: "https://ohmy.com.my/about.html",
  },
  {
    id: 7,
    title: "business landing website",
    description: "organic farm and agriculture website",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://qarbotech.com/",
    previewUrl: "https://qarbotech.com/",
  },
  {
    id: 8,
    title: "business landing website",
    description: "healthcare business website",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://himmelcare.com/en/",
    previewUrl: "https://himmelcare.com/en/",
  },
  {
    id: 9,
    title: "business landing website",
    description: "agriculture supply business website",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://interflour.com/",
    previewUrl: "https://interflour.com/",
  },
  {
    id: 10,
    title: "business landing website",
    description: "skin and healthcare business website",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://maxpineinternational.com/",
    previewUrl: "https://maxpineinternational.com/",
  },
  {
    id: 11,
    title: "entertainment website",
    description: "music recommendation website (database & machine learning)",
    image: "/images/projects/11.png",
    tag: ["All", "Web", "Others"],
    gitUrl: "https://github.com/kkkhora/Music-Recommendation-Web-App",
    previewUrl: "https://drive.google.com/file/d/1HxWZo6unKJc66SyYFCjPTMGUNqQR8s57/view",
  },
  {
    id: 12,
    title: "big data analysis and machine learning prediction project",
    description: "This project builds a pricing model which can be applied for predicting a specific wine price by given information. NLP, Machine Learning(supervised and unsupervised)",
    image: "/images/projects/12.png",
    tag: ["All", "Others"],
    gitUrl: "https://colab.research.google.com/drive/1niKMYA3LXX4CJ5Gj1FAcfst6axhG4vtx?usp=drive_link",
    previewUrl: "https://drive.google.com/file/d/1HxWZo6unKJc66SyYFCjPTMGUNqQR8s57/view",
  },
  {
    id: 13,
    title: "UI/UX design, mobile app devlopment, AI integration",
    description: "This ongoing project recommends music based on user's astrology horoscope and daily transits. It is integrated with GPT-4 and Suno-AI, analysing user's music tastes, recommending music for them, and letting the user create music of their own. \n (Url is currently unavailable as the project is still ongoing)",
    image: "/images/projects/13.png",
    tag: ["All", "Others"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Div by Zero Debugger",
    description: "Static Analysis: reaching definition analysis, pointer analysis, taint analysis. C++, LLVM, Souffle(dataLog)",
    image: "/images/projects/14.jpg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/kkkhora/Div-By-Zero-Debugger",
    previewUrl: "https://github.com/kkkhora/Div-By-Zero-Debugger",
  },
  {
    id: 15,
    title: "Open-source plugin devlopment",
    description: "Multiscale Geographical Weighted Regression Plugin for QGIS",
    image: "/images/projects/15.jpeg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/yiwu-gis/mgwr_plugin?tab=readme-ov-file",
    previewUrl: "https://github.com/yiwu-gis/mgwr_plugin?tab=readme-ov-file",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
