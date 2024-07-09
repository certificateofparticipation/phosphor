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
                <div className={"fixed w-screen h-screen left-0 top-0 flex items-center justify-center bg-background-900 bg-opacity-50"}>
                    <div className={"bg-background-700 border-2 border-background-600 rounded-md flex flex-col"}>
                        <div className={"flex flex-row justify-between"}>
                            <p>Title</p>
                            <button type={"button"} onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     className={"bg-red-600 rounded-md"} viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </button>
                        </div>
                        <p>{children}</p>
                    </div>
                </div>
                : null}
        </>
    )
}