import React from 'react';
const Course = (props) => {
    const courseData = props.data;
    const {name,instructor, price, image, topic} = courseData;
    return (
        <div className="col-md-4 col-12 col-sm-6">
            <div className="course-box">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">Instructed by {instructor}</p>
                    <p className="card-text">Course type: {topic}</p>
                    <button onClick={() =>props.btn(courseData)} className="button buy-course">Enrole</button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <i className="fa fa-calendar" aria-hidden="true"> Starts 01  Jan, 2021</i>
                        <i className="fa fa-user-o" aria-hidden="true"> 99 seats</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;