const AddCard = ({ name, showForm, text, icon }) => {
    return (
        <div>
            <div className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
                <div className="card glass lg:card-side text-neutral-content">
                    <div className="max-w-md card-body">
                        <div className="flex">
                            <h2 className="card-title">{name}</h2>
                            <div className="mt-1.5 ml-2">{icon && icon}</div>
                        </div>
                        <p>{text}</p>
                        <div className="card-actions">
                            <button
                                className="btn glass rounded-full"
                                onClick={() => showForm()}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;
