import { CreateInvoice } from "@/app/components/CreateInvoice";
import { prisma } from "@/lib/utils/db";
import { requireUser } from "@/lib/utils/hooks";

async function getUserData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      address: true,
      email: true,
    },
  });
  return data;
}

export default async function InvoiceCreationRoute() {
  const session = await requireUser();
  const user = await getUserData(session.user?.id as string);

  return (
    <div>
      <CreateInvoice
        lastName={user?.lastName as string}
        address={user?.address as string}
        email={user?.email as string}
        firstName={user?.firstName as string}
      />
    </div>
  );
}
 