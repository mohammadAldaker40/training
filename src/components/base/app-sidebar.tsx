"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { resturant } from "@/data";
import { Home, Info, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarData = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About Us",
    url: "/about-us",
    icon: User ,
  },
  {
    title: "Contact Us",
    url: "/contact-us",
    icon: Mail,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="min-h-screen border-r bg-pink-50">
  <SidebarHeader className="py-3 px-4 text-2xl font-semibold text-pink-900">
    {resturant.default_data.name}
  </SidebarHeader>
  <SidebarContent>
    <SidebarMenu>
      {sideBarData.map((item, index) => {
        const isActive = pathname === item.url;

        return (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton asChild>
              <Link
                href={item.url}
                className={`flex items-center gap-3 w-full px-5 py-3 rounded-md transition-colors truncate
                  ${
                    isActive
                      ? "bg-pink-200 text-pink-900 font-semibold"
                      : "text-pink-900 hover:bg-pink-100"
                  }`}
              >
                {item.icon && (
                  <item.icon className="w-5 h-5 shrink-0" strokeWidth={1.8} />
                )}
                <span className="truncate">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  </SidebarContent>
  <SidebarFooter className="py-3 px-4 text-sm text-pink-700">
    © 2025 {resturant.default_data.name}
  </SidebarFooter>
</Sidebar>

  );
}
