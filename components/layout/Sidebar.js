import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><Link href="/#">Home</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Creative Agency</Link></li>
                        <li className="active"><Link href="/index-2">Personal Portfolio</Link></li>
                        <li><Link href="/index-3">Digital Agency</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="menu-item-has-children"><Link href="/#">pages</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/about-me">About Me</Link></li>
                        <li><Link href="/team">Team Page</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/project-details">Portfolio Details</Link></li>
                        <li><Link href="/services-details">Services Details</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fa fa-angle-down" /></div></li>
                <li className="menu-item-has-children"><Link href="/#">News</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleToggle(3)}><span className="fa fa-angle-down" /></div></li>
            </ul>
        </>
    )
}
