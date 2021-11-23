import ValidationMsg from './ValidationMsg';

const PlanetName = ({planetName, onChangePlanetName}) => {
    return (
        <section class="form-field">
            <label for='planetName'>Planet Name : </label>
            <input id='planetInput' type='text' value={planetName} onChange={onChangePlanetName}/>
            <ValidationMsg />  
        </section>
    );
}

export default PlanetName;