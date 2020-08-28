import React from 'react';

const Footer = () => {
    return (
        <div>
            <section id="footer-area">
                <section className="container" id="footer-container">
                    <div className="row footer-height">
                        <div className="col-md-3 col-lg-4 d-flex align-items-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat voluptate blanditiis odio numquam ut itaque ab molestiae pariatur, nesciunt quis ad quae, ratione autem. Autem cupiditate alias officia veniam!</p>
                        </div>
                
                        <div className="offset-lg-2"></div>
                
                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 d-flex align-items-center">
                            <ul className="footer-link ">
                                <li className="link-heading">Course</li>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 d-flex align-items-center">
                            <ul className="footer-link">
                                <li className="link-heading">Terms</li>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 d-flex align-items-center">
                            <ul className="footer-link">
                                <li className="link-heading">Useful Link</li>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li> 
                            </ul>
                        </div>
                    </div>
                    <footer>
                        <p>Copyright © Tareq.com. All rights reserved.</p>
                    </footer>
                </section>
            </section>
        </div>
    );
};

export default Footer;