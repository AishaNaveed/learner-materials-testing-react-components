import { useState } from 'react';
import WhatIs from './WhatIs/WhatIs';
import NumberOfBeings from './NumberOfBeings/NumberOfBeings';
import PlanetName from './PlanetName/PlanetName';
import SpeciesName from './SpeciesName/SpeciesName';
import W12MHeader from './W12MHeader/W12MHeader';
import ReasonForSparing from './ReasonForSparing/ReasonForSparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('');
	const [planetName, setPlanetName] = useState('');
	const [numOfBeings, setNumOfBeings] = useState('');
	const [sparingReason, setSparingReason] = useState('');
	const [whatIs, setWhatIs] = useState('4');
	const [formData, setFormdata] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
        const formEntries = { speciesName, planetName, numOfBeings, whatIs, sparingReason };
        console.log(formEntries);
		setFormdata(`An application from planet '${planetName}' is submitted by specie '${speciesName}'. 
					There are '${numOfBeings}'s of them on planet '${planetName}' and there answer to the 
					problem was '${whatIs}'. They ask to spare them '${sparingReason}' ...NOT SURE WHY`);
	}
	
	return (
		<>
			<section className='w12MForm'>
				<W12MHeader />
				<form className="form-Field" onSubmit={handleSubmit}>
					<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />
					<PlanetName planetName={planetName} onChangePlanetName={(e) => setPlanetName(e.target.value)}/>
					<NumberOfBeings numOfBeings={numOfBeings} onChangeNumOfBeing={(e) => setNumOfBeings(e.target.value)}/>
					<WhatIs whatIs={whatIs} onChangeWhatIs={(e) => setWhatIs(e.target.value)}/>
					<ReasonForSparing sparingReason={sparingReason} onChangeSparingReason={(e) => setSparingReason(e.target.value)}/>
					<button type="submit">Submit</button>
				</form>
			</section>
			<p className="formData">{formData}</p>
		</>
	);
};

export default W12MForm;
