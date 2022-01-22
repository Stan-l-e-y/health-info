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
        <div className="flex items-center justify-center m-10">
            <div className="flex items-center sm:w-6/12  px-4 py-10 bg-cover card bg-base-200">
                <div>
                    {bmi ? (
                        <h1>BMI</h1>
                    ) : showBmiForm ? (
                        <BmiForm showForm={handleShowForm} />
                    ) : (
                        // <AddCard onClick={handleShowForm} name="BMI" />
                        <AddCard
                            showForm={handleShowForm}
                            name="BMI"
                            text="Enter your Age and Height to get your associated
                        Body Mass Index number."
                        />
                    )}
                </div>
                <div>
                    <div className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
                        <div className="card glass lg:card-side text-neutral-content">
                            <div className="max-w-md card-body">
                                <h2 className="card-title">Glass</h2>
                                <p>
                                    Rerum reiciendis beatae tenetur excepturi
                                    aut pariatur est eos. Sit sit necessitatibus
                                    veritatis sed molestiae voluptates incidunt
                                    iure sapiente.
                                </p>
                                <div className="card-actions">
                                    <button className="btn glass rounded-full">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
