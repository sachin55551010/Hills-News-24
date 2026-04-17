import newLogo from "../assets/newLogo.png";
import { STATS } from "../components/constants/stats";
import { TAGLINES } from "../components/constants/taglines";
import { motion } from "motion/react";
import { FollowBtn } from "../components/FollowBtn";
export const Aboutpage = () => {
  return (
    <section className="dvh-h w-dvw">
      <div className="mt-6 px-4">
        <motion.div
          className="flex justify-center md:justify-normal"
          animate={{ scale: [2, 1] }}
          transition={{ duration: 1, ease: "circInOut" }}
        >
          <div className="border-l-2 border-red-500 p-1 w-fit flex gap-4 items-center">
            <h6 className="text-red-500">Est. 2019 · Himachal Pradesh</h6>
            <FollowBtn />
          </div>
        </motion.div>

        {/* image and heading section */}
        <div className="flex flex-col items-center md:flex-row gap-4 mt-4">
          <motion.img
            animate={{ x: [-50, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={newLogo}
            alt=""
            className="h-40 w-auto"
            loading="lazy"
          />
          <div className=" text-[clamp(2rem,5vw,3rem)] mb-6 ">
            <motion.h2
              className="about-heading font-semibold"
              animate={{ x: [50, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              The Hills Have
            </motion.h2>
            <motion.h2
              className="voice italic text-red-500"
              animate={{ y: [50, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              A Voice
            </motion.h2>
          </div>
        </div>
      </div>

      {/* paragraph section */}
      <p className="text-base-content/60 font-semibold max-w-150 text-sm leading-7 tracking-wide mt-4 px-4">
        Hills News 24 is Himachal Pradesh's most trusted independent digital
        newsroom bringing you ground-truth journalism from the mountains to the
        plains, every hour of every day.
      </p>

      {/* channel information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex border-y border-base-content/20 mt-6 py-3 px-2"
      >
        {STATS.map((stats, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col gap-2 border-r border-base-content/20 py-4"
            >
              <h6 className="text-center">{stats.title}</h6>
              <p className="flex flex-col text-center text-sm font-semibold text-base-content/40">
                {stats.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* tag line */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#c0392b] py-4 text-center mt-12"
      >
        <h6 className="text-gray-300 font-bold">
          "Your Voice. Your Hills. Your News."
        </h6>
      </motion.div>

      {/* our mission section */}
      <motion.div
        className="mt-10 p-4 flex flex-col lg:flex-row gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* heading */}
        <div className="flex-1">
          <h6 className="text-[#c0392b]">OUR MISSION</h6>
          <h6 className="font-bold text-2xl mt-4">
            Journalism rooted in the region
          </h6>
        </div>

        {/* details */}
        <div className="flex-1">
          <p className="tracking-wider text-base-content/80 leading-7">
            We believe local stories matter. From Solan to the Shimla foothills,
            Hills News 24 covers the stories that shape life in Himachal
            Pradesh—with accuracy, fairness, and a deep respect for the
            communities we serve. Our team of journalists, editors, and
            photographers work around the clock to deliver news that is fast
            without being reckless, and independent without being partisan.
          </p>

          {/* tags */}
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-3">
            {TAGLINES.map((elem, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="border rounded-sm border-base-content/30 text-center py-2 text-[.8rem] text-base-content/50 font-semibold"
                >
                  {elem}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
