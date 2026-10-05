import { EditInvoice } from "@/app/components/EditInvoice";
import { prisma } from "@/lib/utils/db";
import { requireUser } from "@/lib/utils/hooks";
import { notFound } from "next/navigation";

async function getData(invoiceId: string, userId: string) {
  const data = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
      userId: userId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type ParamsId = Promise<{ invoiceId: string }>;

export default async function editInvoiceRoute({
  params,
}: {
  params: ParamsId;
}) {

  const session = await requireUser();
  const { invoiceId } = await params;
  const data = await getData(invoiceId, session?.user?.id as string);

  return (
    <div>
      <EditInvoice data={data}/>
    </div>
  );
}
