"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "@/lib/auth-client";
import UserMenu from "../auth/user-menu";

function Header() {
  const { data: session, isPending } = useSession();
  const navLinks = [
    {
      name: "View Posts",
      href: "/post",
    },
    {
      name: "Create Post",
      href: "/post/create",
    },
  ];
  return (
    <header className=" border-b bg-background sticky ">
      <div className="container h-16 flex items-center justify-between mx-auto px-2">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            NextJS BLOG
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((navItem) => (
              <Link
                href={navItem.href}
                key={navItem.href}
                className="text-sm transition-colors text-primary"
              >
                {navItem.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block"></div>
          <div className="flex items-center gap-2">
            {isPending ? null : session?.user ? (
              <UserMenu user={session?.user} />
            ) : (
              <Button>
                <Link href="/auth">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
