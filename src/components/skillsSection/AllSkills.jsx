import SingleSkill from "./SingleSkill";
import { 
  FaUsers, 
  FaUserPlus, 
  FaMoneyCheckAlt, 
  FaChartLine, 
  FaUserTie, 
  FaLightbulb, 
  FaChalkboardTeacher, 
  FaComments 
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Employee Relations",
    icon: FaUsers,
  },
  {
    skill: "Recruitment",
    icon: FaUserPlus,
  },
  {
    skill: "Payroll Management",
    icon: FaMoneyCheckAlt,
  },
  {
    skill: "Performance Evaluation",
    icon: FaChartLine,
  },
  {
    skill: "Team Leadership",
    icon: FaUserTie,
  },
  {
    skill: "Strategic Planning",
    icon: FaLightbulb,
  },
  {
    skill: "Training & Development",
    icon: FaChalkboardTeacher,
  },
  {
    skill: "Communicat",
    icon: FaComments,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
