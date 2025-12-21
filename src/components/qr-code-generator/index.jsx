import { useState } from "react"
import QRCode from "react-qr-code"

export default function ORCodeGenerator() {

    const [qrCode, setQrcode] = useState('');
    const [input, setInput] = useState('');
    function handleGenerateQrCode() {
        setQrcode(input);
        setInput('')
    }

    return (
        <div className="bg-black h-screen w-screen flex items-center justify-center">
            <div className="bg-white w-96 px-60 py-10 rounded-2xl  flex flex-col items-center  gap-5" >
                <div className="font-extrabold" >ORCodeGenerator</div>
                <div className="flex gap-3">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        name="qr-code"
                        value={input}
                        placeholder="enter your value"
                        className="border-2 rounded-2xl font-bold px-2 "
                    />
                    <button
                        disabled={input && input.trim() !== "" ? false : true}
                        onClick={handleGenerateQrCode}
                        className="border-2 px-2 py-2 rounded-2xl font-bold"
                    >
                        Generator
                    </button>
                </div>
                <div>
                    <QRCode
                        id="qr-code-value"
                        value={qrCode}
                        size={400}
                        bgColor="white"
                    />
                </div>
            </div>
        </div >
    )
}

