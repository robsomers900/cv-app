import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
      <LeftSide  
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



function LeftSide({name, handleNameChange, email, handleEmailChange, address, handleAddressChange}){
  return (
    <>
      <div className='left-container'>
        <form className='personal-details'>
          <h1>Personal Details</h1>
          <div className='input-group'>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="full-name" id="full-name" value={name} onChange={(event) => handleNameChange(event)} />
          </div>
          <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(event) => handleEmailChange(event)}/>
          </div>
          <div className='input-group'>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" value={address} onChange={(event) => handleAddressChange(event)}/>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
