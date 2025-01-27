import './workexperience.css'

function WorkExperience({company, handleCompanyChange, title, handleTitleChange, year, handleYearChange}){
    return (
      <>
        <form className='work-experience'>
          <h1>Work Experience</h1>
          <div className='work-experience-input-group'>
            <label htmlFor="company">Company</label>
            <input className='work-experience-input' type="text" name="company" id="company" value={company} onChange={(event) => handleCompanyChange(event)} />
          </div>
          <div className='work-experience'>
            <label htmlFor="title">Title</label>
            <input className='work-experience-input'type="text" name="title" id="title" value={title} onChange={(event) => handleTitleChange(event)}/>
          </div>
          <div className='work-experience-input-group'>
            <label htmlFor="year">Year</label>
            <input className='work-experience-input' type="text" name="year" id="year" value={year} onChange={(event) => handleYearChange(event)}/>
          </div>
        </form>
      </>
    )
  }

  function WorkExperienceRender({company, title, year}){
    return(
      <>
        <h1>
          {company}
        </h1>
        <div className='contact-container'>
          <h4>
            {title}
          </h4>
          <h4>
            {year}
          </h4>
        </div>
      </>
    )
  }
  
export {WorkExperience, WorkExperienceRender}