"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Signup } from "@/components/signup";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
}

function Navbar() {
  const router = useRouter();

  return (
    <div className="text-white bg-black dark:bg-white dark:text-black">
      <nav className=" py-4">
        <div className="flex justify-between px-8 items-center">
          <Link className="font-bold text-xl" href="/">
            Acme SaaS
          </Link>
          <div className="space-x-5 ">
            <Link href="" className="hover:underline">
              Features
            </Link>
            <Link href="" className="hover:underline">
              About
            </Link>
            <Link href="" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="space-x-3 items-center flex justify-center">
            <Button variant="secondary" onClick={() => router.push("/signin")}>
              Sign In
            </Button>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
