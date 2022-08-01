import React from "react";
import "./Checkbox.css";

const Checkbox = (props: { id: string, labelClassName: string, link: string, }) => {

    const {id, labelClassName, link} = props;

    return (
        <div className="checkbox">
            <input
                className="checkbox__input"
                id={id}
                type="checkbox"
                defaultChecked={true}
            />
            <label className={"checkbox__label " + labelClassName}
                   htmlFor={id}
            >
                Отправляя данные я соглашаюсь с
                <a className={link} href="/#"> Условиями конкурса</a> и
                <a className={link} href="/#"> Политикой обработки данных</a>
            </label>
        </div>
    );
};

export default Checkbox;