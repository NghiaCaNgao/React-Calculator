import { useContext } from "react"
import { ReactComponent as LightIcon } from "@/assets/icon/light.svg"
import { ReactComponent as DarkIcon } from "@/assets/icon/moon.svg"
import { ThemeContext } from "@/hook/theme_context"

export default function ThemeSelector() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className="w-full">
            <div className={"mx-auto rounded-3xl flex w-fit overflow-hidden transition-all " + (theme === "light" ? "bg-slate-100" : "bg-gray-700")} >
                <div
                    onClick={() => { setTheme("light") }}
                    className="w-10 h-10 flex justify-center items-center cursor-pointer m-1">
                    <LightIcon stroke={((theme === "light") ? "#424242" : "#959595")} strokeWidth="2px" className="transition-all"/>
                </div>
                <div
                    onClick={() => { setTheme("dark") }}
                    className="w-10 h-10 flex justify-center items-center cursor-pointer m-1">
                    <DarkIcon stroke={((theme === "light") ? "#d5d5d5" : "white")} strokeWidth="2px" className="transition-all" />
                </div>
            </div>
        </div>
    )
}

