import { useState } from "react"
import { ReactComponent as LightIcon } from "../../../assets/icon/light.svg"
import { ReactComponent as DarkIcon } from "../../../assets/icon/moon.svg"

export default function ThemeModeSelector() {
    const [themeMode, setThemeMode] = useState("light");
    return (
        <div className="w-full">
            <div className="mx-auto rounded-3xl bg-slate-100 flex w-fit overflow-hidden">
                <div
                    onClick={() => { setThemeMode("light") }}
                    className="w-10 h-10 flex justify-center items-center cursor-pointer m-1">
                    <LightIcon stroke={((themeMode === "light") ? "#424242" : "#d1d1d1")} strokeWidth="2px" />
                </div>
                <div
                    onClick={() => { setThemeMode("dark") }}
                    className="w-10 h-10 flex justify-center items-center cursor-pointer m-1">
                    <DarkIcon stroke={((themeMode === "dark") ? "#424242" : "#d1d1d1")} strokeWidth="2px" />
                </div>
            </div>
        </div>
    )
}

