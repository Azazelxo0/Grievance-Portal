import React, { useState } from 'react'
import './submission.css'
import { saveApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Submission() {


  const [userData, setUserData] = useState({
    name: "",
    email: "",
    grievance: ""
  })
  console.log(userData);
  
  const handlesave = async (e) => {
    e.preventDefault();
    const { name, email, grievance } = userData;
    if (!name || !email || !grievance) {
      toast.warning('please fill the form completely')
    }
    else {
      const result = await saveApi(userData)
      console.log('userdata', result);

      if (result.status === 201) {
        setUserData({
          name: "",
          email: "",
          grievance: ""
        })
        toast.success("User registeration successfull")
       
      }
      else if (result.status == 400) {
        toast.error(result.response.data)
      }
      else {
        toast.error('Something happend')
      }
    }



  }
  return (
    <div style={{ backgroundColor: '#FFAB91', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div className="form-container">
        <h2>Submit Your Grievance</h2>
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
      </div>
      <ToastContainer />
    </div>
  )
}
