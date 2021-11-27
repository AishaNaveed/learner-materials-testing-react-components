import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

describe('Planet Name component', async () => {
    test('should render the right heading on to the page', async () => {
        render(<PlanetName />);
        const headingElement = screen.getByText(/Planet Name/i);
        expect(headingElement).toBeInTheDocument();
    });
});