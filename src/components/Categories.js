import React from "react";
import { category } from "../data/Data";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {
                    category.map((val,index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <Link className="text-decoration none">
                                <div className="cat-item d-flex align-items-center mb-4">
                                    <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                                        <img src={val.img} alt="{img}" className="img-fluid"/>
                                    </div>
                                    <div>
                                        <h6 className="flex-fill pl-3">{val.category_name}</h6>
                                        <small className="text-body">{val.quantity}</small>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories