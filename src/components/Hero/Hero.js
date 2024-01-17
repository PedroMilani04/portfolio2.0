import React, { useEffect, useState } from 'react';
import './Hero.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Hero">
            <div className='a'>
                <h3 data-aos="fade-left" data-aos-duration="1000" className='aga3'>Hi there! I'm</h3>
               
                <div className='maintext' style={{ backgroundPositionY: `${scrollPosition}px` }}>
                    <div className='spans'>
                        <div className='first'>
                            <span className='1' data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">P</span>
                            <span className='2' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">E</span>
                        </div>
                        <div className='second'>
                            <span className='3' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1400">D</span>
                            <span className='4' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1900">R</span>
                            <span className='5' data-aos="fade-up" data-aos-duration="500" data-aos-delay="2400">O</span>
                        </div>
                    </div>
                    <div className='line' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="3000">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
