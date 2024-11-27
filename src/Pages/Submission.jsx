import React, { useState } from 'react'
import './submission.css'
import { saveApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Submission() {

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    category: "",
    grievance: ""
  })
  console.log(userData);

  const handlesave = async (e) => {
    e.preventDefault();
    const { name, email, category, grievance } = userData;
    if (!name || !email || !grievance || !category) {
      toast.warning('please fill the form completely')
    }
    try {
      setLoading(true);
      const result = await saveApi(userData)
      console.log('userdata', result);

      if (result.status === 201) {
        setUserData({
          name: "",
          email: "",
          category: "",
          grievance: ""
        })
        toast.success("grievance registeration successfull")

      }
      else if (result.status == 400) {
        toast.error(result.response.data)
      }
      else {
        toast.error('Something happend')
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again later.");
    } finally {
      setLoading(false);
    }





  }
  return (
    <div style={{ backgroundColor: '#FFAB91', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div className="form-container">
        <h2>Submit Your Grievance</h2>
        {loading ? (
          <p className="comic-loading">Loading...</p>
        ) : (
          <form className="form">
            <label>
              Name:
              <input
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                type="text" name="name" placeholder="Enter your name" />
            </label>

            <label>
              Email:
              <input
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                type="email" name="email" placeholder="Enter your email" />
            </label>

            <div>
              <Dropdown className=''>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Danger Level
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setUserData({ ...userData, category: 'low' })}>LOW</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setUserData({ ...userData, category: 'moderate' })}>MODERATE</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setUserData({ ...userData, category: 'critical' })}>CRITICAL</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <label>
              Grievance:
              <textarea
                value={userData.grievance}
                onChange={(e) => setUserData({ ...userData, grievance: e.target.value })}
                name="grievance" placeholder="Describe your grievance" rows="4" ></textarea>
            </label>

            <button
              onClick={handlesave}
              type="submit">Submit</button>
          </form>
        )}

      </div>
      <ToastContainer />
    </div>
  )
}
