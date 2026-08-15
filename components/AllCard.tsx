'use client';

import {useRouter} from "next/navigation";
import {createClient} from "@/lib/client";

interface Props {
    id: number;
    name:string;
    kerb:string;
    training:string;
    availability:string;
    status:string;
}

const AllCard = ({id, name, kerb, training, availability, status}: Props) => {
    const router = useRouter();

    const handleUnscheduleClick = async () => {
        const supabase = createClient();

        if (status === "completed") {
            await supabase.rpc("remove_from_array", {
                p_kerb: kerb,
                p_training: training
            });
        }

        await supabase
            .from("Requests")
            .update({ status: "unscheduled" })
            .eq("id", id);

        router.refresh();
    }

    const handleScheduleClick = async () => {
        const supabase = createClient();

        if (status === "completed") {
            await supabase.rpc("remove_from_array", {
                p_kerb: kerb,
                p_training: training
            });
        }

        await supabase
            .from("Requests")
            .update({ status: "scheduled" })
            .eq("id", id);

        router.refresh();
    }

    const handleCompleteClick = async () => {
        const supabase = createClient();

        if (status === "completed") {
            await supabase.rpc("remove_from_array", {
                p_kerb: kerb,
                p_training: training
            });

            await supabase
                .from("Requests")
                .update({ status: "incomplete" })
                .eq("id", id);
        } else {
            await supabase.rpc("append_to_array", {
                p_kerb: kerb,
                p_training: training,
            });

            await supabase
                .from("Requests")
                .update({ status: "completed" })
                .eq("id", id);
        }

        router.refresh();
    }

    return (
        <div id={"card"}>
            <h2>{name}</h2>
            <h2>{kerb}</h2>
            <h2>{training}</h2>
            <h2>{availability}</h2>
            <h2>{status}</h2>
            <button type={"button"} onClick={handleUnscheduleClick}>Unschedule</button>
            <button type={"button"} onClick={handleScheduleClick}>Schedule</button>
            <button type={"button"} onClick={handleCompleteClick}>Mark Complete/Incomplete</button>
        </div>
    )
}

export default AllCard
