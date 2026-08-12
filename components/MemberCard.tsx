'use client';

import Link from "next/link";
import Image from "next/image";

interface Props {
    image:string;
    name:string;
    trainings:string[];
    slug:string;
}

const MemberCard = ({image, name, trainings, slug}: Props) => {
    return (
        <Link
            className={"mt-3"}
            href={`/members/${slug}`}
            id={"member-card"}
            >
            <div className={"flex flex-row gap-2 items-center"}>
                <li><Image src={image} alt={name} width={100} height={100} /></li>
                <li className={"name"}>{name}</li>
                <li className={"name"}>-</li>
                <li>{trainings.join(", ")}</li>
            </div>
        </Link>
    )
}
export default MemberCard
