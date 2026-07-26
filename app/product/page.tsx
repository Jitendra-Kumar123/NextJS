import FilterUsers from "@/components/FilterUsers";

export default async function product(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return (
        <>
        <h1>This is the product page</h1>
        <p>This is the product page desc.</p>
        <FilterUsers users={users}/>
        </>
    );
}