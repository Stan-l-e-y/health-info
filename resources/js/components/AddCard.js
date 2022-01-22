const AddCard = ({ name, showForm }) => {
    return <div onClick={() => showForm()}>Add {name}</div>;
};

export default AddCard;
