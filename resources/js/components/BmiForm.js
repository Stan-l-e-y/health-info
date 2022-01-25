import { FaTimes } from "react-icons/fa";

const BmiForm = ({ showForm, fetchBmiNum, values, handleChange }) => {
    return (
        <div>
            <div className="flex items-center w-full  px-4 py-10 bg-cover card bg-base-200">
                <div className=" card glass lg:card-side text-neutral-content ">
                    <div className="max-w-md card-body flex">
                        <div className="flex justify-between">
                            <h2 className="card-title">BMI Form</h2>
                            <FaTimes
                                onClick={() => showForm()}
                                className="hover:cursor-pointer"
                            />
                        </div>
                        <div>
                            <div className="form-control xs:w-69 lg:w-96 sm:w-96 w-48">
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Height
                                        </span>
                                    </label>
                                    <label className="input-group ">
                                        {values.measurement == "metric" ? (
                                            <span className="pr-9">Meters</span>
                                        ) : (
                                            <span className="pr-6">Inches</span>
                                        )}
                                        <input
                                            name="height"
                                            value={values.height}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="80"
                                            className="input input-bordered xs:w-40 sm:w-96 w-24"
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
                                        {values.measurement == "metric" ? (
                                            <span>Kilograms</span>
                                        ) : (
                                            <span>Pounds</span>
                                        )}
                                        <input
                                            name="weight"
                                            value={values.weight}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="150"
                                            className="input input-bordered xs:w-40 sm:w-96 w-24"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <select
                                        name="measurement"
                                        className="select select-bordered w-24 xs:w-40 mt-5 sm:w-96"
                                        onChange={handleChange}
                                        value={values.measurement}
                                    >
                                        <option value="imperial">
                                            Imperial
                                        </option>
                                        <option value="metric">Metric</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button
                                className="btn glass rounded-full"
                                onClick={fetchBmiNum}
                            >
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
