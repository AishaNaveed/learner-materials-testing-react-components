// import ValidationMsg from './ValidationMsg';

const SpeciesName = ({speciesName, onChangeSpeciesName}) => {
    return (
        <>
            <label htmlFor='speciesName'>Species Name : </label>
            <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName}/>
            <br/><br/>
            {/* <ValidationMsg /> */}
        </>
    );
}

export default SpeciesName;