import React from "react";

export default function Hint({ children }: { children: React.ReactNode}) {
    return (
        <button type={"button"} className={"bg-accent-600 rounded-xl px-4 py-3 border-accent-400 border-2"}>View Hint</button>
    )
}