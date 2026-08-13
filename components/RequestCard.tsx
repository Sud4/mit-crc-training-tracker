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
        <div
            className={"flex flex-row gap-2 items-center mt-3"}
            id={"request-card"}
        >
            <li>{name}</li>
            <li>|</li>
            <li>{kerb}</li>
            <li>|</li>
            <li>{training}</li>
            <li>|</li>
            <li>{availability}</li>
            <li>|</li>
            <li><button type={"button"} onClick={handleScheduleClick}>Scheduled</button></li>
        </div>
    )
}
export default RequestCard