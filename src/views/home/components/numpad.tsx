import React from "react";
import ButtonPad from "./button";
import { randomKey } from "../../../api";

import { ReactComponent as PlusIcon } from "../../../assets/icon/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icon/minus.svg";
import { ReactComponent as MultiplyIcon } from "../../../assets/icon/close.svg";
import { ReactComponent as DivideIcon } from "../../../assets/icon/divide.svg";
import { ReactComponent as ResetIcon } from "../../../assets/icon/reset.svg";
import { ReactComponent as DotIcon } from "../../../assets/icon/record.svg";


const contents = [
    { id: randomKey(10), content: "AC" },
    { id: randomKey(10), content: "()" },
    { id: randomKey(10), content: "%" },
    { id: randomKey(10), content: "/", icon: DivideIcon },
    { id: randomKey(10), content: "7" },
    { id: randomKey(10), content: "8" },
    { id: randomKey(10), content: "9" },
    { id: randomKey(10), content: "*", icon: MultiplyIcon },
    { id: randomKey(10), content: "4" },
    { id: randomKey(10), content: "5" },
    { id: randomKey(10), content: "6" },
    { id: randomKey(10), content: "-", icon: MinusIcon },
    { id: randomKey(10), content: "1" },
    { id: randomKey(10), content: "2" },
    { id: randomKey(10), content: "3" },
    { id: randomKey(10), content: "+", icon: PlusIcon },
    { id: randomKey(10), content: "reset", icon: ResetIcon },
    { id: randomKey(10), content: "0" },
    { id: randomKey(10), content: ".", icon: DotIcon },
    { id: randomKey(10), content: "=" },

]

interface IProps {
    onPress: (content: string) => {}
}

const Numpad = React.memo(({ onPress }: IProps) => {
    return (
        <div className="rounded-t-3xl bg-gray-50 w-full h-3/5 grid grid-cols-4 gap-4 p-5 flex-none">
            {contents.map(item =>
                <ButtonPad
                    content={item.content}
                    id={item.id}
                    Icon={item.icon}
                    onPress={onPress}
                    key={item.id}
                />
            )}
        </div>
    )
});

export default Numpad;