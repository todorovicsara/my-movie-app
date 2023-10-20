import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white '>
      <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/3339557e-b577-4d63-9ef6-7e1f6f88d21d/RS-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background-picture"
      />
      <div className='bg-logCabin opacity-60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account