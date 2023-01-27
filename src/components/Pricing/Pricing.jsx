import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <section>
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">
                    Gym <span className='highlights'>Pricing</span> plan
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti dolore impedit nostrum non consequuntur totam.</p>
            </div>

            <div className="pricing__wrapper">
                <div className="pricing__item">
                    <div className="pricing__card__top">
                        <h2 className='section__title'>Regular Member</h2>
                        <h2 className='pricing section__title'>$49 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to gym</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer Support</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>5 Classes/week</li>
                        </ul>

                        <button className='register__btn'>Join Now</button>
                    </div>
                </div>

                <div className="pricing__item pricing__item-02">
                    <div className="pricing__card__top">
                        <h2 className='section__title'>Premium Member</h2>
                        <h2 className='pricing section__title'>$99 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to gym</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer Support</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>5 Classes/week</li>
                        </ul>

                        <button className='register__btn'>Join Now</button>
                    </div>
                </div>
            
                <div className="pricing__item">
                    <div className="pricing__card__top">
                        <h2 className='section__title'>Standard Member</h2>
                        <h2 className='pricing section__title'>$29 <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to gym</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer Support</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>5 Classes/week</li>
                        </ul>

                        <button className='register__btn'>Join Now</button>
                    </div>
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default Pricing