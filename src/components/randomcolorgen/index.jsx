import { useState } from "react";

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function generateColor(type) {
        if (type === 'rgb') {
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);
            setColor(`rgb(${r}, ${g}, ${b})`);
        } else {
            const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColor = "#";

            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(hex.length)];
            }
            setColor(hexColor);
        }
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
            border: "10px solid black"
        }}>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                paddingTop: "25px"
            }}>
                <button className="border-2 border-white text-white px-3 py-3 font-extrabold"
                    onClick={() => {
                        setTypeOfColor('hex');
                        generateColor('hex');
                    }} >
                    Create HEX color
                </button>
                <button className="border-2 border-white text-white px-3 py-3 font-extrabold"
                    onClick={() => {
                        setTypeOfColor('rgb');
                        generateColor('rgb');
                    }}>
                    Create RGB color
                </button>
                <button className="border-2 border-white text-white px-3 py-3 font-extrabold" onClick={() => generateColor(typeOfColor)}>Generate random color</button>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection: "column"
            }}>
                <h3>{typeOfColor === "rgb" ? 'RGB color' : 'HEX color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

