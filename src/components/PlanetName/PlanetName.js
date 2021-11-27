// import ValidationMsg from './ValidationMsg';

const PlanetName = ({planetName, onChangePlanetName}) => {
    return (
   <>
            <label htmlFor='planetName'>Planet Name : </label>
            <input id='planetInput' type='text' value={planetName} onChange={onChangePlanetName}/>
            <br/><br/>
            {/* <ValidationMsg />   */}
     </>
    );
}

export default PlanetName;