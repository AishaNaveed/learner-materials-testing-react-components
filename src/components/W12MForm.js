import { useState } from 'react';
import WhatIs from './WhatIs';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('');
	const [planetName, setPlanetName] = useState('');
	const [numOfBeings, setNumOfBeings] = useState('');
	const [sparingReason, setSparingReason] = useState('');
	const [whatIs, setWhatIs] = useState('4');

	const handleSubmit = (e) => {
		e.preventDefault();
        const formEntries = { speciesName, planetName, numOfBeings, whatIs, sparingReason };
        console.log(formEntries);
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
		</>
	);
};

export default W12MForm;
