import { FaTimes } from "react-icons/fa";

const BmiForm = ({ showForm }) => {
    return (
        <div>
            <div className="flex items-center w-full  px-4 py-10 bg-cover card bg-base-200">
                <div className="card glass lg:card-side text-neutral-content">
                    <div className="max-w-md card-body flex">
                        <div className="flex justify-between">
                            <h2 className="card-title">BMI Form</h2>
                            <FaTimes
                                onClick={() => showForm()}
                                className="hover:cursor-pointer"
                            />
                        </div>
                        <div>
                            <div className="form-control w-96 ">
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Height
                                        </span>
                                    </label>
                                    <label className="input-group ">
                                        <span className="pr-6">Inches</span>
                                        <input
                                            type="text"
                                            placeholder="80"
                                            className="input input-bordered w-96"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Weight
                                        </span>
                                    </label>
                                    <label className="input-group">
                                        <span>Pounds</span>
                                        <input
                                            type="text"
                                            placeholder="150"
                                            className="input input-bordered w-96"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn glass rounded-full">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BmiForm;
