import React from "react";
import Cover from "../Cover/Cover";
import Description from "../Description/Description";
import Cards from "../Cards/Cards";
import AnimatedPlan from "../AnimatedPlan/AnimatedPlan";
import DiplomaInformation from "../DiplomaInformation/DiplomaInformation";

const MainPage = () => {
    return (
        <>
            <Cover/>
            <Description/>
            <Cards/>
            <AnimatedPlan/>
            <DiplomaInformation/>
        </>
    );
};

export default MainPage;