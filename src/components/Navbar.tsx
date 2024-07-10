// Next JS doesn't allow access to React Hooks Directly
// So, to use the React Hooks and making it as Client Component, we will use the below line :

'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>

                {/* Home */}
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>

                {/* All Courses */}
                <MenuItem active={active} setActive={setActive} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/music/theory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/composition">Advanced Composition</HoveredLink>
                        <HoveredLink href="/song">Song Writing</HoveredLink>
                        <HoveredLink href="/production">Music Production</HoveredLink>
                    </div>
                </MenuItem>

                {/* Contact Us */}
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
