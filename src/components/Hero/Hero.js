import React, { useEffect } from 'react';
import './Hero.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="Hero">
            <div className='a'>
                <h3 data-aos="fade-left" data-aos-duration="1000">Hello there! My name is</h3>
                {/*                 <h1 data-aos="fade-right" data-aos-duration="2700" style={{ backgroundPositionY: `${scrollPosition}px` }}>PEDRO</h1>
 */}
                <div className='maintext'>
                    <div className='spans'>
                        <span className='1' data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">P</span>
                        <span className='2' data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">E</span>
                        <span className='3' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1400">D</span>
                        <span className='4' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1900">R</span>
                        <span className='5' data-aos="fade-up" data-aos-duration="500" data-aos-delay="2400">O</span>
                    </div>
                    <div className='line' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="3000">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
