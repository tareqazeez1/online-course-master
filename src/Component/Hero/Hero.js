import React from 'react';
import heroImage from '../../imgs/Photos/Illustration.png';
const Hero = () => {
    return (
        <div>
             <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        
                        <h1>Learn With <br></br><span>Online Course</span>.com <br/></h1>
                            <h2>on any schedule</h2>
                        <h4>Make your learning more efficient with us...
                            Ready your own schedule with your prefered time.</h4>
                        <button className="button get-started">Get Started</button>
                    </div>
                    <div className="col-md-6">
                        <img className="hero-img" src={heroImage} alt=""></img>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;