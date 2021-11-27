import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

const mockedFunc = jest.fn();

describe('Species Name component', async () => {
    test('should render the right heading on to the page', async () => {
        render(<SpeciesName />);
        const headingElement = screen.getByText(/Species Name/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('should renders Input box on screen ', () => {
		render(<SpeciesName />);
        const inputElement = screen.getByPlaceholderText(/Add Species Name../i);
        expect(inputElement).toBeInTheDocument();
	});

    test('should render the input element after giving mock function input', async () => {
        render(<SpeciesName onChange={mockedFunc}/>);
        const inputElement = screen.getByTestId("speciesName");
        expect(inputElement).toBeInTheDocument();
    });

});