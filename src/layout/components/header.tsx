import { useEffect, useState } from "react";
import wifi_logo from "@/assets/icon/wifi.jpg"
import pin_logo from "@/assets/icon/pin.png"
import signal_logo from "@/assets/icon/signal level.png"
import wifi_logo_w from "@/assets/icon/wifi_w.jpg"
import pin_logo_w from "@/assets/icon/pin_w.png"
import signal_logo_w from "@/assets/icon/signal level_w.png"
import { useContext } from "react";
import { ThemeContext } from "../../hook/theme_context";

function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    return `${hour}:${(minute < 10) ? "0" + minute : minute}`;
}

export default function Header() {
    const [time, setTime] = useState("0:00");
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        setTime(getCurrentTime());
        setInterval(() => {
            setTime(getCurrentTime());
        }, 1000)
    }, []);

    return (
        <div className={"flex justify-between px-8 p-3 items-center select-none flex-none transition-all " + (theme === "light" ? "bg-white" : "bg-gray-800")}>
            <div className={"font-SFPro transition-all " + (theme === "light" ? "text-gray-900" : "text-white")}> {time} </div>
            <div className="flex">
                <img src={(theme === "light" ? signal_logo : signal_logo_w)} alt="signal logo" className="object-scale-down w-7 transition-all" />
                <img src={(theme === "light" ? wifi_logo : wifi_logo_w)} alt="wifi logo" className="object-scale-down w-7 transition-all" />
                <img src={(theme === "light" ? pin_logo : pin_logo_w)} alt="pin logo" className="object-scale-down w-7 transition-all" />
            </div>
        </div>
    )
}