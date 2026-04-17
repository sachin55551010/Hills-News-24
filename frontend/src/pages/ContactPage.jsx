import { motion } from "motion/react";

import { Link } from "react-router-dom";
import { FollowBtn } from "../components/FollowBtn";
export const ContactPage = () => {
  const growUp = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };
  return (
    <div className="min-h-screen w-full bg-base-100 text-base-content font-serif">
      {/* Navbar */}
      <motion.nav
        {...growUp}
        className="w-full px-8 py-4 flex items-center border-b border-base-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex items-center justify-center text-white font-black text-sm bg-[#c0392b]">
            H
          </div>

          {/* heading and follow button */}
          <div className="flex items-center gap-4">
            <span className="font-bold tracking-widest text-sm uppercase">
              Hills News 24
            </span>

            <FollowBtn />
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.div
        {...growUp}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-10 relative overflow-hidden bg-linear-to-br from-base-100 via-base-200 to-base-100 border-b border-base-300"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-[#c0392b]" />

        <div className="max-w-3xl mx-auto pl-6">
          <p className="text-xs tracking-widest uppercase mb-2 text-[#c0392b]">
            Get in Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Contact Us
          </h1>

          <p className="mt-3 text-sm max-w-md text-base-content/60">
            Have a story tip, feedback, or press inquiry? Reach out to the Hills
            News 24 team.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-8 py-12 flex flex-col gap-8">
        {/* Channel Card */}
        <motion.div
          {...growUp}
          transition={{ delay: 0.1 }}
          className="rounded-xl p-6 border border-base-300 bg-base-200"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-lg bg-[#c0392b]">
              HN
            </div>

            <div>
              <h2 className="font-bold text-lg">Hills News 24</h2>
              <p className="text-xs tracking-widest uppercase text-[#c0392b]">
                Breaking News • 24/7
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-base-content/60">
            Your trusted regional news source covering Himachal Pradesh — from
            breaking news and politics to culture and development stories that
            matter to you.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          {...growUp}
          transition={{ delay: 0.2 }}
          className="rounded-xl p-6 border border-base-300 bg-base-200"
        >
          <p className="text-xs tracking-widest uppercase mb-4 text-[#c0392b]">
            Primary Contact
          </p>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-base-300">
              GB
            </div>

            <div>
              <p className="font-semibold">Gopal Singh Bhan</p>
              <p className="text-xs text-base-content/60">
                Bureau Chief & Editor
              </p>
            </div>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          {...growUp}
          transition={{ delay: 0.3 }}
          className="rounded-xl p-6 border border-base-300 bg-base-200"
        >
          <p className="text-xs tracking-widest uppercase mb-4 text-[#c0392b]">
            Office Address
          </p>

          <p className="text-sm font-medium leading-relaxed">
            Old Court Road, Near New Hospital
          </p>

          <p className="text-sm text-base-content/60">PO & Teh: Kandaghat</p>

          <p className="text-sm text-base-content/60">
            District Solan, Himachal Pradesh
          </p>

          <p className="text-sm text-base-content/60">India — 173215</p>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          {...growUp}
          transition={{ delay: 0.4 }}
          className="rounded-xl p-6 border border-base-300 bg-base-200"
        >
          <p className="text-xs tracking-widest uppercase mb-4 text-[#c0392b]">
            Quick Info
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Founded", value: "2018" },
              { label: "Language", value: "Hindi / English" },
              { label: "Broadcast", value: "24 × 7 Live" },
              { label: "Coverage", value: "Himachal Pradesh" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-widest mb-1 text-base-content/50">
                  {item.label}
                </p>

                <p className="text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
