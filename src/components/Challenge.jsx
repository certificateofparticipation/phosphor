export default function Challenge({title, answer, children}) {
    function submit(e) {
        let response = e.target.elements.answer.value
        alert(response)
        if (response === answer) {
            alert("Correct! (insert effect here lol)")
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
                <input name={"answer"} placeholder={"flag{...}"} className={"bg-background-600 p-3"}/>
                <button type={"submit"} className={"border-2 border-white p-3 rounded-3xl"}>Submit</button>
            </form>
        </div>
    )
}