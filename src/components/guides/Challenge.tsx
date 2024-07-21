import React from "react";
import confetti from 'canvas-confetti';

export default function Challenge({title, answer, placeholder, children}: {title: string; answer: string[]; placeholder: string; children: React.ReactNode}) {
    function submit(e: React.SyntheticEvent) {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            answer: { value: string };
        };
        if (answer.indexOf(target.answer.value) != -1) {
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
        <div className={"bg-background-800 rounded-3xl px-8 py-6 my-2"}>
            <h1 className={"ignore text-4xl font-bold"}>{title}</h1>
            <div className={"my-3 flex flex-col gap-y-2"}>
                { children }
            </div>
            <form onSubmit={submit} className={"flex flex-col gap-y-4"}>
                <input name={"answer"} placeholder={ placeholder } className={"bg-accent-600 p-3"} autoComplete={"off"}/>
                <button type={"submit"} className={"border-2 border-accent-600 p-3 rounded-3xl"}>Submit</button>
            </form>
        </div>
    )
}