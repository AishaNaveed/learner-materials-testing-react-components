// import ValidationMsg from './ValidationMsg';

const ReasonForSparing = ({ sparingReason, onChangeSparingReason }) => {
    return (
        <>
                <label htmlFor='sparingHeading'>Reason For Sparing : </label>
                <textarea id="sparingHeading" name="sparingText" rows="3" cols="30"
                    value={sparingReason} onChange={onChangeSparingReason} />
                    <br/><br/>
                {/* <ValidationMsg /> */}
        </>
    );
}

export default ReasonForSparing;