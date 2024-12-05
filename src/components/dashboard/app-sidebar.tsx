"use client";

import * as React from "react";
import {
  ShoppingCart,
  List,
  DollarSign,
  Clock,
  PieChart,
  Settings2,
  User,
  Printer,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../ui/sidebar";

const data = {
  user: {
    name: "VernSG",
    email: "m@example.com",
    avatar: "/vite.svg",
  },
  teams: [
    {
      name: "Kasir App",
      logo: ShoppingCart,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "Barang",
      url: "#",
      icon: List,
      items: [
        {
          title: "Daftar Barang",
          url: "#",
        },
        {
          title: "Kategori Barang",
          url: "#",
        },
      ],
    },
    {
      title: "Transaksi",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Penjualan Baru",
          url: "#",
        },
        {
          title: "Riwayat Transaksi",
          url: "#",
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Printer",
          url: "#",
        },
        {
          title: "Pengguna",
          url: "#",
        },
        {
          title: "Toko",
          url: "#",
        },
      ],
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
