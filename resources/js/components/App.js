import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AddCard from "./AddCard";
import BmiForm from "./BmiForm";
import axios from "axios";
import { useForm } from "./useForm";

function App() {
    // const [bmi, setBmi] = useState(false);
    // const [state, setState] = useState({ age: null, height: null, bmi: null });
    const [showBmiForm, setShowBmiForm] = useState(false);
    const [values, handleChange] = useForm({
        weight: "",
        height: "",
        bmi: "",
        measurement: "",
    });

    const handleShowForm = () => {
        setShowBmiForm(!showBmiForm);
    };

    const fetchBmiNum = async () => {
        let options = {
            method: "GET",
            url:
                `https://body-mass-index-bmi-calculator.p.rapidapi.com/` +
                values.measurement,
            params: { weight: values.weight, height: values.height },
            headers: {
                "x-rapidapi-host":
                    "body-mass-index-bmi-calculator.p.rapidapi.com",
                "x-rapidapi-key":
                    "58c19e22f2msh94fa4f654a3bdc8p1a4c6cjsnafe1cbc3d3a3",
            },
        };

        const data = await axios.request(options);
        console.log(data.data);
    };

    useEffect(() => {
        // fetchBmiNum();
    });

    return (
        <div className="flex items-center justify-center m-10">
            <div className="flex items-center   px-4 py-10 bg-cover card bg-base-200">
                <div>
                    {values.bmi ? (
                        <h1>BMI</h1>
                    ) : showBmiForm ? (
                        <BmiForm
                            showForm={handleShowForm}
                            fetchBmiNum={fetchBmiNum}
                            values={values}
                            handleChange={handleChange}
                        />
                    ) : (
                        <AddCard
                            showForm={handleShowForm}
                            name="BMI"
                            text="Enter your Age and Height to get your associated
                        Body Mass Index number."
                        />
                    )}
                </div>
                <div>
                    <AddCard
                        text="Enter your Age to reveal your Maximum Aerobic Function heart rate"
                        name="MAF"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
