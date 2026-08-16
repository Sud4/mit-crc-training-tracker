'use client';

import Link from "next/link";
import Image from "next/image";

interface Props {
    kerb:string;
    name:string;
    trainings:string[];
}

const MemberCard = ({name, trainings, kerb}: Props) => {
    const kerb_no_at = kerb.split("@")[0];
    return (
        <Link
            href={`/members/${kerb_no_at}`}
            >
            <div id={"member-card"}>
                <h3>{name}</h3>
                <h2> - {trainings.join(", ")}</h2>
            </div>
        </Link>
    )
}
export default MemberCard
