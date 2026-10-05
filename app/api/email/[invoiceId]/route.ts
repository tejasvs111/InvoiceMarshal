import { prisma } from "@/lib/utils/db";
import { requireUser } from "@/lib/utils/hooks";
import { emailClient } from "@/lib/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(request: Request,{
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) {
  try {
    const session = await requireUser();
    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        userId: session.user?.id,
        id: invoiceId,
      },
    });

    console.log("invoicedata -> ", invoiceData);

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.co",
      name: "Tejas Shinde",
    };

    const recipients = [
      {
        email: "tejasvs111@gmail.com",
      },
    ];

    emailClient.send({
      from: sender,
      to: recipients,
      subject: "Reminder Invoice Payment",
      text: "Hey you forgot to pay invoice",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
   if(error) {
     return NextResponse.json(
      { error: "Failed to send reminder email" },
      { status: 500 },
    );
   }
  }
}
