"use client"

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export const Button = ( { children }:  ButtonProps) => {
    return <button  className="text-indigo-700 bg-white hover:bg-indigo-700 hover:text-white border-indigo-700 border font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {children}
    </button>
}