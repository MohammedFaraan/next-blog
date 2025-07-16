"use client";

import { User } from "better-auth";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import { LogOut, PenSquare, UserIcon } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface UserValuesProps {
  user: User;
}

function UserMenu({ user }: UserValuesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast("Logout successfully");
                    router.refresh();
                }
            }
        });

    } catch (err) {
        console.error(err);
              toast("Failed to log out! Please try again");
        
    } finally {
        setIsLoading(true);
    }
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full cursor-pointer"
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback>
                {getUserInitials("Md faraan") || "User"}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-2 leading-none">
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <DropdownMenuSeparator />

          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/profile">
              <UserIcon className="mr-2 h-4 w-4"/>
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/post/create">
              <PenSquare className="mr-2 h-4 w-4" />
              <span>Create Post</span>
            </Link>
          </DropdownMenuItem>
                    <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4"/>
            <span>{isLoading ? "Logging out" : "Logout"}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserMenu;
