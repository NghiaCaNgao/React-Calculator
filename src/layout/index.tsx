import { ReactNode, useContext } from "react";
import Header from "./components/header";
import {ThemeContext} from "../hook/theme_context";

export default function MainLayout({ children }: { children: ReactNode[] | ReactNode }) {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="bg-gray-100 min-h-screen min-w-full flex justify-center items-center">
            <div className={"w-[390px] h-[844px] rounded-[35px] shadow-2xl overflow-hidden flex flex-col transition-all " + (theme === "light" ? "bg-white" : "bg-gray-800")}>
                <Header />
                {children}
            </div>
        </div>
    )
}