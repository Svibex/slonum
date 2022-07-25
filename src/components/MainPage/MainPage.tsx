import React from "react";
import Cover from "../Cover/Cover";
import Description from "../Description/Description";
import Cards from "../Cards/Cards";
import AnimatedPlan from "../AnimatedPlan/AnimatedPlan";

const MainPage = () => {
    return (
        <>
            <Cover/>
            <Description/>
            <Cards/>
            <AnimatedPlan/>
        </>
    );
};

export default MainPage;