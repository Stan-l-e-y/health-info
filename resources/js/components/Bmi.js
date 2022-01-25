import { FaEllipsisH } from "react-icons/fa";
import Number from "./Number";

const Bmi = ({ bmiNum, showEdit, showBmiEdit }) => {
    return (
        <div>
            <div className=" flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
                <div className="  bg-primary hover:bg-primary card glass lg:card-side text-neutral-content">
                    <div className="max-w-md card-body">
                        <div className="flex">
                            <h2 className="card-title xs:w-69 lg:w-96 sm:w-96 w-48">
                                BODY MASS INDEX:
                            </h2>
                            <div className="relative">
                                <FaEllipsisH
                                    className="hover:cursor-pointer"
                                    onClick={() => showEdit()}
                                />
                                <div>{showBmiEdit && <div>Edit</div>}</div>
                                {/* className="p-2 shadow menu dropdown-content bg-base-100 rounded-box " */}
                            </div>
                        </div>
                        <div className="text-4xl font-extrabold">
                            <Number bmiNum={bmiNum} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bmi;
