import { Link } from "react-router-dom";
import Highlighter from "@/components/highlight_expression";
import { calculate, getExpressionTree } from "@/api";

interface IProps {
    expression: string
}

export default function HistoryItem({ expression }: IProps) {
    return (
        <Link to={"/" + expression} className="border-r-4 border-blue-300 flex flex-col items-end p-2 m-2 hover:bg-slate-50 cursor-pointer">
            <div className="font-SFPro text-3xl text-gray-600 select-none">
                <Highlighter components={getExpressionTree(expression)} />
            </div>
            <div className="font-SFPro text-gray-400">
                {calculate(expression)}
            </div>
        </Link >
    )
}