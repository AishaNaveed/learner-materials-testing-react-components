// import ValidationMsg from './ValidationMsg';

const WhatIs = ({whatIs, onChangeWhatIs}) => {
    return (
        <>
            <label htmlFor='whatIs'>What is 2 + 2 : </label>
            <select name="solution" id="whatIs">
                <option value={whatIs} onChange={onChangeWhatIs}>Not 4</option>
                <option value={whatIs} onChange={onChangeWhatIs}>4</option>
            </select>
            <br/><br/>
            {/* <ValidationMsg /> */}
        </>
    );
}

export default WhatIs;