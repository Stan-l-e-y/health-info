import { FaEllipsisH } from "react-icons/fa";
import Number from "./Number";
import { useState } from "react";
import { useSpring, animated, useTransition, useSpringRef } from "react-spring";
import OutsideAlert from "./outSideAlert";

const Bmi = ({ bmiNum, showEdit, showBmiEdit, showBmitEditForm }) => {
    const [showBmiMessage, setShowBmiMessage] = useState(false);
    const transition = useTransition(showBmiMessage, {
        from: { x: 0, y: 50, opacity: 0, maxHeight: 0 },
        enter: { x: 0, y: 0, opacity: 1, maxHeight: 170 },
        delay: 500,
    });

    const editTransition = useTransition(showBmiEdit, {
        from: { x: -20, y: -5, opacity: 0 },
        enter: { x: -25, y: 0, opacity: 1 },
        delay: 10,
    });

    const handleBmiMessage = () => {
        setShowBmiMessage(!showBmiMessage);
    };

    const bmiMessage = () => {
        if (bmiNum < 19) {
            return " you are classified as Underweight";
        } else if (bmiNum >= 19 && bmiNum < 25) {
            return " your weight is Normal";
        } else if (bmiNum >= 25 && bmiNum < 30) {
            return " you are classified as Overweight";
        } else {
            return " you are classified as Obese";
        }
    };

    return (
        <div>
            <div className=" flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
                <div className="  bg-primary hover:bg-primary card glass lg:card-side text-neutral-content">
                    <div className="max-w-md card-body">
                        <div className="flex">
                            <h2 className="card-title xs:w-69 lg:w-96 sm:w-96 w-48">
                                BODY MASS INDEX:
                            </h2>
                            <div className="relative flex flex-col w-10 items-end">
                                <OutsideAlert
                                    showEdit={showEdit}
                                    showBmiEdit={showBmiEdit}
                                >
                                    <FaEllipsisH
                                        className="hover:cursor-pointer"
                                        onClick={() => showEdit()}
                                    />
                                </OutsideAlert>
                                {editTransition(
                                    (style, item) =>
                                        item && (
                                            <animated.span style={style}>
                                                <button
                                                    className="absolute ease-in-out duration-100  mt-1 glass border rounded-md text-extrabold text-sm p-1 "
                                                    onClick={() =>
                                                        showBmitEditForm()
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </animated.span>
                                        )
                                )}
                            </div>
                        </div>
                        <div className="text-4xl font-extrabold mb-5">
                            <Number
                                bmiNum={bmiNum}
                                showBmiMessage={handleBmiMessage}
                            />
                        </div>

                        {transition(
                            (style, item) =>
                                item && (
                                    <animated.span
                                        style={style}
                                        className=" ease-in duration-300  "
                                    >
                                        <p>
                                            According to the
                                            <a
                                                target="_blank"
                                                href="https://www.health.harvard.edu/diet-and-weight-loss/bmi-calculator"
                                                className="hover:text-gray-700 ease-in duration-300"
                                            >
                                                {" "}
                                                BMI Table
                                            </a>
                                            ,
                                            <span className="font-extrabold">
                                                {bmiMessage()}
                                            </span>
                                        </p>
                                    </animated.span>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bmi;
