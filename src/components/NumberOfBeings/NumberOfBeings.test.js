import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

describe('Number of Beings component', async () => {
    test('should render the right heading on to the page', async () => {
        render(<NumberOfBeings />);
        const headingElement = screen.getByText(/Number of Beings/i);
        expect(headingElement).toBeInTheDocument();
    });
});