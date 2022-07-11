import { ThemeContext } from "@/hook/theme_context";
import { FunctionComponent, SVGProps, useContext } from "react"

interface IProps {
    content: string,
    id: string,
    Icon?: FunctionComponent<SVGProps<SVGSVGElement>>,
    onPress: (content: string) => {}
}

const top_buttons = new Set(["()", "%"]);
const functional_buttons = new Set(["AC", "()", "%", "/", "*", "+", "-"]);

function setTheme(theme: string, content: string) {
    let style = "";

    if (content === "=") {
        style += " text-white ";
        if (theme === "light") style += " bg-green-300 hover:bg-green-200 "
        else style += "bg-green-500 hover:bg-green-400"
    }
    else if (content === "AC") style += " text-red-500 "
    else if (top_buttons.has(content)) style += " text-red-400 ";
    else if (theme === "light") style += " bg-gray-100 text-gray-700 hover:bg-slate-200 "
    else style += " bg-gray-900 text-gray-100 hover:bg-slate-800 ";

    if (functional_buttons.has(content)) {
        if (theme === "light") style += " hover:bg-red-200 ";
        else style += " hover:bg-slate-800 ";
    }



    return style;
}

export default function ButtonPad({ content, id, Icon, onPress }: IProps) {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div
            className={"rounded-2xl flex justify-center items-center font-SFPro text-xl cursor-pointer transition-all select-none "
                + setTheme(theme, content)}
            key={id}
            onClick={() => { onPress(content) }}>
            {(!Icon)
                ? content
                : <Icon
                    stroke={content === "reset"
                        ? "#374151"
                        : content === "."
                            ? "none"
                            : "#f87171"}
                    fill={(theme === "dark" && content === ".") ? "#262f3f" : "none"}
                    strokeWidth="2.5px"
                    className="transition-all"
                />}
        </div >
    )
}