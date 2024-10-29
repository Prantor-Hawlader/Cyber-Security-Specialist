import React from "react";

import Sample from "@/components/Sample";
import { title } from "@/components/primitives";

const Checklist = () => {
  return (
    <div className="mt-4">
      <div className="text-center">
        <h1 className={title({ color: "cyan", size: "sm" })}>
          Pentesting Checklist
        </h1>
      </div>
      <Sample />
    </div>
  );
};

export default Checklist;
