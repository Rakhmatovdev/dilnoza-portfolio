import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Images } from "../../../public";

const projects = [
  {
    name: "Administrator",
    year: "Mar2022",
    align: "right",
    image: Images.website1,
    link: "#",
  },
  {
    name: "HR",
    year: "Sept2022",
    align: "left",
    image: Images.website2,
    link: "#",
  },
  {
    name: "Call Center",
    year: "Jan2023",
    align: "right",
    image: Images.website3,
    link: "#",
  },
  {
    name: "Manager",
    year: "May2024",
    align: "left",
    image:Images.website4,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
