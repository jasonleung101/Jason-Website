import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <hr />
            <div className="flex items-center justify-center text-white cursor-pointer py-[36px]">
                <Link href="/">
                    <span className="font-semibold text-[48px] tracking-tight">
                        <span className="text-yellow-600 font-extrabold">{`{`}</span>
                        <span className="font-bold"> Dev - Jason </span>
                        <span className="text-yellow-600 font-extrabold">{`}`}</span>
                    </span>
                </Link>
            </div>
        </div>
    )
}