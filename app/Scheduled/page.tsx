import React, {Suspense} from 'react'
import {createClient} from "@/lib/server";
import ScheduledCard from "@/components/ScheduledCard";

async function ScheduledRequests() {
    const supabase = await createClient();
    const {data: scheduledRequests} = await supabase.from("Requests").select().eq("status", "scheduled");

    if (!scheduledRequests) return <h2>No Scheduled Requests</h2>;

    return <div>
        {scheduledRequests.map((scheduledRequest) => (
            <ScheduledCard key={scheduledRequest.id} {...scheduledRequest} />
        ))}
    </div>
}
const Page = () => {
    return (
        <div>
            <header className={"h-auto flex flex-row items-center justify-center"}>
                <h3>Scheduled Requests</h3>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <ScheduledRequests/>
            </Suspense>
        </div>
    )
}
export default Page
