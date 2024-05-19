import React from "react";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Categories from "../../components/Categories";
import Products from "../../components/Products";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Categories />
            <Products />
        </div>
    )
}

export default Home