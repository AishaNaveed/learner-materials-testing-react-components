import { useState } from 'react';
import ValidationMsg from '../ValidationMsg';

const ErrorMsgFunc = (value, id) => {
    if (id === 'sparingHeading') {
        if (value.trim().length <= 17 || value.trim().length >= 153) {
            return `You should write a reason having at least 17 characters and maximum 153 characters`;
        }
    }
};

const ReasonForSparing = ({ sparingReason, onChangeSparingReason }) => {
    const [validMsg, setValidMsg] = useState('');
    return (
        <>
            <label htmlFor='sparingHeading'>Reason For Sparing : </label>
            <textarea id="sparingHeading" 
                name="sparingText" 
                rows="3" cols="30"
                size="155"
                value={sparingReason} 
                onChange={(e) => {
                    const errorMsg = ErrorMsgFunc(e.target.value, e.target.id);
                    setValidMsg(errorMsg);
                    onChangeSparingReason(e);
                 }} />
            <ValidationMsg ValidMsg={validMsg}/>
        </>
    );
}

export default ReasonForSparing;