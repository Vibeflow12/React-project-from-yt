import { useState } from "react";
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);

    function handelsingleselection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        <div className="bg-black text-3xl text-white  flex justify-center items-center min-h-screen">
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item" key={index}>
                            <div onClick={() => { handelsingleselection(dataItem.id) }} className="title">
                                <h3>{dataItem.question} <span>+</span></h3>

                                <div>
                                    {selected === dataItem.id ?
                                        <div className="content text-2xl text-amber-200">{dataItem.answer}

                                        </div>
                                        : null
                                    }

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
