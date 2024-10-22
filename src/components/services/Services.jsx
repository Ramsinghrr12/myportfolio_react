import React from 'react'
import './Services.css'
import servicesData from '../../assets/servicesData'

export const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="services-container">
  {servicesData.map((service, index) => {
    return (
      <div key={index} className="services-format">
        <h3>{service.id}</h3>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <div className="services-readmore">
          <p>Read More</p>
          <img src="/img/arrow.png" alt="Arrow Icon" />
        </div>
      </div>
    );
  })}
</div>


    </div>
  )
}
export default Services;
