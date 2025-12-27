import { useState } from "react";
import Modal from "./modal";
import './modal.css'

const ModalTest = () => {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handelModalTogglePopup() {
        setShowModalPopup(!showModalPopup)
    };
    function onClose() {
        setShowModalPopup(false)
    }

    return (
        <div className="bg-black border-2 rounded-2xl text-white w-40 p-2.5 ">
            <button onClick={handelModalTogglePopup}>Open Modal popup</button>
            {
                showModalPopup && <Modal onClose={onClose}
                    header={"coustom header"}
                    body={"coustom body"}
                    footer={"coustom footer"}
                />
            }
        </div>
    )
}

export default ModalTest;