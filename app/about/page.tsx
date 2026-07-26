import ServerAction from "@/app/actions/serverAction"

export default function about(){
    return (
        <>
        <h1>This is the about page</h1>
        <p>This is the about page desc.</p>
        <button onClick={ServerAction}>Click Me</button>
        </>
    );
}