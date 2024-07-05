import { useState } from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer(){
    return(
        <>
        <footer>
            <p>Copyright&#169;{currentYear}</p>
        </footer>
        </>
    )
};
export default Footer