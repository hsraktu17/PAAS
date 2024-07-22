"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Signup } from "@/components/signup";

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
    <div className="text-white">
      <nav className="bg-black py-4">
        <div className="flex justify-between px-8 items-center">
          <Link className="font-bold text-xl" href="/">
            Acme Saas
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
          <div>
            <Button variant="secondary" onClick={() => router.push("/signin")}>
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
