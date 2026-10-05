import { prisma } from "@/lib/utils/db";
import { requireUser } from "@/lib/utils/hooks";
import { redirect } from "next/navigation";
import OnboardingForm from "./onBoardingForm";

async function getUser(uid: string) {
  return await prisma.user.findUnique({
    where: {
      id: uid,
    },
    select: {
      firstName: true,
    },
  });
}

export default async function OnboardingPage() {
  const session = await requireUser();

  const user = await getUser(session?.user?.id as string);

  if (user?.firstName) {
    redirect("/dashboard");
  }

  return <OnboardingForm />;
}