import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
        <div>
        <li>
                <Link href="/">Home Page</Link>
            </li>
            
            <li>
                <Link href="/Scan">Scan Dashboard</Link>
            </li>
            
            <li>
                <Link href="/Service">Roadside Assistance</Link>
            </li>

            <li>
                <Link href="/OfflineFaults">Most Common Faults</Link>
            </li>

            <li>
                <Link href="/RedFaults">Red Faults</Link>
            </li>

            <li>
                <Link href="/AmberFaults">Amber Faults</Link>
            </li>

            <li>
                <Link href="/GreenBlueFaults">Green & Blue Faults</Link>
            </li>

            <li>
                <Link href="/ElectricFaults">Electric & Hybrid Faults</Link>
            </li>

            <li>
                <Link href="/UserAccount">User Account</Link>
            </li>
            
            <li>
                <Link href="/Forum">Q&A Forum</Link>
            </li>
        </div>);
}

export default Navbar;