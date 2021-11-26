// import ValidationMsg from './ValidationMsg';

const NumberOfBeings = ({numOfBeings, onChangeNumOfBeing}) => {
    return (
        <>
                <label htmlFor='numOfBeings'>Number of Beings : </label>
                <input id='numOfBeingsInput' type='text' value={numOfBeings} onChange={onChangeNumOfBeing}/>
                <br/><br/>
                {/* <ValidationMsg />           */}
        </>
    );
}

export default NumberOfBeings;