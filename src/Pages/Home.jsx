import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Homepage.css';
import { motion } from "motion/react"




export default function Home() {

  

  return (
    <>
      <div className="background">
        <div className="overlay"></div>
        <div className="content">
          <motion.h1 className="text-4xl font-bold mb-4"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "linear" }} >Welcome to Superhero Grievance Portal</motion.h1>
          <motion.p
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
            className="text-xl mb-6" >When justice is called upon, our hero answers every voice.</motion.p>
          <div>
            <Link to={"/submission"}>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.3, delay: 0.3, ease: "linear" } }}
                whileHover={{ scale: 1.1, transition: { duration: 0.1, ease: "linear"} }}
                className="b1" >
                File Your Grievance
              </motion.button>
            </Link>
            <br />
            <Link to={"/about"}>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.3, delay: 0.3, ease: "linear" } }}
                whileHover={{ scale: 1.1, transition: { duration: 0.1, ease: "linear" } }}
                className="b2" >
                About Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div >


    </>
  )
}
