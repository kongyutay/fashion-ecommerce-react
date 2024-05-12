import React from 'react'
import { useState } from "react";
import { category } from "../data/Data";
const Category = () => {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);
    const handleMouseEnter = (catid) => {
        setHover(catid);
    }

    return (
        <div>
            {
                category.map((val, index) => (
                    <div className="" key={index}>{val.category_name}</div>
                ))
            }
        </div>
    )
}

export default Category