"use client";

import * as React from "react";
import { useState, useEffect } from "react"; // Added useState, useEffect
import Link from "next/link";
import { usePathname } from "next/navigation"; // To highlight active link

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  // SheetDescription, // Removed unused import
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Added SheetClose
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button"; // For the mobile menu trigger
import { cn } from "~/lib/utils";
import { MountainIcon, MenuIcon } from "lucide-react"; // Removed unused XIcon
import { ThemeToggle } from "./theme-toggle"; // Import ThemeToggle

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About Us" },
  { href: "/article", label: "Article" },
  // { href: "/contact", label: "Contact" }, // Removed Contact link
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
      isScrolled ? "border-border/40 bg-background/95 shadow-sm" : "border-transparent bg-transparent"
    )}>
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary" /> {/* Replace with actual logo */}
          <span className="font-bold text-xl text-foreground">Corbent</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === link.href
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent/50",
                      "text-base"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <MountainIcon className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl text-foreground">Corbent</span>
                  </Link>
                </SheetTitle>
                {/* Optional: <SheetDescription>Navigate through Corbent's mission.</SheetDescription> */}
              </SheetHeader>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        pathname === link.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}