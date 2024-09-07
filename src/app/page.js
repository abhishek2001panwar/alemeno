'use client';
import React, { useState, useEffect } from "react";

const Page = () => {
  const courseData = [
    {
      id: "1",
      name: "Full-Stack Web Development",
      instructor: "Michael Johnson",
      description:
        "Become a full-stack developer by learning HTML, CSS, JavaScript, Node.js, and React.",
      enrollmentStatus: "Open",
      thumbnail: "your.image.here",
      duration: "12 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM-8:00 PM",
      location: "Online",
      prerequisites: ["Basic HTML", "JavaScript Fundamentals"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Web Development",
          content:
            "Overview of HTML, CSS, and JavaScript. Setting up the development environment.",
        },
        {
          week: 2,
          topic: "Advanced JavaScript and DOM Manipulation",
          content:
            "Deep dive into JavaScript, the DOM, and how to make websites interactive.",
        },
      ],
    },
    {
      id: "2",
      name: "Python for Data Science",
      instructor: "Emily Roberts",
      description:
        "Learn Python programming with a focus on data science, machine learning, and data visualization.",
      enrollmentStatus: "In Progress",
      thumbnail: "your.image.here",
      duration: "10 weeks",
      schedule: "Tuesdays and Thursdays, 5:00 PM-7:00 PM",
      location: "Online",
      prerequisites: ["Basic Python Knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Python",
          content:
            "Getting started with Python programming and setting up the environment.",
        },
        {
          week: 2,
          topic: "Data Analysis with Pandas",
          content:
            "Exploring data using the Pandas library and basic data manipulation.",
        },
      ],
    },
    {
      id: "3",
      name: "Digital Marketing 101",
      instructor: "Sophia Williams",
      description:
        "Understand the core concepts of digital marketing, including SEO, SEM, and social media strategy.",
      enrollmentStatus: "Open",
      thumbnail: "your.image.here",
      duration: "8 weeks",
      schedule: "Fridays, 6:00 PM-9:00 PM",
      location: "Online",
      prerequisites: ["None"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Digital Marketing",
          content:
            "Overview of digital marketing strategies and online platforms.",
        },
        {
          week: 2,
          topic: "SEO Basics",
          content:
            "Understanding search engine optimization and how to improve website visibility.",
        },
      ],
    },
    {
      id: "4",
      name: "Cloud Computing with AWS",
      instructor: "David Hernandez",
      description:
        "Master the basics of cloud computing and AWS services for deploying and managing cloud applications.",
      enrollmentStatus: "Closed",
      thumbnail: "your.image.here",
      duration: "6 weeks",
      schedule: "Saturdays, 10:00 AM-1:00 PM",
      location: "Online",
      prerequisites: ["Basic Networking Knowledge", "Familiarity with AWS"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Cloud Computing",
          content: "Overview of cloud computing concepts and AWS services.",
        },
        {
          week: 2,
          topic: "AWS EC2 and S3",
          content:
            "Understanding Elastic Compute Cloud (EC2) and Simple Storage Service (S3).",
        },
      ],
    },
    {
      id: "5",
      name: "UI/UX Design Fundamentals",
      instructor: "Jessica Thompson",
      description:
        "Learn the principles of user interface and user experience design, and how to create engaging, user-friendly websites and apps.",
      enrollmentStatus: "In Progress",
      thumbnail: "your.image.here",
      duration: "8 weeks",
      schedule: "Wednesdays and Fridays, 4:00 PM-6:00 PM",
      location: "Online",
      prerequisites: [
        "Basic Knowledge of Design Tools (e.g., Figma, Adobe XD)",
      ],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to UI/UX Design",
          content:
            "Exploring the basics of UI and UX design and understanding the design process.",
        },
        {
          week: 2,
          topic: "Designing with Figma",
          content:
            "Hands-on practice with creating wireframes and mockups using Figma.",
        },
      ],
    },
  ];

  // State management
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Mimic fetching data by setting the static course data on component mount
  useEffect(() => {
    setCourses(courseData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const enrollCourse = (course) => {
    if (enrolledCourses.includes(course)) {
      setEnrolledCourses(enrolledCourses.filter((c) => c.id !== course.id));
    } else {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const markAsCompleted = (courseId) => {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course.id !== courseId)
    );
  };

  return (
    <div className="p-6 md:p-8 lg:p-10">
      {/* Search and Listing */}

      <h1 className="text-2xl mb-2 font-bold">Student Dashboard</h1>
      {!selectedCourse && (
        <div>
          <input
            type="text"
            placeholder="Search courses by name or instructor..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded w-full mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses
              .filter(
                (course) =>
                  course.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  course.instructor
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map((course) => (
                <div
                  key={course.id}
                  className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition duration-300"
                  onClick={() => handleCourseClick(course)}
                >
                  <h2 className="text-lg font-bold">{course.name}</h2>
                  <p className="text-sm">Instructor: {course.instructor}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Course Details */}
      {selectedCourse && (
        <div>
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            onClick={() => setSelectedCourse(null)}
          >
            Back to Courses
          </button>
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="text-2xl font-bold">{selectedCourse.name}</h2>
            <p className="text-lg">Instructor: {selectedCourse.instructor}</p>
            <p className="mt-2">{selectedCourse.description}</p>
            <p className="mt-2">Status: {selectedCourse.enrollmentStatus}</p>
            <p className="mt-2">Duration: {selectedCourse.duration}</p>
            <p className="mt-2">Schedule: {selectedCourse.schedule}</p>
            <p className="mt-2">Location: {selectedCourse.location}</p>
            <p className="mt-2">
              Prerequisites: {selectedCourse.prerequisites.join(", ")}
            </p>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-500">
                Syllabus
              </summary>
              <ul className="list-disc ml-6 mt-2">
                {selectedCourse.syllabus.map((week) => (
                  <li key={week.week}>
                    <strong>Week {week.week}:</strong> {week.topic} -{" "}
                    {week.content}
                  </li>
                ))}
              </ul>
            </details>

            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              onClick={() => enrollCourse(selectedCourse)}
            >
              {enrolledCourses.includes(selectedCourse)
                ? "Enrolled"
                : "Enroll Now"}
            </button>
          </div>
        </div>
      )}

      {/* Student Dashboard */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Enrolled Courses</h2>
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-bold">{course.name}</h3>
              <p className="text-sm">Instructor: {course.instructor}</p>
              <p className="text-sm">
                Due Date: {new Date().toLocaleDateString()}
              </p>
              <div className="w-full bg-gray-300 rounded h-4 mb-2">
                <div
                  className="bg-blue-500 h-4 rounded"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                onClick={() => markAsCompleted(course.id)}
              >
                Mark as Completed
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
