import React from 'react';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import Hero from './Component/Hero/Hero';
import Nav from './Component/Nav/Nav';
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer/Footer';
import Course from './Component/Course/Course';
import FakeData from './FakeData/fakeData.js'
import { useState } from 'react';
import Cart from './Component/Cart/Cart';
function App() {
  const [course, setCourse] = useState(FakeData);
  const [cart, setCart] = useState([]);
  const enroleBtnhandler = (course) => {
    const newCart = [...cart, course]
    setCart(newCart);
  }

  return (
    <div>
      <section className="hero-area">
        <Nav></Nav>
        <Hero></Hero>          
      </section>
      <Cart courses = {cart}></Cart>
      

      <section className="container" id="courses">
        <h3 className="section-heading">Join Our Online Courses</h3>
        <div className="row">
            {
              course.map(x => <Course btn={enroleBtnhandler} key={x.id} data ={x}></Course>)
            }
        </div>
      </section>

      <Testimonial></Testimonial>
      <Footer></Footer>

    </div>
  );
}

export default App;
