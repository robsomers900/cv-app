import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PersonalDetails, PersonalDetailsRender} from './personaldetails'
import { WorkExperience, WorkExperienceRender } from './workexperience'


function App() {
  const [name, setName] = useState("")
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const [email, setEmail] = useState("")
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const [address, setAddress] = useState("")
  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }
  const [company, setCompany] = useState("")
  const handleCompanyChange = (event) => {
    setCompany(event.target.value)
  }
  const [title, setTitle] = useState("")
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const [year, setYear] = useState("")
  const handleYearChange = (event) => {
    setYear(event.target.value)
  }
  return(
    <>
    <div className='personal-details-container'>
      <PersonalDetails  
        handleNameChange={handleNameChange} 
        name={name}
        handleEmailChange={handleEmailChange}
        email={email}
        handleAddressChange={handleAddressChange}
        address={address}
        />
      <WorkExperience 
        handleCompanyChange={handleCompanyChange}
        company={company}
        handleTitleChange={handleTitleChange}
        title={title}
        handleYearChange={handleYearChange}
        year={year}
        />
    </div>
      <RightSide 
        name={name}
        email={email}
        address={address}
        />
    </>
  )
}

function RightSide({name, email, address}){
  return(
    <div className='cv-container'>
      <PersonalDetailsRender 
        name={name} 
        email={email} 
        address={address}/>

    </div>
  )
}

export default App
