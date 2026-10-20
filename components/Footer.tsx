import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="justify-end">
            <Link href="https://forms.gle/KUJQEt4L56Pk1Cef8">
                <h2 className="linkBtn">Request a Training</h2>
            </Link>
        </footer>
    )
}
export default Footer;