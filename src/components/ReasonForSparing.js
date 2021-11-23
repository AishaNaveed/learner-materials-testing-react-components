import ValidationMsg from './ValidationMsg';

const ReasonForSparing = ({ sparingReason, onChangeSparingReason }) => {
    return (
        <>
            <section class="form-field">
                <label for='sparingHeading'>Reason For Sparing : </label>
                <textarea class="sparingText" name="sparingText" rows="5" cols="30"
                    value={sparingReason} onChange={onChangeSparingReason} />
                <ValidationMsg />
            </section>
        </>
    );
}

export default ReasonForSparing;