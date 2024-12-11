import React from "react";

import { title } from "@/components/primitives";
import { getSession } from "@/lib/session";
import CheckList from "@/components/CheckList";

const Checklist = async () => {
  const session = await getSession();

  return (
    <div className="mt-4">
      <div className="text-center">
        <h1 className={title({ color: "cyan", size: "sm" })}>
          Pentesting Checklist
        </h1>
      </div>
      <CheckList session={session!} />
    </div>
  );
};

export default Checklist;
