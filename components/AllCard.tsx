'use client';

interface Props {
    name:string;
    kerb:string;
    training:string;
    availability:string;
    status:string;
}

const AllCard = ({name, kerb, training, availability, status}: Props) => {
    return (
        <div
            className="flex flex-row gap-2 items-center mt-3"
            id={"all-card"}
        >
            <li>{name}</li>
            <li>|</li>
            <li>{kerb}</li>
            <li>|</li>
            <li>{training}</li>
            <li>|</li>
            <li>{availability}</li>
            <li>|</li>
            <li>{status}</li>
        </div>
    )
}

export default AllCard
