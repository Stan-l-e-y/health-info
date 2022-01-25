import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AddCard from "./AddCard";
import BmiForm from "./BmiForm";
import axios from "axios";
import { useForm } from "./useForm";

function App() {
    let props = { user_id: null };

    if (document.getElementById("app")) {
        const propsContainer = document.getElementById("app");

        props = Object.assign({}, propsContainer.dataset);
    }

    const [showBmiForm, setShowBmiForm] = useState(false);
    const [bmiInfo, setBmiInfo] = useState({
        weight: "",
        height: "",
        bmi_number: undefined,
        measurement: "",
    });
    const [values, handleChange] = useForm({
        weight: "",
        height: "",
        bmi_number: "",
        measurement: "imperial",
    });

    const user_id = props.user_id;

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

        let data = await axios.request(options);
        data = {
            height: data.data.height,
            weight: data.data.weight,
            measurement: values.measurement,
            bmi_number: data.data.bmi,
            user_id: user_id,
        };

        sendPostRequest(data);
        sendGetRequest().then((userData) =>
            setBmiInfo({
                weight: userData.weight,
                height: userData.height,
                bmi_number: userData.bmi_number,
                measurement: userData.measurement,
            })
        );
    };

    const sendPostRequest = async (values) => {
        try {
            const resp = await axios.post(
                "http://127.0.0.1:8000/api/bmi/store",
                values
            );
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const sendGetRequest = async () => {
        try {
            const resp = await axios.get(
                "http://127.0.0.1:8000/api/bmi/" + user_id
            );

            return resp.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    useEffect(() => {
        sendGetRequest().then((userData) =>
            setBmiInfo({
                weight: userData.weight,
                height: userData.height,
                bmi_number: userData.bmi_number,
                measurement: userData.measurement,
            })
        );
        console.log(bmiInfo);
        console.log(user_id);
    }, [bmiInfo.bmi_number]);

    return (
        <div className="flex items-center justify-center m-10">
            <div className="flex items-center   px-4 py-10 bg-cover card bg-base-200">
                <div>
                    {!isNaN(bmiInfo.bmi_number) ? (
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
