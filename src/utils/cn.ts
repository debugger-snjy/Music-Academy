// This Code we have to Copy from the Website (https://ui.aceternity.com/components/navbar-menu) Only

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
