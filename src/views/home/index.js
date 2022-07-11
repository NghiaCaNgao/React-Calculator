import { useState } from "react";
import Numpad from "./components/numpad"
import ResultScreen from "./components/result_screen";
import ThemeModeSelector from "./components/theme_mode_selector"
import RoundedButton from "@/components/rounded_button";
import { ReactComponent as HistoryIcon } from "@/assets/icon/clock.svg"

import "@/api/prototype";
import { calculate, writeResultToMemory } from "@/api";
import { Link, useParams } from "react-router-dom";


export default function Home() {
    const { expression_param } = useParams();
    const [expression, setExpression] = useState(expression_param || "");
    const [result, setResult] = useState(calculate(expression_param || ""));
    const [_content, _setContent] = useState("");


    function handlePress(content) {
        if (content === "()") {
            if (expression.countLetter("(") === expression.countLetter(")"))
                content = "("
            else
                content = ")";
        }

        _setContent(content);
        if (content === "AC") {
            setExpression("");
            setResult("");
        }
        else if (content !== "=" && content !== "Enter") {
            if (expression.length < 12) {
                if (content === "reset" || content === "Backspace") {
                    setResult(calculate(expression.slice(0, expression.length - 1)));
                    setExpression(expression.slice(0, expression.length - 1));
                } else {
                    setResult(calculate(expression + content));
                    setExpression(expression + content);
                }
            }
        } else {
            writeResultToMemory(expression)
        }
    }

    function handleEffectEnd() {
        setExpression(calculate(expression));
        setResult("");
        _setContent("");
    }

    function handleKey(e) {
        // console.log(e);
        const allowSet = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "Backspace", "Enter"]);
        if (allowSet.has(e.key)) handlePress(e.key);
    }

    return (
        <div
            onKeyDown={handleKey}
            tabIndex="-1"
            className="flex flex-col h-full outline-none">
            <ThemeModeSelector />
            <ResultScreen expression={expression} result={result} isPressEnter={_content === "=" || _content === "Enter"} onEffectEnd={() => { handleEffectEnd() }} />
            <div className="p-1 px-4">
                <Link to="/history" className="block w-fit">
                    <RoundedButton>
                        <HistoryIcon stroke="#374151" strokeWidth="2.5px" />
                    </RoundedButton>
                </Link>
            </div>
            <Numpad onPress={handlePress} />
        </div>
    )
}