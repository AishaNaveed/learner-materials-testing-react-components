import ValidationMsg from './ValidationMsg';

const NumberOfBeings = () => {
    return (
        <>
            <section>
                <label for='numOfBeings'>Number of Beings : </label>
                <input id='numOfBeingsInput' type='text' ></input>
                <ValidationMsg />          
            </section>
        </>
    );
}

export default NumberOfBeings;