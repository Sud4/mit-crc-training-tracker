import {Suspense} from 'react'
import {createClient} from "@/lib/server";
import AllCard from "@/components/AllCard";

async function AllResponses() {
    const supabase = await createClient();

    const {data: requests} = await supabase
        .from("Requests")
        .select()
        .order("id", { ascending: true });

    if(!requests || requests.length == 0) return <div className={"glass h-auto flex items-center justify-center mt-3"}>
        <h3>No Requests Yet...</h3>
    </div>;

    return <pre>
        {requests.map((request) => (
            <AllCard key={request.id} {...request}/>
        ))}
    </pre>
}

const Page = () => {
    return (
        <div>
            <header className={"h-auto flex flex-row items-center justify-center"}>
                <h3>All Requests</h3>
            </header>
            <Suspense fallback={<div className={"glass h-auto flex items-center justify-center mt-3"}>Loading...</div>}>
                <AllResponses/>
            </Suspense>
        </div>
    )
}
export default Page
