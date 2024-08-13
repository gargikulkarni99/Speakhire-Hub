import React from 'react'

const donatePage = () => {
  return (
    <div>
      <div className='donate-container'>
      <div className='sub-donate'>
      <h1>Support SPEAKHIRE.</h1>
       <a href='#'>Donate</a>
      </div>
      <div className='sub-donate'>
      <iframe
        src="https://www.youtube.com/embed/sBqxJIBm7Zg"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="560"
        height="315"
      ></iframe>
      </div>
      </div>
    </div>
  )
}

export default donatePage
