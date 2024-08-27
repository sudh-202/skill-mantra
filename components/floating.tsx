"use client"

import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const FloatingButton = () => {
  const whatsappNumber = "9311694072"; 
  const phoneNumber = "+91 9311694072"; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const callPhoneNumber = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <AiOutlineWhatsApp size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={callPhoneNumber}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Call Us"
      >
        <FiPhone size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingButton;
