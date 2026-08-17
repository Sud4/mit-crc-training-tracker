import React, {Suspense} from 'react'
import {createClient} from "@/lib/server";
import MemberTrainingsCard from "@/components/MemberTrainingsCard";

type MemberDataProps = {
    kerb:string;
};

async function MemberData({kerb} : MemberDataProps) {

    const supabase = await createClient();

    const {data: member} = await supabase
        .from("Members")
        .select()
        .eq("kerb", kerb)
        .maybeSingle();

    const {data: memberRequests} = await supabase
        .from("Requests")
        .select()
        .eq("kerb", kerb);

    let trainingsTxt = member.trainings.join(", ");

    if (trainingsTxt.length == 0) trainingsTxt = "No Trainings Yet";

    if(!member || member.length == 0) return <div className={"glass h-auto flex items-center justify-center mt-3"}>
        <h2>Member Has No Data</h2>
    </div>;

    if(!memberRequests || memberRequests.length == 0) return <div>
        <div id={"member-page"}>
            <div className={"info"}>
                <h3>{member.name}</h3>
                <h2>{member.kerb}</h2>
            </div>
            <div className={"training-summary"}>
                <h3>Summary of Trainings</h3>
                <h2>{trainingsTxt}</h2>
            </div>
            <h3 className={"all-requests-header"}>All Requests</h3>
        </div>
        <h3 className={"mt-3 text-center glass"}>No Requests</h3>
    </div>
    return <pre>
        <div>
            <div id={"member-page"}>
                <div className={"info"}>
                    <h3>{member.name}</h3>
                    <h2>{member.kerb}</h2>
                </div>
                <div className={"training-summary"}>
                    <h3>Summary of Trainings</h3>
                    <h2>{trainingsTxt}</h2>
                </div>
                <h3 className={"all-requests-header"}>Member Requests</h3>
            </div>
            <div>
                    {memberRequests.map((request) => (
                        <MemberTrainingsCard {...request}/>
                    ))}
                </div>
        </div>
    </pre>
}

const Page = async ({params}:{params:Promise<{kerb:string}>}) => {
    const kerb_w_at = `${(await params).kerb}@mit.edu`;

    return (
        <Suspense fallback={<div className={"glass h-auto flex items-center justify-center mt-3"}>Loading...</div>}>
            <MemberData kerb={kerb_w_at} />
        </Suspense>
    );
}
export default Page