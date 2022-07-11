import { Link } from "react-router-dom"
import HistoryItem from "./components/history_row"
import { clearAllExpressionInMemory, getExpressionFromMemory } from "../../api"
import { useState } from "react"

export default function History() {
    const [historyList, setHistoryList] = useState(getExpressionFromMemory());
    return (
        <div className="p-5 pt-1 flex flex-col h-full overflow-hidden">
            <div className="mb-3 p-1 px-3 w-fit font-SFPro text-gray-600 text-xl cursor-pointer flex-none">
                <Link to="/">Back</Link>
            </div>
            <div className="overflow-y-scroll grow max-h-[600px] hidden-scroll">
                {historyList.map(item =>
                    <HistoryItem expression={item.expression} key={item.id} />
                )}
            </div>
            <div className="fixed left-[105px] bottom-10 w-fit mt-3">
                <button
                    className="bg-blue-600 text-white rounded-full p-2 px-14 text-xl font-SFPro shadow-lg hover:bg-blue-500"
                    onClick={() => { clearAllExpressionInMemory(); setHistoryList([]) }}
                >Clear all</button>
            </div>
        </div>
    )
}