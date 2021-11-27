import { useState } from 'react';
import ValidationMsg from '../ValidationMsg';

const ErrorMsgFunc = (value, id) => {
    if (id === 'planetInput') {
        if (value.trim().length <= 2 || value.trim().length >= 49) {
            return `Planet Name length should be minimum 2 characters and maximum 49 characters`;
        }
        if (/[^a-zA-Z0-9 -]/.test(value)) {
            return 'Please enter only alphabets or numbers, no special characters';
        }
    }
};

const PlanetName = ({ planetName, onChangePlanetName }) => {
    const [validMsg, setValidMsg] = useState('');
    return (
        <>
            <label htmlFor='planetName'>Planet Name : </label>
            <input id='planetInput'
                type='text'
                size="50"
                value={planetName}
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.id);
                    setValidMsg(errorMsg);
                    onChangePlanetName(e);
                }} />
            <ValidationMsg ValidMsg={validMsg}/>            
        </>
    );
}

export default PlanetName;