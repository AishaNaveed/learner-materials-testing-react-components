import { useState } from 'react';
import WhatIs from './WhatIs';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SpeciesName from './SpeciesName';
import W12MHeader from './W12MHeader';
import ReasonForSparing from './ReasonForSparing';


const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<article class="fields">
				<SpeciesName />
				<PlanetName />
				<NumberOfBeings />
				<WhatIs />
				<ReasonForSparing />
			</article>
		</section>
	);
};

export default W12MForm;
