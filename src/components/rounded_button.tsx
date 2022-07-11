import { ReactNode } from "react";

export default function RoundedButton({ children }: { children: ReactNode }) {
    return (
        <div className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer w-fit h-fit">
            {children}
        </div>
    )
}