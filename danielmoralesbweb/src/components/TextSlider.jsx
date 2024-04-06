import React, { useState } from 'react';
import { data } from '../data';

const TextSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="container">
            <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="slider-text">
                <div className='slider-text__inner'>
                    <q>{data.testimonials[currentSlide].content}</q>
                    <h5>{data.testimonials[currentSlide].person}</h5>
                </div>
                <div className='slider-text__dots'>
                    {data.testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentSlide ? 'active' : ''}
                            onClick={() => setCurrentSlide(index)}
                        ><span></span></button>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
};


export default TextSlider;