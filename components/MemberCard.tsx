'use client';

import Link from "next/link";
import Image from "next/image";

interface Props {
    name:string;
    trainings:string[];
    slug:string;
}

const MemberCard = ({name, trainings, slug}: Props) => {
    return (
        <Link
            href={`/members/${slug}`}
            >
            <div id={"member-card"}>
                <Image src={"/profiles/"+name+".jpg"} alt={name} width={100} height={100} />
                <h2>{name} -</h2>
                <h2>{trainings.join(", ")}</h2>
            </div>
        </Link>
    )
}
export default MemberCard
