import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  const courseDetails = [
    {
      course_id: 1,
      course_name: "Introduction to Web Development",
      description:
        "Learn the basics of HTML, CSS, and JavaScript to build your first web pages.",
      instructor: "John Doe",
      duration: "6 weeks",
    },
    {
      course_id: 2,
      course_name: "Data Structures and Algorithms",
      description:
        "Understand the core concepts of data structures and algorithms and their implementation in Python.",
      instructor: "Jane Smith",
      duration: "8 weeks",
    },
    {
      course_id: 3,
      course_name: "React Native for Beginners",
      description:
        "Start your journey in mobile app development with React Native, creating cross-platform apps.",
      instructor: "Aashutosh Gandotra",
      duration: "5 weeks",
    },
    {
      course_id: 4,
      course_name: "Machine Learning with Python",
      description:
        "Explore the fundamentals of machine learning, including supervised and unsupervised learning techniques.",
      instructor: "Emily Johnson",
      duration: "10 weeks",
    },
    {
      course_id: 5,
      course_name: "Advanced JavaScript",
      description:
        "Deep dive into advanced JavaScript topics such as closures, promises, async/await, and ES6+ features.",
      instructor: "Michael Brown",
      duration: "7 weeks",
    },
  ];
  return (
    <main className="flex h-screen flex-col  ">
      <div className=" flex w-full  flex-wrap  mt-2 justify-center ">
        {courseDetails.map((item) => {
          return <CourseCard />;
        })}
      </div>
    </main>
  );
}
