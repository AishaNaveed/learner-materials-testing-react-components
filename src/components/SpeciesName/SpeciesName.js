import { useState } from 'react';
import ValidationMsg from '../ValidationMsg';

 const ErrorMsgFunc = (value, id) => {
    if (id === 'speciesName') {
        if (value.trim() === '') {
            return `Species Name is required`;
        }
        if (/[^a-zA-Z -]/.test(value)) {
            return 'Please input valid characters';
        }
        if (value.trim().length <= 3 || value.trim().length >= 23) {
            return `Species Name length should be minimum 3 characters and maximum 23 characters`;
        }
    }
};

const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {
    const [validMsg, setValidMsg] = useState('');
    return (
        <>
            <label htmlFor='speciesName'>Species Name : </label>
            <input id='speciesName'
                placeholder="Add species name..."
                size="25"
                type='text'
                value={speciesName}
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.id);
                    setValidMsg(errorMsg);
                    onChangeSpeciesName(e);
                }} />
            <ValidationMsg ValidMsg={validMsg}/>
        </>
    );
}

export default SpeciesName;