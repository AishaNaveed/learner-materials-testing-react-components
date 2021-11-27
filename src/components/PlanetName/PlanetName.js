import { useState } from 'react';
import ValidationMsg from './ValidationMsg';

const ErrorMsgFunc = (value, id) => {
    if (id === 'planetName') {
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
                value={planetName}
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.id);
                    setValidMsg(errorMsg);
                    onChangePlanetName(e);
                }} />
            <br /><br />
            {/* <div data-testid="validationMsg">
                <p>{validMsg}</p>
            </div> */}
            <ValidationMsg ValidMsg={validMsg}/>
        </>
    );
}

export default PlanetName;