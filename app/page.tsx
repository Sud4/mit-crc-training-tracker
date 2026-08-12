import React from 'react'
import MemberCard from "@/components/MemberCard";
import Dropdown from "@/components/Dropdown";

const Page = () => {
    return (
        <div>
            <header className={"h-auto flex flex-row items-center"}>
                <h3><Dropdown/></h3>
            </header>
            <MemberCard image={"/logo.jpg"} name={"Kolton"} trainings={["Milling", "CNC"]} slug={"/"}/>
        </div>
    )
}
export default Page
