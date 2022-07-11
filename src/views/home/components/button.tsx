import { FunctionComponent, SVGProps } from "react"

interface IProps {
    content: string,
    id: string,
    Icon?: FunctionComponent<SVGProps<SVGSVGElement>>,
    onPress: (content: string) => {}
}

const top_buttons = new Set(["()", "%"]);
const functional_buttons = new Set(["AC", "()", "%", "/", "*", "+", "-"]);

export default function ButtonPad({ content, id, Icon, onPress }: IProps) {
    return (
        <div
            className={"bg-gray-100 text-gray-700 rounded-2xl flex justify-center items-center font-SFPro text-xl cursor-pointer hover:bg-slate-200 transition-all select-none "
                + (content === "=" ? "text-white bg-green-300 hover:bg-green-200 " : " ")
                + (content === "AC" ? "text-red-500 " : " ")
                + (top_buttons.has(content) ? "text-red-400 " : " ")
                + (functional_buttons.has(content) ? "hover:bg-red-200 " : " ")
            }
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
                    strokeWidth="2.5px"
                />}
        </div>
    )
}