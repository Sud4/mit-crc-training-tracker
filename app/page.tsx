import MemberCard from "@/components/MemberCard";
import {createClient} from "@/lib/server";
import {Suspense} from "react";

async function MembersData() {
    const supabase = await createClient();

    const {data: members} = await supabase
        .from("Members")
        .select()
        .order("kerb", { ascending: true });

    if(!members || members.length == 0) return <div className={"glass h-auto flex items-center justify-center mt-3"}>
        <h2>No Members Added</h2>
    </div>;

    return <pre>
        {members.map((member) => (
            <MemberCard key={member.kerb} {...member}/>
        ))}
    </pre>
}
const Page = () => {
    return (
        <div>
            <Suspense fallback={<div className={"glass h-auto flex items-center justify-center mt-3"}>Loading...</div>}>
                <MembersData/>
            </Suspense>
        </div>
    )
}
export default Page
