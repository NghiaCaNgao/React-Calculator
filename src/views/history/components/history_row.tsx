import { Link } from "react-router-dom";
import Highlighter from "@/components/highlight_expression";
import { calculate, getExpressionTree } from "@/api";
import { useContext } from "react";
import { ThemeContext } from "@/hook/theme_context";

interface IProps {
    expression: string
}

export default function HistoryItem({ expression }: IProps) {
    const { theme } = useContext(ThemeContext);
    return (
        <Link
            to={"/" + expression}
            className={"border-r-4 border-blue-300 flex flex-col items-end p-2 m-2 cursor-pointer transition-all rounded-l-lg "
                + (theme === "light" ? "hover:bg-slate-100" : "hover:bg-slate-800")}>
            <div className="font-SFPro text-3xl text-gray-600 select-none">
                <Highlighter components={getExpressionTree(expression)} />
            </div>
            <div className="font-SFPro text-gray-400">
                {calculate(expression)}
            </div>
        </Link >
    )
}