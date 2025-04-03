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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
