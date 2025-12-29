import { useRef, useState } from "react"
import useOutsideClick from "./index.jsx";

export default function UseOnClickOutsideTest() {

    const [showContent, setShowContent] = useState(false);

    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    return <div className="border-4 m-3 p-4">

        {showContent ?
            <div className="font-semibold" ref={ref}><h1>this is random content</h1>
                <p>click outside  to close</p> </div>
            : <button className="font-extrabold" onClick={() => setShowContent(true)}>show content</button>}
    </div>
}