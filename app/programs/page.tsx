import AddProgramBtn from "@/components/AddProgramBtn";
import Companies from "@/components/Companies";
import prisma from "@/db/prisma";

const Programs = async () => {
  const programs = await prisma.program.findMany();

  return (
    <div className="container text-center my-4 mx-auto space-y-4">
      <AddProgramBtn />
      <Companies programs={programs} />
    </div>
  );
};

export default Programs;
