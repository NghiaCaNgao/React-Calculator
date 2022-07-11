import React, { ReactNode } from "react";
import Header from "./components/header";
export default function MainLayout({ children }: { children: ReactNode[] | ReactNode }) {
    return (
        <div className="bg-gray-100 min-h-screen min-w-full flex justify-center items-center">
            <div className="w-[390px] h-[844px] rounded-[35px] bg-white shadow-2xl overflow-hidden flex flex-col">
                <Header/>
                {children}
            </div>
        </div>
    )
}