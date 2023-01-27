import React from 'react'
import './Hero.css'
import heroImg from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/dumble.png'

const Hero = () => {
  return (
    <section >
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h2 className='section__title'>Exercise is the key to a <span className="highlights">Healthy</span> Lifestyle</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Vel beatae iusto, quibusdam magni facilis pariatur.</p>

                    <div className="hero__btns">
                        <button className='register__btn'>Get Started</button>
                        <button className='watch__btn'><span><i className="ri-play-fill"></i></span>Watch Video</button>
                    </div>
                </div>

                <div className="hero__img">
                    <div className="hero__img__wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={heroImg} alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart__rate">
                            <h5>Heart Rate</h5>
                            <span><i className='ri-heart-pulse-fill'></i></span>
                            <h6>2567 BPM</h6>
                        </div>

                        <div className="gym__location">
                            <span><i className="ri-map-pin-2-fill"></i></span>
                            <h5>Find a new <br /> gym near you</h5>
                        </div>

                        <div className="dumble__icon">
                            <img src={dumbleIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero