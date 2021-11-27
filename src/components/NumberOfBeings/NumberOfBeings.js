import { useState } from 'react';
import ValidationMsg from './ValidationMsg';

const ErrorMsgFunc = (value, id) => {
    if (id === 'numOfBeings') {
        if (/[^0-9 -]/.test(value)) {
            return 'Only numbers are required';
        }
        if (value < 1000000000) {
            return `Number of Beings needs to be more than 1,000,000,000`;
        }
    }
};

const NumberOfBeings = ({ numOfBeings, onChangeNumOfBeing }) => {
    const [validMsg, setValidMsg] = useState('');
    return (
        <>
            <label htmlFor='numOfBeings'>Number of Beings : </label>
            <input id='numOfBeingsInput'
                type='text'
                value={numOfBeings}
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.id);
                    setValidMsg(errorMsg);
                    onChangeNumOfBeing(e);
                }} />
            <br /><br />
            {/* <div data-testid="validationMsg">
                <p>{validMsg}</p>
            </div> */}
            <ValidationMsg ValidMsg={validMsg}/>
        </>
    );
}

export default NumberOfBeings;