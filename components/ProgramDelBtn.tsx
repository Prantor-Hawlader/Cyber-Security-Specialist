"use client";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { DeleteProgram } from "@/action/program";
import { Button } from "@nextui-org/button";
const ProgramDelBtn = ({ companyId }: any) => {
  const handleDelete = async (companyId: string) => {
    const res = await DeleteProgram(companyId);

    if (res?.status === "success") {
      toast.success("Program deleted successfully");
    }
    if (res?.error) {
      toast.error(res.error);
    }
  };

  return (
    <Button
      variant="ghost"
      isIconOnly
      className="h-10 w-10 rounded-full text-muted-foreground hover:text-danger hover:bg-danger/10 transition-colors"
      onClick={() => handleDelete(companyId)}
    >
      <Trash2 className="h-5 w-5" />
    </Button>
  );
};

export default ProgramDelBtn;
