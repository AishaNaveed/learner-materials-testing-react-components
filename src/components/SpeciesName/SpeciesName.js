import { useState } from 'react';
//  import ValidationMsg from './ValidationMsg';

 const ErrorMsgFunc = (value, id) => {
    if (id === 'speciesName') {
        if (value.trim() === '') {
            return `Species Name is required`;
        }
        if (/[^a-zA-Z -]/.test(value)) {
            return 'Invalid characters';
        }
        if (value.trim().length < 3) {
            return `Species Name needs to be at least three characters`;
        }
        if (value.trim().length > 23) {
            return `Species Name needs to be less than twenty three characters`;
        }
    }
};

const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {
    const [validMsg, setValidMsg] = useState('');
    return (
        <>
            <label htmlFor='speciesName'>Species Name : </label>
            <input data-testid='speciesName'
                placeholder="Add species name..."
                type='text'
                value={speciesName}
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.data-testid);
                    setValidMsg(errorMsg);
                    onChangeSpeciesName(e);
                }} />
            <br /><br />
            <div data-testid="validationMsg">
                <p>{validMsg}</p>
            </div>
            {/* <ValidationMsg ValidMsg={validMsg}/> */}
        </>
    );
}

export default SpeciesName;