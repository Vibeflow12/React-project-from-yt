import { useState } from "react";
import Modal from "./modal";


const ModalTest = () => {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handelModalTogglePopup() {
        setShowModalPopup(!showModalPopup)
    }

    return (
        <div className="bg-black border-2 rounded-2xl text-white w-40 p-2.5 ">
            <button onClick={handelModalTogglePopup}>Open Modal popup</button>
            {
                showModalPopup && <Modal
                    body={
                        "hi"
                    }
                />
            }
        </div>
    )
}

export default ModalTest;