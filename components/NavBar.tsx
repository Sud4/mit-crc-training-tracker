import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href={'/'} className={"logo"}>
                    <Image src={"/logo.jpg"} alt="logo"  width={24} height={24}/>

                    <p>CRC Training Tracker</p>
                </Link>

                <ul>
                    <Link href={"/Requested"}>Requested</Link>
                    <Link href={"/Scheduled"}>Scheduled</Link>
                    <Link href={"/All"}>All</Link>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
