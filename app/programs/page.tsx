import dynamic from "next/dynamic";

import AddProgramBtn from "@/components/AddProgramBtn";
import prisma from "@/db/prisma";
import { getSession } from "@/lib/session";

const Programs = async () => {
  const session = await getSession();

  const Companies = dynamic(() => import("@/components/Companies"), {
    ssr: false,
  });
  const programs = await prisma.program.findMany();

  return (
    <div className="container text-center my-4 mx-auto space-y-4">
      {session && <AddProgramBtn />}
      <Companies programs={programs} session={session!} />
    </div>
  );
};

export default Programs;
