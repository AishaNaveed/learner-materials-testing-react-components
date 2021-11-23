import ValidationMsg from './ValidationMsg';

const SpeciesName = ({speciesName, onChangeSpeciesName}) => {
    return (
        <section class="form-field">
            <label for='speciesName'>Species Name : </label>
            <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName}/>
            <ValidationMsg />
        </section>
    );
}

export default SpeciesName;