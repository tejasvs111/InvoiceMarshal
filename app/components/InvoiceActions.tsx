"use client"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCircle,
  DownloadCloudIcon,
  Mail,
  MoreHorizontal,
  PencilIcon,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface invoiceId {
  id: string;
  status: string
}

export function InvoiceAction({ id, status }: invoiceId) {

  const handleSendReminder = () => {
    toast.promise(
      fetch(`/api/email/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        loading: "Sending reminder email...",
        success: "Reminder email sent successfully",
        error: "Failed to send reminder email",
      },
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button asChild variant={"outline"} size={"icon"}>
          <MoreHorizontal className="h-10 w-10" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full space-y-px">
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/invoices/${id}`}>
            <PencilIcon className="size-4 mr-2" />
            Edit Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/api/invoice/${id}`} target="_blank">
            <DownloadCloudIcon className="size-4 mr-2" />
            Download Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleSendReminder}>
            <Mail className="size-4 mr-2" />
            Reminder Email
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href={`/dashboard/invoices/${id}/delete`}>
            <Trash className="size-4 mr-2" />
            Delete Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

       {status !== "PAID" && (
         <DropdownMenuItem asChild>
          <Link href={`/dashboard/invoices/${id}/paid`}>
            <CheckCircle className="size-4 mr-2" />
            Mark as Paid
          </Link>
        </DropdownMenuItem> 
       )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
