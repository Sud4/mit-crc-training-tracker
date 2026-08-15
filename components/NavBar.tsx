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
                    <Link href={"/requested"}>Requested</Link>
                    <Link href={"/scheduled"}>Scheduled</Link>
                    <Link href={"/all"}>All</Link>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
