import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, signIn } from "../../lib/utils/auth";
import { SubmitButton } from "../components/SubmitButtons";
import { redirect } from "next/navigation";

// if we have the demoDomain then we can send the email to only to how have signed in the mailtrap site -> so we can send email to only those person who has signedIn in the mailtrap website

export default async function Login() {
  const session = await auth();
  if (session?.user) {
    redirect("/onboarding");
  }

  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <div className="flex w-full h-screen items-center justify-center px-4">
        <Card className="max-w-sm">
          <CardHeader className="gap-y-3">
            <CardTitle className="text-2xl font-semibold">Login</CardTitle>
            <CardDescription>
              Enter your email below to login in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-y-3"
              action={async (formData) => {
                "use server";
                await signIn("nodemailer", formData);
              }}
            >
              <div className="flex flex-col gap-y-2">
                <Label className="text-xl">Email</Label>
                <Input
                  placeholder="hello@hello.com"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <SubmitButton text="login" />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
