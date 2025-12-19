import { useState } from "react";
import data from "../accordian/data";



export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleCreateRandomHexColor() { }
    function handleCreateRandomRgbColor() { }


    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,

        }}>
            <button className="border-2 border-white text-white" >Create HEX color</button>
            <button className="border-2 border-white text-white">Create RGB color</button>
            <button className="border-2 border-white text-white" onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate random color</button>
        </div>
    )
}

