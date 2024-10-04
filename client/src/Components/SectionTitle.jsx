import React from 'react'
import "../index.css"
function SectionTitle(
    {
        title,
    }
) {
  return (
    <div className='flex '>
        <h1 className='text-2xl text-blue-400 ubuntu-bold '> 
            {
                title
            }
        </h1>
      
    </div>
  )
}

export default SectionTitle
