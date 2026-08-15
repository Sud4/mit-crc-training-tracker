'use client';

import {createClient} from "@/lib/client";
import {useRouter} from "next/navigation";

interface Props {
    id: number;
    name:string;
    kerb:string;
    training:string;
    availability:string;
}

const RequestCard = ({id, name, kerb, training, availability}:Props) => {
    const router = useRouter();

    const handleScheduleClick = async () => {
        const supabase = createClient();

        await supabase
            .from("Requests")
            .update({ status: "scheduled" })
            .eq("id", id);

        router.refresh();
    };

    return (
        <div id={"card"}>
            <h2>{name}</h2>
            <h2>{kerb}</h2>
            <h2>{training}</h2>
            <h2>{availability}</h2>
            <button type={"button"} onClick={handleScheduleClick}>Mark Scheduled</button>
        </div>
    )
}
export default RequestCard