import { render, screen } from '@testing-library/react';
import WhatIs from './WhatIs';


describe('Reasoning answer component', async () => {
    test('should render the right heading on to the page', async () => {
        render(<WhatIs />);
        const headingElement = screen.getByText(/What is/i);
        expect(headingElement).toBeInTheDocument();
    });
});