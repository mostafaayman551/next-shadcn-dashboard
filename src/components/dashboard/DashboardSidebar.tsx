"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { BarChart3, LayoutDashboard, Settings } from "lucide-react";
import DashboardSettingsModal from "./DashboardSettingsModal";

const DashboardSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-20" : "w-64"}>
      <SidebarContent>
        <div className="p-6">
          <div className="flex items-center gap-2">
            <LayoutDashboard />
            {!isCollapsed && (
              <h2 className="text-lg font-semibold text-foreground">
                Dashboard
              </h2>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <LayoutDashboard className="mr-2" />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <BarChart3 className="mr-2" />
                    Reports
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <div>
                    <Settings className="mr-2" />
                    <DashboardSettingsModal />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
