import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex w-full flex-row justify-between items-center gap-10 max-container'>
      <div className='flex flex-1 flex-col text-left'>
        <h2 className='text-4xl font-palanquin capitalize font-bold lg:max-w-lg'>Strut your stuff in <span className='text-coral-red'>style</span> <span className='text-coral-red'>every</span>day</h2>
        <p className='mt-4 lg:max-lg info-text '>Strut your stuff in style, work out with confidence, or just relax in comfort. Whatever you're into, adidas has the shoes to match your routine.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Refresh your style for fall with huge savings,11/1 through 11/8.</p>
        <div className='mt-11'>
        <Button label="View details"/>
        </div>
        
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe2" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality



