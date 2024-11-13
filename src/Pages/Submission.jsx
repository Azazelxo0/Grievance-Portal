import React from 'react'
import './submission.css'

export default function Submission() {
  return (
    <div style={{ backgroundColor: '#FFAB91', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div className="form-container">
        <h2>Submit Your Grievance</h2>
        <form className="form">
          <label>
            Name:
            <input type="text" name="name" placeholder="Enter your name"  />
          </label>

          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email"/>
          </label>

          <label>
            Grievance:
            <textarea name="grievance" placeholder="Describe your grievance" rows="4" ></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}
