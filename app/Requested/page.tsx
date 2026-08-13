import {createClient} from "@/lib/server";
import RequestCard from "@/components/RequestCard";
import {Suspense} from "react";

async function Requests() {
    const supabase = await createClient();
    const {data: requests} = await supabase.from("Requests").select().eq("status", "unscheduled");

    if(!requests) return <h2>No Unscheduled Requests</h2>;

    return <div>
        {requests.map((request) => (
            <RequestCard key={request.id} {...request}/>
        ))}
    </div>
}

const Page = () => {
    return (
        <div>
            <header className={"h-auto flex flex-row items-center justify-center"}>
                <h3>Unscheduled Requests</h3>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Requests/>
            </Suspense>
        </div>
    )
}
export default Page
