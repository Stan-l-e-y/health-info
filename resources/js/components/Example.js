import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import AddCard from "./AddCard";
import BmiForm from "./BmiForm";

function App() {
    const [bmi, setBmi] = useState(false);
    const [showBmiForm, setShowBmiForm] = useState(false);

    const handleShowForm = () => {
        setShowBmiForm(!showBmiForm);
    };

    return (
        <div>
            {bmi ? (
                <h1>BMI</h1>
            ) : showBmiForm ? (
                <BmiForm showForm={handleShowForm} />
            ) : (
                // <AddCard onClick={handleShowForm} name="BMI" />
                <AddCard showForm={handleShowForm} name="BMI" />
            )}
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
