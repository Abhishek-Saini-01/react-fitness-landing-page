import React from 'react'
import './Exercises.css'
import lunges from '../../assets/img/lunges.png'
import yogaPose from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'


const Exercises = () => {
  return (
    <section>
        <div className="container exercise__container">
            <div className="exercise_top">
                <h2 className="section__title">Benfits of <span className="highlights">Exercises</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Reprehenderit necessitatibus et, natus nam dicta earum.</p>
            </div>

            <div className="exercise__wrapper">
                <div className="exercise__item">
                    <span className='exercise_icon'>
                        <img src={lunges} alt="lunges" />
                    </span>

                    <div className="exercise__content">
                        <h4>Healty Life</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas voluptatem a illo, sapiente distinctio!</p>
                    </div>
                </div>
                <div className="exercise__item">
                    <span className='exercise_icon'>
                        <img src={yogaPose} alt="lunges" />
                    </span>

                    <div className="exercise__content">
                        <h4>Increased Flexibilty</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas voluptatem a illo, sapiente distinctio!</p>
                    </div>
                </div>
                <div className="exercise__item">
                    <span className='exercise_icon'>
                        <img src={extended} alt="lunges" />
                    </span>

                    <div className="exercise__content">
                        <h4>Reducing Blood Pressure</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas voluptatem a illo, sapiente distinctio!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercises