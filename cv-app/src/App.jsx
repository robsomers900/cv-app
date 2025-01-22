import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './personaldetails'


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
  return(
    <>
      <PersonalDetails  
        handleNameChange={handleNameChange} 
        name={name}
        handleEmailChange={handleEmailChange}
        email={email}
        handleAddressChange={handleAddressChange}
        address={address}
        />
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
    <div className='right-container'>
      <h1>
        {name}
      </h1>
      <div className='contact-container'>
        <h4>
          {email}
        </h4>
        <h4>
          {address}
        </h4>
      </div>
    </div>
  )
}

export default App
