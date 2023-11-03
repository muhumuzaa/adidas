
import React from 'react'
import Button from '../components/Button'
import { shoes } from '../constants'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex items-center max-xl:flex-col-reverse justify-wrap max-container gap-10'>
      
      <div className='flex-1'>
          <img src={offer} alt="shoeoffer" width={773} className='object-contain w-full'/>
        </div>

      <div className='flex flex-1 text-left flex-col'>
        <h2 className='text-4xl font-palanquin capitalize font-bold lg:max-w-lg'><span className='text-coral-red'>Special</span> Offer on shoes</h2>
        <p className='mt-4 lg:max-lg info-text '>Strut your stuff in style, work out with confidence, or just relax in comfort. Whatever you're into, adidas has the shoes to match your routine.</p>
        <p className='mt-6 lg:max-w-lg info-text'>You need to add a media query to change flex-direction from row to column at the breaking point you define. You will likely want to change or remove your justify-content in this</p>
        <div className='mt-11 flex flex-wrap gap-5'>
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label="View details" backgroundColor ="bg-white" borderColor = "border-slate-gray" textColor ="text-slate-gray"/>
        </div>
        
        
      </div>

    </section>
  )
}

export default SpecialOffer