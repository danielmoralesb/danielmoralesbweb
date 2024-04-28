import { data } from '../data';
import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % data.testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setShow(true);
        const timeout = setTimeout(() => {
            setShow(false);
        }, 4500); 

        return () => clearTimeout(timeout);
    }, [currentSlide]);

    const testimonial = data.testimonials[currentSlide];

    return (
        <div className="container">
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="slider-text">
                    <div className={`slider-text__inner ${show ? 'show' : ''}`}>
                        <q>{testimonial.content}</q>
                        <h5>{testimonial.person}</h5>
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

export default Slider;