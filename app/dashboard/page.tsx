import { SidebarDemo } from "@/components/sider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SidebarDemo />
      Dashboard
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-black text-white py-4 px-4">
      <div>
        <div className="text-xl font-bold">Acme SaaS</div>
      </div>
    </div>
  );
}
