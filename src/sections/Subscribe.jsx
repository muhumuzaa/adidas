
import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max:lg: flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px]  font-palanquin font-bold capitalize'>
        Signup for <span className='text-coral-red'>Updates</span> and newsletters
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm: border sm:border-slate-gray rounded-full'>
      <input type="text" placeholder='subscribe@adidas.com' className='input' />
      <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <Button label="Subscribe" fullWidth />
      </div>
      </div>
    
    </section>
  )
}

export default Subscribe