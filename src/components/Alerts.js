import React from 'react'

const Alerts = (props) => {
  return (
    <div style={{height: "65px"}}>
   { props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
     <strong>{props.alert.msg}</strong>: {props.alert.type}
</div>}
</div>
     
  )
}

export default Alerts
