// import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href={"/dashboard"} className="flex items-center gap-2">
        <img src="/logo.svg" alt="dashboard" className="size-10" />
        <h3 className="font-semibold text-3xl">Invoice</h3>
      </Link>
      <Link href={"/login"}>
        <RainbowButton variant={"outline"}> 
          Get Started
        </RainbowButton>
      </Link>
    </div>
  );
}
