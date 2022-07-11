import { ThemeContext } from "@/hook/theme_context";
import { ReactNode, useContext } from "react";

export default function RoundedButton({ children }: { children: ReactNode }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={"p-2 rounded-full transition-all cursor-pointer w-fit h-fit "
            + (theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700")}>
            {children}
        </div>
    )
}