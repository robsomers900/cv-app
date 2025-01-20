import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='left-container'>
        <form className='personal-details'>
          <h1>Personal Details</h1>
          <div className='input-group'>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="full-name" id="full-name" />
          </div>
          <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className='input-group'>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>
        </form>
        <form className='education'>
          <h1>Education</h1>
          <div className='input-group'>
            <label htmlFor="school">School/University</label>
            <input type="text" name="school" id="school" />
          </div>
          <div className='input-group'>
            <label htmlFor="major">Major/Degree</label>
            <input type="text" name="major" id="major" />
          </div>
          <div className='input-group'>
            <label htmlFor="year-school">Year</label>
            <input type="text" name="year-school" id="year-school" />
          </div>
        </form>
        <form className='work-experience'>
          <h1>Work Experience</h1>
          <div className='Company'>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" />
          </div>
          <div className='input-group'>
            <label htmlFor="Title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className='input-group'>
            <label htmlFor="year-work">Year</label>
            <input type="text" name="year-work" id="year-work" />
          </div>
        </form>
      </div>
      <div className='right-container'>

      </div>
    </>
  )
}

export default App
