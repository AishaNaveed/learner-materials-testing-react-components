import ValidationMsg from './ValidationMsg';

const WhatIs = ({whatIs, onChangeWhatIs}) => {
    return (
        <section class="form-field">
            <label for='whatIs'>What is 2 + 2 : </label>
            <select name="solution" id="solutionList">
                <option value={whatIs} onChange={onChangeWhatIs}>Not 4</option>
                <option value={whatIs} onChange={onChangeWhatIs}>4</option>
            </select>
            <ValidationMsg />
        </section>
    );
}

export default WhatIs;