"use client";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { Bell, LogOut, Moon, Settings, Sun, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import userImage from "../../assets/user.jpg";
import { useTheme } from "next-themes";
import DashboardSettingsModal from "./DashboardSettingsModal";
const DashboardHeader = () => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"outline"} size={"sm"}>
          <DashboardSettingsModal/>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant={"ghost"} size={"sm"} className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="relative w-8 h-8 rounded-full">
              <Avatar className="w-8 h-8">
                <AvatarImage src={userImage.src} alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                  MA
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 bg-popover border-border shadow-sm"
            align="end"
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm leading-none">Mostafaayman551</p>
                <p className="text-xs leading-none text-muted-foreground">
                  mostafaayman551@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
