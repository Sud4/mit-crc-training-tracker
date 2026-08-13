import {Suspense} from 'react'
import {createClient} from "@/lib/server";
import AllCard from "@/components/AllCard";

async function AllResponses() {
    const supabase = await createClient();
    const {data: requests} = await supabase.from("Requests").select();

    if(!requests) return <h2>No Requests Yet...</h2>

    return <pre>
        {requests.map((request) => (
            <AllCard {...request}/>
        ))}
    </pre>
}

const Page = () => {
    return (
        <div>
            <header className={"h-auto flex flex-row items-center justify-center"}>
                <h3>All Requests</h3>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <AllResponses/>
            </Suspense>
        </div>
    )
}
export default Page
