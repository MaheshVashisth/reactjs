import React from 'react'

function Alert(props){
//     const capital =(word) =>{
//     const lower = word.toLowerCase();
//         return lower.charAt(0).toUppercase() + lower.slice(1);
//     }
   return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>Success</strong>:{props.alert.msg}
</div>
  )}

export default Alert