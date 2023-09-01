import React from 'react'

function Contact({img, phone,name,email})
{
console.log(img)

  return (
  <>
    <div className="nav--logo">
        <img src={img} alt="data" />
       <h3>
       {name}
       </h3>
       <div className='info'>
        <img src="../images/r.png" />
        <p>{phone}</p>
       </div>
       <div className='info'> 
        <img src="./images/r.png" />
        <p>{email} {name}</p>
       </div>
    </div>
    </>
  )
}

export default Contact