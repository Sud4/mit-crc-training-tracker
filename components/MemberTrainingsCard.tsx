'use client'

interface Props {
    kerb:string;
    name:string;
    training:string;
    status:string;
}

const MemberTrainingsCard = ({kerb, name, training, status}: Props) => {
    return (
        <div id={"card"}>
            <h2>{name}</h2>
            <h2>{kerb}</h2>
            <h2>{training}</h2>
            <h2>{status}</h2>
        </div>
    )
}
export default MemberTrainingsCard
