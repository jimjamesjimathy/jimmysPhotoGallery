import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

export default function Photo({ selectedPhoto, setSelectedPhoto }) {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
          setSelectedPhoto(null);
        }
      }
    
      return (
        <motion.div className="backdrop" onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img src={selectedPhoto} alt="enlarged pic" 
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          />
        </motion.div>
      )
}
