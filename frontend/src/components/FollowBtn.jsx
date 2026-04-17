import { motion } from "framer-motion";
import fbIcon from "../assets/facebook_icon1.svg";

export const FollowBtn = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 px-4 py-1
      border border-blue-500 rounded-xl
       text-blue-500 font-medium
      shadow-sm hover:shadow-lg
      hover:bg-blue-500/40
      transition-all duration-300"
    >
      <motion.img
        src={fbIcon}
        alt="facebook"
        className="h-5"
        whileHover={{ rotate: 10 }}
      />
      Follow
    </motion.button>
  );
};
