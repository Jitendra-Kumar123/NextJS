"use client"

export default function Button(){
    return (
        <button className="cursor-pointer" onClick={()=>{
            alert ("clicked")
        }}>
            Click
        </button>
    );
}