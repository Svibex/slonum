import React from "react";
import Cover from "../Cover/Cover";
import Description from "../Description/Description";
import Cards from "../Cards/Cards";
import AnimatedPlan from "../AnimatedPlan/AnimatedPlan";
import DiplomaInformation from "../DiplomaInformation/DiplomaInformation";
import Registration from "../Registration/Registration";
import Questions from "../Questions/Questions";
import Subscribe from "../Subscribe/Subscribe";

const MainPage = () => {
    return (
        <>
            <Cover/>
            <Description/>
            <Cards/>
            <AnimatedPlan/>
            <DiplomaInformation/>
            <Registration/>
            <Questions/>
            <Subscribe/>
        </>
    );
};

export default MainPage;