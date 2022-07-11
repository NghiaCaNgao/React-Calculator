import React, { useContext } from "react";
import { ExpressionObject, ExpressionElements } from "@/api"
import { ThemeContext } from "@/hook/theme_context";

interface IProps {
    components: ExpressionObject[]
}

function calcStyle(type: ExpressionElements): string {
    switch (type) {
        case ExpressionElements.OPERATOR:
            return "text-green-300";
        case ExpressionElements.PARENTHESIS:
            return "text-red-300";
        default:
            return "";
    }
}

const Highlighter = ({ components }: IProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={"flex justify-end items-center transition-all "
                + (theme === "light" ? "text-gray-700" : "text-gray-100")}>
            {components.map(item =>
                <div
                    key={item.id}
                    className={calcStyle(item.type)} >
                    {item.content}
                </div>)
            }
        </div >
    )
}

export default React.memo(Highlighter);