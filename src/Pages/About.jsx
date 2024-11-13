import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { motion } from "motion/react"
import './about.css'
import { Link } from 'react-router-dom'



function About() {
  return (
    <>
      <Row style={{ height: "1000px" }}>
        <Col md={4}>
          <motion.div

          >
            <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/fe13bbd1-29a9-4b7d-9d32-454e968da147/727df1fb-377f-44b7-8566-aeb4e89267e8.png"
              width='100%' alt="" />
          </motion.div>
        </Col>
        <Col md={4}>

          <motion.div >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all' }}
              className='text-center m-5'>
              <h1>ABOUT US</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all' }}
              whileHover={{ scale: 1.5, transition: { duration: 0.3, ease: "linear" } }}
              className='text-box '>
              <div className='text-center '>
                <h4 className='mb-3'>Meet Our Hero: Mumen Rider</h4>
                <p>He’s not the fastest, he’s not the strongest,
                  but Mumen Rider is undoubtedly the most relentless!
                  Known for his unmatched bravery and sense of justice,
                  Mumen Rider may lack superpowers, but he makes up for
                  it with his unwavering determination.
                  He doesn’t just fight villains—he stands up
                  for every voice in the city, big or small.
                  Mumen Rider is here to take up your grievances,
                  no matter how challenging they may be.</p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all' }}
              whileHover={{ scale: 1.5, transition: { duration: 0.3, ease: "linear" } }}
              className='text-box '>
              <div className='text-center '>
                <h4 className='mb-3'>Our Mission</h4>
                <p>In a world filled with powerful heroes and terrifying villains, the everyday issues of citizens often go unnoticed.
                  Mumen Rider’s mission is to give everyone the chance to be heard and to ensure that
                  even the smallest concerns receive the justice they deserve.
                  <br />

                  Whether it’s the problem of noisy villains causing chaos or
                  daily grievances that need a voice, Mumen Rider is here,
                  ready to listen, act, and make sure every complaint is given
                  fair attention.</p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all' }}
              whileHover={{ scale: 1.5, transition: { duration: 0.3, ease: "linear" } }}
              className='text-box '>
              <div className='text-center '>
                <h4 className='mb-3'>Mumen Rider’s Journey</h4>
                <p>Before becoming the city’s most trusted hero,
                  Mumen Rider was simply a regular citizen with a bike and a passion for
                  justice. He didn’t receive his powers from a meteor or ancient artifact;
                  instead, he built his heroism on grit and courage. Every time he was
                  knocked down, he got back up, and every time someone needed help, he
                  answered the call.
                  <br />

                  Armed only with his trusty bike, protective armor, and an unshakeable spirit,
                  Mumen Rider believes that true heroism comes from the heart. He vowed to use his
                  courage to make a difference, one grievance at a time.</p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all' }}
              whileHover={{ scale: 1.5, transition: { duration: 0.3, ease: "linear" } }}
              className='text-box '>
              <div className='text-center '>
                <h4 className='mb-3'>How We Address Grievances</h4>
                <p>At Mumen Rider’s headquarters, he and his dedicated team review each grievance submitted through this website.
                  Mumen Rider believes in the power of community and takes
                  every submission seriously, with the intent to bring real change.
                  <br />

                  Listening: Every submission is read with care, ensuring your voice is truly heard.
                  <br />
                  Analyzing: Each grievance is reviewed to determine the best course of action.
                  <br />
                  Acting: Mumen Rider may not have super-speed, but he has super dedication.
                  He takes every possible action to resolve issues, whether it’s through community
                  collaboration, riding to the scene, or spreading awareness.
                  <br />
                  Resolution: Mumen Rider’s goal is to inspire justice and fairness in the city,
                  bringing people together to create a safer, more inclusive community.</p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 'all' }}
              whileHover={{ scale: 1.5, transition: { duration: 0.3, ease: "linear" } }}
              className='text-box '>
              <div className='text-center '>
                <h4 className='mb-3'>Join the Journey to Justice</h4>
                <p>This website is more than a place to air grievances; it’s a community dedicated to fairness, unity, and the pursuit of justice.
                  Mumen Rider’s commitment is simple: to stand by you, to listen, and to fight for a just world where every concern is valued.
                  <br />

                  Are you ready to join Mumen Rider in the quest for a better world? Submit your grievance, share your story,
                  and let’s make our city a place where everyone’s voice matters. Together, let’s ride toward justice!</p>

              </div>
            </motion.div>
            <Link to={'/'}>
              <motion.button
                whileHover={{ scale: 1.2, transition: { duration: 0.3, ease: "linear" } }}
                className='b3 '>Back to Home</motion.button>
            </Link>


          </motion.div>


        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className='' >
        <Col md={4}>
        </Col>
        <Col md={5}></Col>
        <Col md={3}>
          <motion.div

          >
            <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/268c4b03-533f-4e81-aec1-0c22df466a90/7cce7424-741a-4a69-9044-73343613e865.png"
              width='100%' alt="" />
          </motion.div>

        </Col>
      </Row>

    </>
  )
}

export default About
