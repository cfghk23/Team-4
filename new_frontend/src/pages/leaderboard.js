import React, { useState } from "react";
import Layout from "@theme/Layout";

const leaderboard = () => {
  const [filterCourse, setFilterCourse] = useState("All");

  // Sample data for the leaderboard
  const leaderboardData = [
    { name: "John", course: "Course A", score: 90 },
    { name: "Jane", course: "Course B", score: 85 },
    { name: "Mike", course: "Course A", score: 95 },
    { name: "Sarah", course: "Course C", score: 88 },
    { name: "David", course: "Course B", score: 92 },
  ];

  // Get unique course values for filtering
  const courses = [
    "All",
    ...new Set(leaderboardData.map((data) => data.course)),
  ];

  // Filter the leaderboard data based on the selected course
  const filteredData =
    filterCourse === "All"
      ? leaderboardData
      : leaderboardData.filter((data) => data.course === filterCourse);

  // Sort the leaderboard data in descending order by score
  const sortedData = filteredData.sort((a, b) => b.score - a.score);

  return (
    <Layout>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h2>Leaderboard</h2>
            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Filter by Course"
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
              >
                {courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.course}</td>
                    <td>{data.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default leaderboard;
