import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AddCard from "./AddCard";
import BmiForm from "./BmiForm";
import axios from "axios";
import { useForm } from "./useForm";
import Bmi from "./Bmi";
import { FaRunning, FaWeight } from "react-icons/fa";
import BmiEditForm from "./BmiEditForm";

function App() {
    let props = { user_id: null };

    if (document.getElementById("app")) {
        const propsContainer = document.getElementById("app");

        props = Object.assign({}, propsContainer.dataset);
    }

    const [showBmiForm, setShowBmiForm] = useState(false);
    const [showBmiEdit, setshowBmiEdit] = useState(false);
    const [showBmiEditForm, setShowBmiEditForm] = useState(false);
    const [errors, setErrors] = useState({});
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

    const handleBmiInfo = (e) => {
        setBmiInfo({
            ...bmiInfo,
            [e.target.name]: e.target.value,
        });
    };

    const changeEntireBmiInfo = (data) => {
        setBmiInfo({
            weight: data.weight,
            height: data.height,
            bmi_number: data.bmi_number,
            measurement: data.measurement,
        });
    };

    const user_id = props.user_id;

    const handleShowBmiEditForm = () => {
        setShowBmiEditForm(!showBmiEditForm);
    };

    const handleShowForm = () => {
        setShowBmiForm(!showBmiForm);
    };

    const handleEditBmi = () => {
        setshowBmiEdit(!showBmiEdit);
    };

    const fetchBmiNum = async (object) => {
        let options = {
            method: "GET",
            url:
                `https://body-mass-index-bmi-calculator.p.rapidapi.com/` +
                object.measurement,
            params: { weight: object.weight, height: object.height },
            headers: {
                "x-rapidapi-host":
                    "body-mass-index-bmi-calculator.p.rapidapi.com",
                "x-rapidapi-key":
                    "58c19e22f2msh94fa4f654a3bdc8p1a4c6cjsnafe1cbc3d3a3",
            },
        };

        let data = await axios.request(options);
        // console.log(data);
        data = {
            height: data.data.height,
            weight: data.data.weight,
            measurement: object.measurement,
            bmi_number: data.data.bmi,
            user_id: user_id,
        };

        sendPostRequest(data).then(
            sendGetRequest().then((userData) => changeEntireBmiInfo(userData))
        );
    };

    const fetchBmiPutReq = async (object) => {
        let options = {
            method: "GET",
            url:
                `https://body-mass-index-bmi-calculator.p.rapidapi.com/` +
                object.measurement,
            params: { weight: object.weight, height: object.height },
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
            measurement: object.measurement,
            bmi_number: data.data.bmi,
        };

        sendPutRequest(data).then((response) => {
            if (response.status == 200) {
                handleShowBmiEditForm();
                handleEditBmi();
            }

            sendGetRequest().then((userData) => changeEntireBmiInfo(userData));
        });
    };

    const sendPostRequest = async (values) => {
        try {
            // http://127.0.0.1:8000/api/bmi/store"
            const resp = await axios.post(
                "http://health-calcs.online/api/bmi/store",
                values
            );
            // console.log(resp);
        } catch (err) {
            // console.log(err);
            setErrors(err.response.data.errors);
        }
    };

    const sendGetRequest = async () => {
        try {
            const resp = await axios.get(
                "http://health-calcs.online/api/bmi/" + user_id
            );

            return resp.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const sendPutRequest = async (data) => {
        try {
            const resp = await axios.put(
                "http://health-calcs.online/api/bmi/" + user_id,
                data
            );

            return resp;
        } catch (err) {
            setErrors(err.response.data.errors);
        }
    };

    useEffect(() => {
        sendGetRequest().then((userData) => changeEntireBmiInfo(userData));
    }, [bmiInfo.bmi_number]);

    return (
        <div className="flex items-center justify-center m-10">
            <div className="flex items-center  px-4 py-10 bg-cover card bg-base-200">
                <div>
                    {!isNaN(bmiInfo.bmi_number) && !showBmiEditForm ? (
                        <Bmi
                            bmiNum={bmiInfo.bmi_number}
                            showEdit={handleEditBmi}
                            showBmiEdit={showBmiEdit}
                            showBmitEditForm={handleShowBmiEditForm}
                        />
                    ) : showBmiForm && !showBmiEditForm ? (
                        <BmiForm
                            showForm={handleShowForm}
                            errors={errors}
                            fetchBmiNum={fetchBmiNum}
                            values={values}
                            handleChange={handleChange}
                        />
                    ) : showBmiEditForm ? (
                        <BmiEditForm
                            showBmitEditForm={handleShowBmiEditForm}
                            fetchBmiNum={fetchBmiNum}
                            bmiInfo={bmiInfo}
                            errors={errors}
                            handleBmiInfo={handleBmiInfo}
                            fetchBmiPutReq={fetchBmiPutReq}
                        />
                    ) : (
                        <AddCard
                            showForm={handleShowForm}
                            name="BMI"
                            text="Enter your Weight and Height to get your associated
                Body Mass Index number."
                            icon={<FaWeight />}
                        />
                    )}
                </div>

                <div>
                    <AddCard
                        text="Enter your Age to reveal your Maximum Aerobic Function heart rate (IN PRODUCTION)"
                        name="MAF"
                        icon={<FaRunning />}
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
/**
 * ToDo
 * - Add Card for BMI
 *  - impliment useSpring for bmi number
 * - Add error messages to form
 *
 *
 *
 *
 *
 */
