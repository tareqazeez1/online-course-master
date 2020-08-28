import React from 'react';
import man from '../../imgs/Photos/Man.png';
const Testimonial = () => {
    return (
        <div>
            <section className="container" id="outhes">
                <h1 className="section-heading">Testimonial</h1>
                <div className="row">
                    <div className="offset-md-2"></div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center">
                        <img className="testimonial-img" src={man} alt=""></img>
                        <p> Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable.</p>
                    </div>
                    <div className="offset-md-2"></div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;