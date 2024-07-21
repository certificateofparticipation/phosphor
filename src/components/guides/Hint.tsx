import React from "react";
import { X } from "react-bootstrap-icons";
export default function Hint({ children }: { children: React.ReactNode}) {
    const [isOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button
                type={"button"}
                className={"bg-accent-600 rounded-xl px-4 py-3 border-accent-400 border-2"}
                onClick={openModal}>
                View Hint
            </button>
            {isOpen ?
                <div className={"fixed w-screen h-screen left-0 top-0 flex items-center justify-center bg-background-900 bg-opacity-50"}>
                    <div className={"bg-background-700 border-2 border-background-600 rounded-md flex flex-col p-2 gap-y-2"}>
                        <div className={"flex flex-row justify-between items-center"}>
                            <p className={"font-bold"}>Title</p>
                            <button type={"button"} onClick={closeModal}>
                                <X size={30}/>
                            </button>
                        </div>
                        <div>
                            { children }
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}