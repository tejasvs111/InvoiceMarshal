"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface iAppProps {
  text: string;
}

export function SubmitButton({ text }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="mr-2 size-4 animate-spin" /> loading...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          {text}
        </Button>
      )}
    </>
  );
}
