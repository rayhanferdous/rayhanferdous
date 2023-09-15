import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-xl:px-2.5 xl:w-[1260px] xl:mx-auto'>{children}</div>
  )
}

export default Container