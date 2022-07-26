import React from "react";
import Cover from "../Cover/Cover";
import Description from "../Description/Description";
import Cards from "../Cards/Cards";
import AnimatedPlan from "../AnimatedPlan/AnimatedPlan";
import DiplomaInformation from "../DiplomaInformation/DiplomaInformation";
import Registration from "../Registration/Registration";

const MainPage = () => {
    return (
        <>
            <Cover/>
            <Description/>
            <Cards/>
            <AnimatedPlan/>
            <DiplomaInformation/>
            <Registration/>
        </>
    );
};

export default MainPage;