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
            .update({ status: "incomplete" })
            .eq("id", id);

        router.refresh();
    }

    return (
        <div id={"card"}>
            <h2>{name}</h2>
            <h2>{kerb}</h2>
            <h2>{training}</h2>
            <button type={"button"} onClick={handleCompletedClick}>Mark Complete</button>
            <button type={"button"} onClick={handleCancelledClick}>Mark Incomplete</button>
        </div>
    )
}
export default ScheduledCard;