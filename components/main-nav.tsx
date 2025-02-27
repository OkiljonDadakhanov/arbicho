"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const competitionItems = [
  {
    title: "Participation Requirements",
    href: "/competition/requirements",
  },
  {
    title: "Past ARBICHO",
    href: "/past-arbicho",
  },
  {
    title: "Future ARBICHO",
    href: "/future-arbicho",
  },
];

const arbicho2025Items = [
  {
    title: "Organizing Committee",
    href: "/organizing-committee",
  },
  {
    title: "Scientific Committee",
    href: "/scientific-committee",
  },
  {
    title: "Programme Schedule",
    href: "/programme-schedule",
  },
];

const infoCenterItems = [
  {
    title: "Results & Reports",
    href: "/results",
  },
  {
    title: "Rules & Guidelines",
    href: "/rules",
  },
];

export function MainNav() {
  return (
    <NavigationMenu className="max-w-none justify-end">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About ARBICHO
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Competition</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {competitionItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/arbicho-foundation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ARBICHO Foundation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Info Center</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {infoCenterItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>ARBICHO 2025</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {arbicho2025Items.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/uzbekistan" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Uzbekistan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <nav className="p-4">
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="block text-white hover:text-emerald-300"
            onClick={onClose}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block text-white hover:text-emerald-300"
            onClick={onClose}
          >
            About ARBICHO
          </Link>
        </li>
        <li>
          <button
            onClick={() =>
              setOpenSubmenu(
                openSubmenu === "competition" ? null : "competition"
              )
            }
            className="flex items-center justify-between w-full text-white hover:text-emerald-300"
          >
            Competition
            <span className="ml-2">
              {openSubmenu === "competition" ? "−" : "+"}
            </span>
          </button>
          {openSubmenu === "competition" && (
            <ul className="mt-2 ml-4 space-y-2">
              {competitionItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-emerald-300"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            href="/arbicho-foundation"
            className="block text-white hover:text-emerald-300"
            onClick={onClose}
          >
            ARBICHO Foundation
          </Link>
        </li>
        <li>
          <button
            onClick={() =>
              setOpenSubmenu(openSubmenu === "infoCenter" ? null : "infoCenter")
            }
            className="flex items-center justify-between w-full text-white hover:text-emerald-300"
          >
            Info Center
            <span className="ml-2">
              {openSubmenu === "infoCenter" ? "−" : "+"}
            </span>
          </button>
          {openSubmenu === "infoCenter" && (
            <ul className="mt-2 ml-4 space-y-2">
              {infoCenterItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-emerald-300"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            href="/gallery"
            className="block text-white hover:text-emerald-300"
            onClick={onClose}
          >
            Gallery
          </Link>
        </li>
        <li>
          <button
            onClick={() =>
              setOpenSubmenu(
                openSubmenu === "arbicho2025" ? null : "arbicho2025"
              )
            }
            className="flex items-center justify-between w-full text-white hover:text-emerald-300"
          >
            ARBICHO 2025
            <span className="ml-2">
              {openSubmenu === "arbicho2025" ? "−" : "+"}
            </span>
          </button>
          {openSubmenu === "arbicho2025" && (
            <ul className="mt-2 ml-4 space-y-2">
              {arbicho2025Items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-emerald-300"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            href="/uzbekistan"
            className="block text-white hover:text-emerald-300"
            onClick={onClose}
          >
            Uzbekistan
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-100/10 hover:text-emerald-300 focus:bg-emerald-100/10 focus:text-emerald-300",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
