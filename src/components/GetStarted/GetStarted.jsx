import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get started with ResidenceHub</span>
                    <span className='secondaryText'>Subscribe now to receive exclusive offers and attractive price quotes tailored to your preferences. Find your dream residence quickly and easily.</span>
                    <button className='button'>
                        <a href="mailto:sangdeepganvir@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;