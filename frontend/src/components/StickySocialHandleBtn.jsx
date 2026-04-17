import { useState } from "react";
import { motion } from "motion/react";
import { Facebook, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
export const StickySocialHandleBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
    console.log("Hello");
  };

  return (
    <div
      onClick={handleClickBtn}
      className="fixed bg-red-500/80 z-100 bottom-15 right-10 rounded-full w-12 h-12 cursor-pointer flex items-center justify-center"
    >
      {isOpen ? <X strokeWidth={3} /> : <GiClick size={22} />}

      <div onClick={(e) => e.stopPropagation()}>
        <a
          href="https://www.facebook.com/profile.php?id=61558024287948"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="fixed bg-blue-400 z-100 bottom-30 right-10 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
            initial={false}
            animate={isOpen ? { y: 0, scale: 1 } : { y: 20, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Facebook size={26} />
          </motion.div>
        </a>

        <a
          href="https://wa.me/919817540917?text=Hello%20I%20want%20more%20information"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="fixed bg-green-500 z-100 bottom-45 right-10 rounded-full w-12 h-12 flex items-center justify-center"
            initial={false}
            animate={
              isOpen ? { y: [20, 10, 0], scale: 1 } : { y: 20, scale: 0 }
            }
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <FaWhatsapp size={26} />
          </motion.div>
        </a>

        <a
          href="https://www.youtube.com/@hillsnews1450"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="fixed bg-red-500 z-100 bottom-60 right-10 rounded-full w-12 h-12 flex items-center justify-center"
            initial={false}
            animate={isOpen ? { y: 0, scale: 1 } : { y: 20, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <IoLogoYoutube size={22} />
          </motion.div>
        </a>

        <a
          href="https://x.com/hillsNews24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="fixed bg-gray-500 z-100 bottom-75 right-10 rounded-full w-12 h-12 flex items-center justify-center"
            initial={false}
            animate={isOpen ? { y: 0, scale: 1 } : { y: 20, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <BsTwitterX size={20} />
          </motion.div>
        </a>
      </div>
    </div>
  );
};
