import { useEffect, useState } from "react";
import wifi_logo from "@/assets/icon/wifi.jpg"
import pin_logo from "@/assets/icon/pin.png"
import signal_logo from "@/assets/icon/signal level.png"

function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    return `${hour}:${(minute < 10) ? "0" + minute : minute}`;
}

export default function Header() {
    const [time, setTime] = useState("0:00");
    useEffect(() => {
        setTime(getCurrentTime());
        setInterval(() => {
            setTime(getCurrentTime());
        }, 1000)
    }, []);

    return (
        <div className="bg-white flex justify-between px-8 p-3 items-center select-none flex-none">
            <div className="text-gray-900 font-SFPro"> {time} </div>
            <div className="flex">
                <img src={signal_logo} alt="signal logo" className="object-scale-down w-7" />
                <img src={wifi_logo} alt="wifi logo" className="object-scale-down w-7" />
                <img src={pin_logo} alt="pin logo" className="object-scale-down w-7" />
            </div>
        </div>
    )
}