"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Menupopup() {
  return (
    <main>
      <div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4 flex flex-col gap-3">
                <NavigationMenuLink asChild className="flex grow">
                  <a
                    className="flex max-h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/campaigns"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Explore all campaigns
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
                <ListItem href="/docs" title="Campaigns you financed" className="h-[60px] flex flex-col justify-center">
                </ListItem>
              </li>
              <ListItem href="/docs" title="FinTech">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="GameFi">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Web3">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="EduHealth">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </main>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/[0.07] hover:text-white focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
