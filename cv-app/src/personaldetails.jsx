import './personaldetails.css'

function PersonalDetails({name, handleNameChange, email, handleEmailChange, address, handleAddressChange}){
    return (
      <>
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
      </>
    )
  }

  function PersonalDetailsRender({name, email, address}){
    return(
      <div className='personal-details-cv-container'>
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
  
export {PersonalDetails, PersonalDetailsRender}