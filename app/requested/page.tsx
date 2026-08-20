import {createClient} from "@/lib/server";
import RequestCard from "@/components/RequestCard";
import {Suspense} from "react";

async function Requests() {
    const supabase = await createClient();

    const {data: requests} = await supabase
        .from("Requests")
        .select()
        .eq("status", "unscheduled")
        .order("id", { ascending: true });

    if(requests?.length == 0 || !requests) return <div className={"glass h-auto flex items-center justify-center mt-3"}>
        <h2>No Unscheduled Requests</h2>
    </div>;

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
            <Suspense fallback={<div className={"glass h-auto flex items-center justify-center mt-3"}>Loading...</div>}>
                <Requests/>
            </Suspense>
        </div>
    )
}
export default Page
