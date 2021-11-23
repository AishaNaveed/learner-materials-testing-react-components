import ValidationMsg from './ValidationMsg';

const ReasonForSparing = () => {
    return ( 
        <section>
            <label for='sparingHeading'>Reason For Sparing : </label>
            <textarea class="sparingText" name="sparingText" rows="5" cols="30"></textarea>
            <ValidationMsg />
        </section>
     );
}
 
export default ReasonForSparing;