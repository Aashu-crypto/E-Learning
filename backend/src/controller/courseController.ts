import prisma from "@repo/db/client";

const CourseDetails = async (req: any, res: any) => {
  try {
    const courses = await prisma.course.findMany({});
    console.log(courses);
    
    res.json({ courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  CourseDetails,
};
