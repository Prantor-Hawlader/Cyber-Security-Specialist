import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { ReactNode, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

export default function SubmitButton({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: ReactNode;
}) {
  const { pending } = useFormStatus();
  const wasSubmittingRef = useRef(false);

  useEffect(() => {
    wasSubmittingRef.current = pending;
  }, [pending]);

  return (
    <Button
      className={cn(className)}
      color="success"
      disabled={pending}
      size="sm"
      type="submit"
    >
      {pending ? (
        <div className="flex items-center justify-center">
          {title}{" "}
          <Spinner
            className="ml-1"
            color="default"
            labelColor="foreground"
            size="sm"
          />
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
