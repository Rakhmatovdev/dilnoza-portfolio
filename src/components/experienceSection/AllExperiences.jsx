import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "HR Administrator",
    company: "Alex Apps",
    date: "2024 - Present",
    responsibilities: [
      "Managing employee records and ensuring compliance with company policies.",
      "Supporting recruitment processes, including screening and onboarding.",
      "Assisting in performance management and employee engagement initiatives.",
      "Developing strategies to enhance workplace culture and productivity.",
    ],
  },
  {
    job: "HR Trainer",
    company: "Nucamp",
    date: "2025 - Present",
    responsibilities: [
      "Conducting training sessions on HR policies and best practices.",
      "Supporting employees with professional development and career guidance.",
      "Providing HR support and addressing employee concerns effectively.",
    ],
  },
  {
    job: "HR Consultant",
    company: "Sprints",
    date: "2025 - Present",
    responsibilities: [
      "Advising on HR strategies, talent acquisition, and employee retention.",
      "Developing training programs for HR teams and management.",
      "Supporting organizations in implementing effective HR solutions.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
