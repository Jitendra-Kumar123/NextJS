"use client"

type User={
    id: number;
    name: string;
    username: string;
}

import {useState} from "react"

export default function FilterUsers({users}: {users: User[]}){
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div>
            <input 
            type="text"
            placeholder="search users"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
             />
        </div>
    );
}