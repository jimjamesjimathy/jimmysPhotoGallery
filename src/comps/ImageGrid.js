import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import firebase from 'firebase/compat';
import '../index.css';

 
 export default function ImageGrid({ setSelectedPhoto }) {
     const { docs } = useFirestore('images');
     const photo = firebase.firestore().collection('images');
     return (
    <div className="img-grid">
      <h2>Your Photo Gallery: </h2>
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setSelectedPhoto(doc.url)}
          />
          <button onClick={() => photo.doc(doc.id).delete()}>x</button>
        </motion.div>
      ))}
    </div>
  )
 }
 