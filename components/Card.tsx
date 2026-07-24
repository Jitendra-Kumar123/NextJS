type CardProps = {
    title: string;
    description: string;
}

export default function Card({title, description}: CardProps){
    return (
        <>
        <div className="border-amber-400 border-2 m-20">
            <h1 className="bg-blue-300 px-3 py-4">{title}</h1>
            <p className="bg-blue-400 px-3 py-4">{description}</p>
        </div>
        </>
    )
}