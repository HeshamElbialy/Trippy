import React from 'react'

const Headpage = ({title, image}) => {
  return (
    <article className='head-page'>
      <h1>{title}</h1>
      <img src={image} alt="header imag" />
    </article>
  )
}

export default Headpage
