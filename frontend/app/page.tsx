import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main className="flex h-screen flex-col  ">
      <NavBar />
      <div className=" flex w-full space-x-4 flex-wrap space-y-2">
        <CourseCard />
      </div>
    </main>
  );
}
