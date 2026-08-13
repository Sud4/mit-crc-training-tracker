import MemberCard from "@/components/MemberCard";
import Dropdown from "@/components/Dropdown";
import {createClient} from "@/lib/server";
import {Suspense} from "react";
async function MemberData() {
    const supabase = await createClient();
    const {data: members} = await supabase.from("Members").select();

    if(!members) return <h2>No Members Added</h2>;

    return <pre>
        {members.map((member) => (
            <MemberCard {...member}/>
        ))}
    </pre>
}
const Page = () => {
    return (
        <div>
            <header className={"h-auto flex flex-row items-center"}>
                <h3><Dropdown/></h3>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <MemberData/>
            </Suspense>
        </div>
    )
}
export default Page
