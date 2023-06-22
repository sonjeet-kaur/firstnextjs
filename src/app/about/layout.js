import Link from "next/link";
import "./about.css";
export default function AboutLayout({ children }) {

    return (
        <>
            <div>
                <ul className="ulitems">
                    <li className="liitem">
                        <Link href="/about/aboutinner1"> 
                         AboutInner1
                        </Link>
                    </li>
                    <li>
                        <Link className="inner2" href="/about/aboutinner2">
                            AboutInner2
                        </Link>
                    </li>
                </ul>
         {children}
            </div>
        </>
    )
}
