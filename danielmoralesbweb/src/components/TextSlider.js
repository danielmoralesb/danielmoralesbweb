import React, { useState } from 'react';

const TextSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { person: 'Dylan Young', content: 'Daniel\'s unique skill, in my opinion, is his extreme attention to detail. I\'ve worked and even managed many developers in my career and most developers have that "good enough" attitude that will leave you wondering why they missed a bunch of detail, while Daniel, on the other hand, you give him a task, and he\'ll make sure all scenarios work as they should.' },
        { person: 'Ron Vitale', content: 'I can share that you were extremely efficient with completing your work and it was of highest quality. What I appreciated is that when you had a question, you reached outto me directly to obtain clarification on what the issue was so that you did not waste time going down the wrong path.' },
        { person: 'Patti Stamp', content: 'Wow, I had no idea. Daniel!! All I knew is that you were working on the site & things are on track (which is critical for this brand!). It’s wonderful to see you went beyond & made improvements & it will become a useful resource. Well done, sir!' },
    ];


    return (
        <div className="slider-text">
            <div className='slider-text__inner'>
                <q>{slides[currentSlide].content}</q>
                <h5>{slides[currentSlide].person}</h5>
            </div>
            <div className='slider-text__dots'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? 'active' : ''}
                        onClick={() => setCurrentSlide(index)}
                    ><span></span></button>
                ))}
            </div>
        </div>
    );
};


export default TextSlider;