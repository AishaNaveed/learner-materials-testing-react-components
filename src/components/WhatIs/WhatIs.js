import { useState } from 'react';
import ValidationMsg from './ValidationMsg';

const ErrorMsgFunc = (value, id) => {
    if (id === 'whatIs') {
        if (value === 'Not 4') {
            return `This is not the write answer, start alien attack`;
        }
    }
};


const WhatIs = ({ whatIs, onChangeWhatIs }) => {
    const [validMsg, setValidMsg] = useState('');
    return (
        <>
            <label htmlFor='whatIs'>What is 2 + 2 : </label>
            <select name="whatIs"
                id="whatIs"
                value={whatIs}
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.id);
                    setValidMsg(errorMsg);
                    onChangeWhatIs(e);
                }}>
                <option value={whatIs} onChange={onChangeWhatIs}>Not 4</option>
                <option value={whatIs} onChange={onChangeWhatIs}>4</option>
            </select>
            <br /><br />
            {/* <div data-testid="validationMsg">
                <p>{validMsg}</p>
            </div> */}
            <ValidationMsg ValidMsg={validMsg}/>
        </>
    );
}

export default WhatIs;