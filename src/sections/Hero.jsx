import React from 'react'
import {arrowRight}  from '../assets/icons'
import Button from '../components/Button'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section className='w-full border-2 border-red-500 py-2 min-h-screen flex xl:flex-row flex-col justify-center gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our New Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p>Single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.</p>
        <Button label = "Shop Now" iconURL ={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) =>(
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Hero