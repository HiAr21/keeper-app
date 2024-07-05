import { useState } from "react";

function Header(){
    return(
        <>
        <nav>
            <h1>Keeper</h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Notes</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Header