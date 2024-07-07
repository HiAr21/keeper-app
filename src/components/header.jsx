import { useState } from "react";

function Header(){
    return(
        <>
        <nav>
            <h1>Keeper</h1>
            <ul>
                <li><a className="navOptions" href="">Home</a></li>
                <li><a className="navOptions" href="">Notes</a></li>
                <li><a className="navOptions" href="">About</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Header