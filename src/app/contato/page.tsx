import Link from "next/link";
import { Metadata } from "next";

export default function Contato() {
    return (
        <div className="container mx-auto flex justify-center text-center items-center">
            <h1 className='mt-9 text-center'>Instagram: <Link href='https://www.instagram.com/yungrhino_/' className='underline'>@yungrhino_</Link></h1>
        </div>
    )
}