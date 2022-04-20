import React, { useState } from "react"; 
import Why from "../../Atoms/Why";

const MWhy = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
             <Why data={props.title} id="why"/>
        </>
    )
}
export default MWhy;

