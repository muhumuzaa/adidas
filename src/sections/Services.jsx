

import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'


const Services = () => {
  return (
    <section className='max-container flex justify-center flex-1 flex-wrap gap-4'>
      {services.map((service) =>(
        <ServiceCard key ={service.label} {...service}/>
      ))}

    </section>
  )
}

export default Services