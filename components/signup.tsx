"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import s1 from "@/public/sticker.svg";

export function Signup() {
  return (
    <div className="grid grid-cols-2">
      <div className="pl-[8rem]">
        <div className="mt-[15rem] font-bold text-5xl">
          The complete platform for building the Web
        </div>
        <div className="mt-4 text-gray-500">
          Give your team the toolkit to stop configuring and start <br />
          innovating. Securely build, deploy, and scale the best web <br />
          experiences.
        </div>
        <div className="flex space-x-3 mt-1">
          <Input type="email" placeholder="Email" className="w-80" />
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="text-xs mt-1 text-gray-500">
          Sign up to get notified when we launch.
          <u>Terms &amp; Conditions</u>
        </div>
      </div>
      <div className="pr-[8rem]">
        <Image src={s1} alt="Acme"></Image>
      </div>
    </div>
  );
}
