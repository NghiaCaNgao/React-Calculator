import { evaluate } from "mathjs";
enum ExpressionElements {
    "OPERATOR",
    "PARENTHESIS",
    "NUMBER"
}

type MemoriedExpression = {
    expression: string,
    id: string
}

type ExpressionObject = {
    content: string,
    type: ExpressionElements,
    id: string
}

/* Evaluate expression in string form 
* @params: 
    token: string : the input expression value
* @return: string : the out string as the result of input expression
*/

function calculate(token: string) {
    try {
        const result = evaluate(token);
        return (result === Math.round(result) ? result : result.toFixed(3)).toString();
    } catch (error) {
        return ""
    }
}

/* Split expression to special pieces
* @params: 
    token: string : the input expression value
* @return: ExpressionObject[] : the array of special piece
*/

function getExpressionTree(token: string): ExpressionObject[] {
    var i = 0;
    var length = token.length;
    var operator = new Set(["+", "-", "*", "/", "%"]);
    var parenthesis = new Set(["(", ")"]);

    var stack: ExpressionObject[] = [];
    while (i < length) {
        stack.push({
            id: randomKey(10),
            content: token[i],
            type: ExpressionElements.NUMBER
        });

        if (operator.has(token[i]))
            stack[stack.length - 1].type = ExpressionElements.OPERATOR
        else if (parenthesis.has(token[i]))
            stack[stack.length - 1].type = ExpressionElements.PARENTHESIS
        i++;
    }
    return stack;
}


/* Generate key string with given length
* @params: 
    length: number : the length of the key
* @return: string : the key need to be generated
*/

function randomKey(length: number) {
    const pattern = "0123456789";

    let answer = "";
    for (let i = 0; i < length; i++) {
        answer += pattern[Math.floor(Math.random() * pattern.length)];
    }
    return answer;
}

/* Push an expression to memory
* @params: 
    expression: string : the input expression need to be written 
* @return: void
*/

function writeResultToMemory(expression: string): void {
    const oldMemory = getExpressionFromMemory();

    oldMemory.push({ expression, id: randomKey(10) });
    localStorage.setItem("calculations", JSON.stringify(oldMemory));
}

/* Clear all expressions that written in memory
* @params: none
* @return: void
*/

function clearAllExpressionInMemory(): void {
    localStorage.removeItem("calculations");
}

/* retrieve all expressions from memory
* @params: none
* @return: Array<MemoriedExpression>: the array of expression object stored in memory
*/

function getExpressionFromMemory(): Array<MemoriedExpression> {
    return (JSON.parse(localStorage.getItem("calculations") || "[]") || []) as Array<MemoriedExpression>;
}

export {
    randomKey,
    calculate,
    getExpressionTree,
    ExpressionElements,
    writeResultToMemory,
    clearAllExpressionInMemory,
    getExpressionFromMemory
};

export type {
    ExpressionObject,
    MemoriedExpression
};
