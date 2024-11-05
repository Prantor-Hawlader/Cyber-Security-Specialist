import dynamic from "next/dynamic";

import AddProgramBtn from "@/components/AddProgramBtn";
import prisma from "@/db/prisma";

const Programs = async () => {
  const Companies = dynamic(() => import("@/components/Companies"), {
    ssr: false,
  });
  const programs = await prisma.program.findMany();

  return (
    <div className="container text-center my-4 mx-auto space-y-4">
      <AddProgramBtn />
      <Companies programs={programs} />
    </div>
  );
};

export default Programs;
