'use client';

import {useRouter} from "next/navigation";
import {createClient} from "@/lib/client";

interface Props {
    id: number;
    name: string;
    kerb: string;
    training: string;
}

export const ScheduledCard = ({id, name, kerb, training}:Props) => {
    const router = useRouter();

    const handleCompletedClick = async () => {
        const supabase = createClient();

        await supabase.rpc("append_to_array", {
            p_kerb: kerb,
            p_training: training,
        });
        await supabase
            .from("Requests")
            .update({ status: "completed" })
            .eq("id", id);

        router.refresh();
    };

    const handleCancelledClick = async () => {
        const supabase = createClient();

        await supabase
            .from("Requests")
            .update({ status: "cancelled" })
            .eq("id", id);

        router.refresh();
    }

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
            <li><button type={"button"} onClick={handleCompletedClick}>Completed</button></li>
            <li>|</li>
            <li><button type={"button"} onClick={handleCancelledClick}>Cancelled</button></li>
        </div>
    )
}
export default ScheduledCard;