import { useState } from 'react';
import WhatIs from './WhatIs';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('Earth');
	const [numOfBeings, setNumOfBeings] = useState(1000000);
	const [sparingReason, setSparingReason] = useState('Humans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and large, complex brains');
	const [whatIs, setWhatIs] = useState(4);

	const handleSubmit = () => {
		console.log(speciesName);
		console.log(planetName);
		console.log(numOfBeings);
		console.log(whatIs);
		console.log(sparingReason);
	}
	
	return (
		<>
			<section className='w12MForm'>
				<W12MHeader />
				<article class="fields">
					<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />
					<PlanetName planetName={planetName} onChangePlanetName={(e) => setPlanetName(e.target.value)}/>
					<NumberOfBeings numOfBeings={numOfBeings} onChangeNumOfBeing={(e) => setNumOfBeings(e.target.value)}/>
					<WhatIs whatIs={whatIs} onChangeWhatIs={(e) => setWhatIs(e.target.value)}/>
					<ReasonForSparing sparingReason={sparingReason} onChangeSparingReason={(e) => setSparingReason(e.target.value)}/>
					<button onClick = {() => handleSubmit()}>Submit</button>
				</article>
			</section>
		</>
	);
};

export default W12MForm;
