import ValidationMsg from './ValidationMsg';

const SpeciesName = () => {
    return (
        <section>
            <label for='speciesName'>Species Name : </label>
            <input id='speciesName' type='text' />
            <ValidationMsg />
        </section>
    );
}

export default SpeciesName;