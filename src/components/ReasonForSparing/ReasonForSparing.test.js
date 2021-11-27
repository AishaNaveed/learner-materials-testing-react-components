import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';


describe('Reason for sparing the species from destroying component', async () => {
    test('should render the right heading on to the page', async () => {
        render(<ReasonForSparing />);
        const headingElement = screen.getByText(/Reason/i);
        expect(headingElement).toBeInTheDocument();
    });
});