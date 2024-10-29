import React from "react";

import ProgramCard from "@/components/ProgramCard";
import prisma from "@/db/prisma";

const Program = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const program = await prisma.program.findUnique({ where: { id } });

  return (
    <div className="mt-10">
      <ProgramCard program={program!} />
    </div>
  );
};

export default Program;
