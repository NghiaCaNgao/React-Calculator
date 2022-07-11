import { useContext, useEffect, useState } from "react";
import Highlighter from "@/components/highlight_expression"
import { getExpressionTree } from "@/api"
import { ThemeContext } from "@/hook/theme_context";

interface IProps {
    expression: string,
    result: string,
    isPressEnter: boolean
    onEffectEnd: () => {}
}

export default function ResultScreen({ expression, result, isPressEnter, onEffectEnd }: IProps) {
    const [isAnimation, setIsAnimation] = useState(false);
    const [_expression, _setExpression] = useState(expression);
    const [_result, _setResult] = useState(result);
    const { theme } = useContext(ThemeContext);
    const changeableAttributeNum = 3;
    var counter = 0;

    function transitionResult() {
        if (counter++ % changeableAttributeNum === 0) {
            setIsAnimation(false);
            _setExpression(result);
            _setResult("");
            onEffectEnd && onEffectEnd();
        }
    }

    function startTransition() {
        _setExpression("");
        setIsAnimation(true);
    }

    useEffect(() => {
        _setExpression(expression);
        _setResult(result);
        if (isPressEnter) startTransition();
    }, [expression, result, isPressEnter]);

    return (
        <div className="grow p-10 relative">
            <div className={"font-SFPro text-5xl text-end select-none "} >
                <Highlighter components={getExpressionTree(_expression)} />
            </div>
            <div
                onTransitionEnd={() => { transitionResult() }}
                className={"font-SFPro text-end absolute right-10 select-none "
                    + (isAnimation
                        ? "transition-all top-10 text-5xl "
                        + ((theme === "light")
                            ? "text-gray-700"
                            : "text-gray-100")
                        : "top-36 text-2xl text-gray-300 ")}>
                {_result}
            </div>
        </div>
    )
}