import React from "react";
import {nav} from "../data/Data";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-secondary py-1 px-xl-5">
                <div>
                    <div>
                        {
                            nav.map((val, index) => {
                                <Link>{val.text}GorkCoder 9:56</Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar