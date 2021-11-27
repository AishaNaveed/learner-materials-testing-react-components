import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

describe('Species Name component', async () => {
    test('should render the right heading on to the page', async () => {
        render(<SpeciesName />);
        const headingElement = screen.getByText(/Species Name/i);
        expect(headingElement).toBeInTheDocument();
    });
});