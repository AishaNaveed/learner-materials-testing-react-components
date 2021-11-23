import ValidationMsg from './ValidationMsg';

const NumberOfBeings = ({numOfBeings, onChangeNumOfBeing}) => {
    return (
        <>
            <section class="form-field">
                <label for='numOfBeings'>Number of Beings : </label>
                <input id='numOfBeingsInput' type='text' value={numOfBeings} onChange={onChangeNumOfBeing}/>
                <ValidationMsg />          
            </section>
        </>
    );
}

export default NumberOfBeings;