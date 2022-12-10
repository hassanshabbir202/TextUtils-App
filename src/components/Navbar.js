import React from 'react'

const Navbar = (props) => {

   const handlePrimary = () => {
    document.body.style.backgroundColor = "#24a0ed"
   }
   const handleSuccess = () => {
    document.body.style.backgroundColor = "#5cb85c"
   }
   const handleDanger = () => {
    document.body.style.backgroundColor = "#d9534f"
   }
   const handleWarning = () => {
    document.body.style.backgroundColor = "	#f0ad4e"
   }
   const handleInfo = () => {
    document.body.style.backgroundColor = "#5bc0de"
   }


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
    </div>

     {/* Different Colors */}

      <button type="button" className="btn btn-primary mx-2 mode" onClick={handlePrimary}></button>
      <button type="button" className="btn btn-success mx-2 mode" onClick={handleSuccess}></button>
      <button type="button" className="btn btn-danger mx-2 mode" onClick={handleDanger}></button>
      <button type="button" className="btn btn-warning mx-2 mode" onClick={handleWarning}></button>
      <button type="button" className="btn btn-info mx-2 mode" onClick={handleInfo}></button>

    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.enableMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>

</nav>
    </>
  )
}


export default Navbar

