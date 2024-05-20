import React, { useState } from "react";
import { products } from "../data/Data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/CartSlice";

const Products = () => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const handleAddToCart = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product, quantity: qty, totalPrice,
        };
        dispatch(addToCart(tempProduct));
        dispatch(getCartTotal());
    };
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                {
                    products.map((val,index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img src={val.product_img} alt="{img}" className="img-fluid w-100"/>
                                        <div className="product-action">
                                            <Link className="btn btn-outline-dark btn-square"><i className="fa fa-shopping-cart" onClick={() => handleAddToCart(val)}></i></Link>
                                            <Link className="btn btn-outline-dark btn-square"><i className="fa fa-heart"></i></Link>
                                            <Link className="btn btn-outline-dark btn-square"><i className="fa fa-sync-alt"></i></Link>
                                            <Link className="btn btn-outline-dark btn-square"><i className="fa fa-search"></i></Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="flex-fill pl-3">{val.category_name}</h6>
                                        <small className="text-body">{val.quantity}</small>

                                    </div>
                                </div>
                           
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products