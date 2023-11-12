import React from "react";

import { motion } from "framer-motion";
import Socials from "./socials";
import Link from "next/link";

const Welcome = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="max-w-xl mx-auto px-8 py-2 mt-0 md:px-0 md:py-0 md:mt-20"
    >
      <div className="  flex flex-col items-start justify-center mt-8 space-y-3">
        <h1 className="text-2xl md:text-3xl  font-bold text-gray-200 tracking-wide mb-1 md:mb-5 flex items-center justify-center">
          Merhaba, Ben Emre
          <motion.div
            animate={{ rotateZ: [-10, 20, -10] }}
            transition={{ repeat: Infinity }}
          >
            👋
          </motion.div>
        </h1>
        <p className="text-lg md:text-xl leading-12 text-gray-300 tracking-wide">
          Şu anda İstanbul'da yaşıyorum ve{" "}
          <Link target="_blank" href="https://entererp.com">
            EnterERP
          </Link>{" "}
          firmasında Frontend Developer olarak çalışıyorum.💻
        </p>
        <p className="text-lg md:text-xl leading-12 text-gray-300 tracking-wide ">
          3D modellemeyi 🗿, fotoğraf çekmeyi 📸, oyun oynamayı 🎮 ve proje
          geliştirmeyi seviyorum.⌨ Son zamanlarda FPV Drone ile ilgileniyorum ve
          drone uçuruyorum.🚁
          <br />
          <br />
          Şu an için boş vakitlerimde oyun geliştirme ile ilgileniyorum ve Unity
          öğreniyorum.🎮
        </p>
      </div>
      <Socials />
    </motion.section>
  );
};

export default Welcome;
