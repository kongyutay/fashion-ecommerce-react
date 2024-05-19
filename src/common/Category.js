import React from 'react'
import { useState } from "react";
import { category } from "../data/Data";
import { Link } from 'react-router-dom';
const Category = () => {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);
    const handleMouseEnter = (catid) => {
        setHover(catid);
    }
    const handleMouseLeave = () => {
        setHover(null);
    }

    return (
        <div className='col-lg-3 d-none d-lg-block'>
            <Link className='btn d-flex align-items-center justify-content-between bg-dark w-100' style={{height: "65px", padding: "0 30px"}} onClick={() => setShow(!show)}>
                <h6 className='text-white m-0'>
                    <i className='fa fa-bars mr-2'></i>Categories
                    
                </h6>
                <i className='fa fa-angle-down text-white'></i>
            </Link>
            <nav className={ show ? "show position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" : "collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"} style={{ width: "calc(100%-30px)", zIndex: "999" }}>
                <div className='navbar-nav w-100'>
                {
                    category.slice(0, 10).map((val, index) => (
                        <div key={index}>
                            {val.subCat ? 
                                (<div className='nav-link dropdown dropright' onMouseEnter={() => handleMouseEnter(val.id)} onMouseLeave={handleMouseLeave}>
                                    <Link>
                                        {val.category_name}
                                        <i className='fa fa-angle-right float-right mt-1'></i>
                                    </Link>
                                    <div className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${hover === val.id ? "show" : "" }`}>
                                        {
                                            val.subCat.map((subval,index) => (
                                                <Link to={subval.path} key={index} className='dropdown-item'>{subval.category_name}</Link>
                                            ))
                                        }
                                    </div>
                                </div>) : 
                                (<Link className='nav-item nav-link'>
                                    {val.category_name}
                                </Link>
                            )}
                        </div>
                    ))
                }
                </div>
            </nav>
            
        </div>
    )
}

export default Category