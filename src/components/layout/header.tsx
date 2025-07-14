'use client'

import Link from "next/link"
import { Button } from "../ui/button"

function Header() {
  const navLinks = [
    {
      name: "View Posts",
      href: "/post"
    },
    {
      name: "Create Post",
      href: "/post/create"
    }
  ]
  return (
    <header className=" border-b bg-background sticky ">
      <div className="container h-16 flex items-center justify-between mx-auto px-2">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">NextJS BLOG</Link>
          <nav className="hidden md:flex items-center gap-6">
            {
              navLinks.map((navItem) => (
                <Link href={navItem.href} key={navItem.href}
                className="text-sm transition-colors text-primary"
                >
                  {navItem.name}
                </Link>
              ))
            }
          </nav>
        </div>
        <div className="flex items-center ">
          <div className="hidden md:block"></div>
            <Button>
              <Link href="/auth">Login</Link>
            </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
