import React from "react";
import { Link } from "react-router-dom";
import Layout from "@theme/Layout";

const courses = () => {
  const courses = [
    {
      id: 1,
      image:
        "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png",
      title: "Course 1",
      description: "This is the description for Course 1",
    },
    {
      id: 2,
      image:
        "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png",
      title: "Course 2",
      description: "This is the description for Course 2",
    },
    // Add more course objects as needed
  ];

  return (
    <Layout>
      <div className="container">
        <div className="row mt-4">
          {courses.map((course) => (
            <div className="col-md-3" key={course.id}>
              <div className="card">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <Link to={`/coursevideo`} className="btn btn-primary">
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default courses;
