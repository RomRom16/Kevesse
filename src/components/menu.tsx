"use client";
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
import Link from "next/link";
import Logo from "@/components/assets/logo.svg";
import Menupopup from "@/components/ui/menupopup";
import Image from "next/image";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Menu() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full backdrop-blur-2xl bg-[#000000]/[0.5] h-[55px] z-[9998]"></div>
      <div className="fixed px-[20px] top-0 left-0 w-full border-b-[1px] border-opacity-10 border-white z-[9999]">
        <div className="flex justify-between items-center flex-row sticky max-w-[1200px] mx-auto h-[55px]">
          <div className="flex items-center flex-row">
            <Link href="/" className="mr-[20px]">
              <Image src={Logo} alt="Logo" className="" height={25} priority />
            </Link>
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Create</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuList className="md:w-[400px] min-h-[300px] grid gap-3 p-4 lg:w-[500px] lg:grid-cols-2">
                        <NavigationMenuItem className="h-full w-full ">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/create"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Create campaign
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components built with Radix
                                UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="h-full ml-[0px] w-full ">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/campaigns"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                My campaigns
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components built with Radix
                                UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <Menupopup />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
