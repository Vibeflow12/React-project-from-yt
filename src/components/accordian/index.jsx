import { useState } from "react";
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handelsingleselection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handelMultiSelection(getCurrentId) {
        let cpMultiple = [...multiple];
        const findIndexOfCurrentid = cpMultiple.indexOf(getCurrentId)

        if (findIndexOfCurrentid === -1) cpMultiple.push(getCurrentId)
        else cpMultiple.splice(findIndexOfCurrentid, 1)

        setMultiple(cpMultiple)

    }

    return (

        <div className="bg-black text-3xl text-white gap-4 flex flex-col justify-center  items-center min-h-screen ">
            <button className="bg-yellow-300 px-10 py-5 font-extrabold cursor-pointer rounded-full" onClick={() => setEnableMultiSelection(!enableMultiSelection)}> Enable multi selection</button>
            <div className="accordian  gap-3  flex flex-col">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item gap-1 bg-violet-400 p-5 rounded-full " key={index}>
                            <div onClick={enableMultiSelection ? () => handelMultiSelection(dataItem.id) : () => { handelsingleselection(dataItem.id) }} className="title  font-extrabold max-w-96 ">
                                <h3>{dataItem.question} <span>+</span></h3>
                                <div>
                                    {
                                        enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                                            <div className="content text-2xl text-amber-200 text-pretty font-semibold ">
                                                <h5>{dataItem.answer}</h5>
                                            </div>
                                        ) : selected === dataItem.id && (<div className="content text-2xl text-amber-200 font-semibold">
                                            {dataItem.answer}
                                        </div>)
                                    }
                                    {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                        <div className="content text-2xl text-amber-200 font-semibold">
                                            <h5>{dataItem.answer}</h5>
                                        </div>
                                        : null
                                    } */}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>no data found</div>
                )}
            </div>
        </div >
    );
}
