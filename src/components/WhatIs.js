import ValidationMsg from './ValidationMsg';

const WhatIs = () => {
    return (
        <section>
            <label for='whatIs'>What is 2 + 2 : </label>
            <select name="solution" id="solutionList">
                <option value="Not 4">Not 4</option>
                <option value="4">4</option>
            </select>
            <ValidationMsg />
        </section>
    );
}

export default WhatIs;