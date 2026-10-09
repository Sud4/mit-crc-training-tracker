import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link href={'/'} className={"logo"}>
                    <Image src={"/logo.png"} alt="logo" width={180} height={90}/>

                    <p>Training Tracker</p>
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
