import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Layout from "@theme/Layout";

const Dashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState("Course A");
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const studentColors = [
      "rgba(54, 162, 235, 0.5)",
      "rgba(255, 99, 132, 0.5)",
      "rgba(75, 192, 192, 0.5)",
      "rgba(255, 205, 86, 0.5)",
      "rgba(153, 102, 255, 0.5)", // Additional color 1
      "rgba(255, 159, 64, 0.5)", // Additional color 2
    ];

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Student 1",
          "Student 2",
          "Student 3",
          "Student 4",
          "Student 5",
          "Student 6",
        ],
        datasets: [
          {
            label: selectedCourse,
            data: [80, 65, 75, 90, 30, 50],
            backgroundColor: studentColors,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: selectedCourse,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [selectedCourse]);

  const handleFilter = (course) => {
    setSelectedCourse(course);
  };

  return (
    <Layout>
      <div className="container">
        <div className="align-items-center">
          <h1 className="mt-4">Teacher's Dashboard</h1>
          <div className="row mt-4">
            <div className="col-md-8">
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-start">
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="filterDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {selectedCourse}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="filterDropdown"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleFilter("Course A")}
                      >
                        Course A
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleFilter("Course B")}
                      >
                        Course B
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleFilter("Course C")}
                      >
                        Course C
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
