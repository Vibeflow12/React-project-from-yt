import { useState } from "react";

export default function RandomColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function randomColor(type) {
        if (type === 'hex') {
            const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexcolor = "#";

            for (let i = 0; i < 6; i++) {
                hexcolor += hex[randomColorUtility(hex.length)];
            }
            setColor(hexcolor);

        } else {
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);

            setColor(`rgb(${r}, ${g}, ${b})`);
        }

    }


    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: color,
        }}>
            <div
                className="flex justify-center items-center gap-5 py-10 font-extrabold"
            >
                <button className="border-2 border-white text-white px-3 py-3 font-extrabold  rounded-2xl"
                    onClick={() => {
                        setTypeOfColor('hex');
                        randomColor('hex');
                    }}
                >
                    HEX
                </button>

                <button className="border-2 border-white text-white px-3 py-3 font-extrabold rounded-2xl "
                    onClick={() => {
                        setTypeOfColor('rgb');
                        randomColor('rgb');
                    }}
                >
                    RGB
                </button>

                <button className="border-2 border-white text-white px-3 py-3 font-extrabold  rounded-2xl"
                    onClick={() => randomColor(typeOfColor)}>

                    Random color
                </button>

            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "60px",
                    marginTop: "50px",
                    flexDirection: "column"
                }}
            >
                <h3>{typeOfColor === "rgb" ? 'RGB color' : 'HEX color'}</h3>
                <h2>{color}</h2>
            </div>
        </div>
    );
}



