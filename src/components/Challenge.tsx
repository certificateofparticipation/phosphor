import React from "react";
import confetti from 'canvas-confetti';

export default function Challenge({title, answer, children}: {title: string; answer: string; children: React.ReactNode}) {
    function submit(e: React.SyntheticEvent) {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            answer: { value: string };
        };
        if (target.answer.value === answer) {
            alert("Correct!")
            confetti({
                origin: {
                    x: 0,
                    y: 1.05
                },
                angle: 70
            })
            confetti({
                origin: {
                    x: 1,
                    y: 1.05
                },
                angle: 110
            })
        } else {
            alert("Try again!")
        }
    }

    return (
        <div className={"bg-background-800 rounded-3xl px-8 py-6"}>
            <h1 className={"text-3xl font-bold"}>{title}</h1>
            <div className={"my-2"}>
                { children }
            </div>
            <form onSubmit={submit} className={"flex flex-col gap-y-4"}>
                <input name={"answer"} placeholder={"flag{...}"} className={"bg-accent-600 p-3"}/>
                <button type={"submit"} className={"border-2 border-accent-600 p-3 rounded-3xl"}>Submit</button>
            </form>
        </div>
    )
}