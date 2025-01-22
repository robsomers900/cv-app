import './personaldetails.css'

export default function PersonalDetails({name, handleNameChange, email, handleEmailChange, address, handleAddressChange}){
    return (
      <>
        <div className='personal-details-container'>
          <form className='personal-details'>
            <h1>Personal Details</h1>
            <div className='personal-details-input-group'>
              <label htmlFor="full-name">Full Name</label>
              <input className='personal-details-input' type="text" name="full-name" id="full-name" value={name} onChange={(event) => handleNameChange(event)} />
            </div>
            <div className='personal-details-input-group'>
              <label htmlFor="email">Email</label>
              <input className='personal-details-input'type="email" name="email" id="email" value={email} onChange={(event) => handleEmailChange(event)}/>
            </div>
            <div className='personal-details-input-group'>
              <label htmlFor="address">Address</label>
              <input className='personal-details-input' type="text" name="address" id="address" value={address} onChange={(event) => handleAddressChange(event)}/>
            </div>
          </form>
        </div>
      </>
    )
  }