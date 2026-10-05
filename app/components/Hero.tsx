// import { RainbowButton } from "@/components/ui/rainbow-button";
// import Image from "next/image";
// import Link from "next/link";

// export function Hero() {
//   return (
//     <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
//       <div className="text-center">
//         <span className="text-primary bg-primary/10 text-sm font-medium tracking-tight px-4 py-2 rounded-full">
//           Introducing Invoice 1.0
//         </span>

//         <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
//           Invoicing made{" "}
//           <span className="block -mt-2 bg-linear-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
//             super easy!
//           </span>
//         </h1>
//         <p className="max-w-xl text-muted-foreground mx-auto mt-3">
//           Creating Invoices can be pain! We at Invoice make it super easy for
//           you to get paid in time!
//         </p>

//         <div className="mt-7 mb-12">
//           <Link href={"/login"} className="mt-5">
//             <RainbowButton className="">Get Unlimited Access</RainbowButton>
//           </Link>
//         </div>
//       </div>

//       <div className="relative items-center w-full py-12 mx-auto mt-12">
//         <img
//           src="hero.png"
//           alt="Hero image"
//           className="relative object-cover w-full rounded-lg lg:rounded-2xl"
//         />
//       </div>

//     </section>
//   );
// }

import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
      <div className="text-center">
        <span className="text-primary bg-primary/10 text-sm font-medium tracking-tight px-4 py-2 rounded-full">
          Introducing Invoice 1.0
        </span>

        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
          Invoicing made{" "}
          <span className="block -mt-2 bg-linear-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            super easy!
          </span>
        </h1>
        <p className="max-w-xl text-muted-foreground mx-auto mt-3">
          Creating Invoices can be pain! We at Invoice make it super easy for
          you to get paid in time!
        </p>

        <div className="mt-7 mb-12">
          <Link href={"/login"} className="mt-5">
            <RainbowButton className="">Get Unlimited Access</RainbowButton>
          </Link>
        </div>
      </div>

      <div className="relative items-center w-full py-12 mx-auto mt-12">
        <img
          src="hero.png"
          alt="Hero image"
          className="relative object-cover w-full rounded-lg lg:rounded-2xl"
        />
      </div>
    </section>
  );
}