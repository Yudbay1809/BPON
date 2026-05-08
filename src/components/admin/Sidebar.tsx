"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  Image as ImageIcon
} from "lucide-react";
import { signOut } from "next-auth/react";

export function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/admin/messages",
    },
    {
      label: "Content (Sanity)",
      icon: ImageIcon,
      href: "/admin/studio",
    },
    {
      label: "Users",
      icon: Users,
      href: "/admin/users",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  return (
    <div className="w-64 bg-slate-900 h-full flex flex-col text-white">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-xl font-bold font-heading tracking-wide">BPON <span className="text-accent">Admin</span></h1>
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-2">
        {routes.map((route) => {
          // Check if current path matches route.href or starts with it (for nested routes)
          // Adjust logic based on exact routing
          const isActive = pathname === route.href || (pathname.startsWith(route.href) && route.href !== "/admin");

          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium",
                isActive 
                  ? "bg-accent text-white shadow-lg shadow-accent/20" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              <route.icon className="w-5 h-5" />
              {route.label}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-medium"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
