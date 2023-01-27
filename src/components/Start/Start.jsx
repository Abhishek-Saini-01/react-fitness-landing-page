import React from 'react'
import './Start.css'
import startImg from '../../assets/img/trainer.png'

const Start = () => {
  return (
    <section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={startImg} alt="trainer" />
                </div>

                <div className="start__content">
                    <h2 className="section__title">
                        Ready to make a <span className="highlights">Change ? </span> 
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, numquam, animi repellat atque expedita eius magnam in deleniti quos fugit ipsum enim quod voluptate. Maxime quibusdam debitis ex deleniti tempora. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, numquam, animi repellat atque expedita eius magnam in deleniti quos fugit ipsum enim quod voluptate. Maxime quibusdam debitis ex deleniti tempora.</p>
                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start