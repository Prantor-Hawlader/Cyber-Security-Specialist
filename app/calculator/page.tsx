import React from "react";

import CVSSCalculator from "@/components/CVSSCalculator";
import "../../css/cvss.css";
import { title } from "@/components/primitives";
const Calculator = () => {
  return (
    <div className="mt-4 space-y-4" id="cvssboard">
      <h1 className={title({ color: "cyan", size: "sm" })}>
        {" "}
        CVSS v3.1 Base Score Calculator
      </h1>

      <br />
      <CVSSCalculator />
    </div>
  );
};

export default Calculator;
