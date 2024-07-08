import React from "react";
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
                <div className={"fixed inset-0 w-fit h-fit translate-x-[50vw] translate-y-[50vh] bg-background-700 p-12"}>
                    <button type={"button"} onClick={closeModal}>Close Modal</button>
                    <p>{ children }</p>
                </div>
            : null}
        </>
    )
}