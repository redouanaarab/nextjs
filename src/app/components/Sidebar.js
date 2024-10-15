// src/app/components/Sidebar.js
"use client"; // Make it as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();

  // دالة Helper لتحديد الأنماط بناءً على المسار
 const getLinkClass = (href) => {
  const isActive = pathname === href;
  return `flex items-center font-semibold transition-colors duration-200 py-2 px-4 rounded ${
    isActive ? "bg-blue-700 text-white hover:text-white" : "text-slate-700 hover:text-black"
  }`;
};

  return (
    <div className="w-64 bg-white text-black flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav>
        <Link href="/dashboard" className={getLinkClass("/dashboard")}>
          <HomeIcon className="h-5 w-5 mr-4" />
          Home
        </Link>
        <Link href="/analytics" className={getLinkClass("/analytics")}>
          <ChartBarIcon className="h-5 w-5 mr-4" />
          Analytics
        </Link>
        <Link href="/settings" className={getLinkClass("/settings")}>
          <CogIcon className="h-5 w-5 mr-4" />
          Settings
        </Link>
      </nav>
    </div>
  );
}
