import { markAsPaid } from "@/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/utils/db";
import { requireUser } from "@/lib/utils/hooks";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Authorize(invoiceId: string, userId: string) {
  const data = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
      userId: userId,
    },
  });

  if (!data) {
    return redirect("/dashboard/invoices");
  }
}

type Params = Promise<{ invoiceId: string }>;

export default async function MarkAsPaid({ params }: { params: Params }) {
  const session = await requireUser();
  const { invoiceId } = await params;
  await Authorize(invoiceId, session.user?.id as string);

  return (
    <div className="flex flex-1 justify-center items-center ">
      <Card>
        <CardHeader>
          <CardTitle>Mark as Paid?</CardTitle>
          <CardDescription>
            Are you sure you want to mark this invoice as paid
          </CardDescription>

          <CardContent className="mt-4">
            <img src="/money.gif" alt="" className="h-82 w-82 rounded-md"/>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"/dashboard/invoices"}
            >
              Cancel
            </Link>
            <form
              action={async () => {
                "use server";
                await markAsPaid(invoiceId);
              }}
            >
              <SubmitButton text="Mark as Paid" />
            </form>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
