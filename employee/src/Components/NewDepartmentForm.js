import React, {useState} from "react";

export const NewDepartmentForm = (props) => {
const [name, setName] = useState('');
const [longevity, setLongevity] = useState(undefined);

const handleLongevityInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setLongevity(int >= 0 ? int : '');
}

const onSubmit = (e) => {
    e.preventDefault();
    if (name && longevity) {
        props.addNewDepartment({name,longevity});
        setName('');
        setLongevity('');
    } else {
        console.log('Invalid Input')
    }
};
return(
    <div>
        <h4>Add a new department</h4>
        <form onSubmit={onSubmit}>
        <input
        type='text'
        placeholder= 'name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <input
        type='text'
        placeholder= 'longevity'
        onChange={handleLongevityInput}
        value={longevity}/>
        <button type="submit">Add Department</button>
        </form>
    </div>
)
}