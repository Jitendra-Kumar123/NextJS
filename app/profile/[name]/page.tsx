type ProfilePageProps = {
    params: Promise<{name: string}>
}

export default async function ProfilePage({params}: ProfilePageProps){

    const users = [{
        id: 1,  
        name: "roh",
        email: "roh.n@gmail.com",
        desc: "n"
    },
    {
        id: 2, 
        name: "roh",
        email: "roh.n@gmail.com",
        desc: "n"
    }
]
   
    const pageParams = await params
    const username = pageParams.name

    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase())

    return (
        <div>
            <h1>{user?.name}'s profile page</h1>
            <p>Email: {user?.email}</p>
            <p>desc: {user?.desc}</p>
        </div>
    )
}