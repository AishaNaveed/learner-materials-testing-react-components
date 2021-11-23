import ValidationMsg from './ValidationMsg';

const PlanetName = () => {
    return (
        <section>
            <label for='planetName'>Planet Name : </label>
            <input id='planetInput' type='text' />
            <ValidationMsg />  
        </section>
    );
}

export default PlanetName;