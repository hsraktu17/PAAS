"use client";
import { DatePickerDemo } from "./datepicker";
import { ModeToggle } from "./mode-toggle";
import { Avatar } from "./ui/avatar";
import { ComboboxDemo } from "./ui/combobox";
import { Input } from "./ui/input";

export default function Dashboard() {
  return (
    <div className="">
      <Navbar />
      <div className="px-10 flex items-center justify-between">
        <div className="text-3xl font-bold pt-5">Dashboard</div>
        <div className="pt-5">
          <DatePickerDemo />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="px-7 py-2 flex justify-between items-center border-b">
      <div className="flex space-x-4 items-center">
        <div>
          <ComboboxDemo />
        </div>
        <div className="text-sm">Overview</div>
        <div className="text-sm">Customers</div>
        <div className="text-sm">Products</div>
        <div className="text-sm">Settings</div>
      </div>
      <div className="flex items-center space-x-6">
        <Input placeholder="Search..." className="w-96" />
        <ModeToggle />
        <div className="bg-blue-500 rounded-full h-10 w-10" />
      </div>
    </div>
  );
}
