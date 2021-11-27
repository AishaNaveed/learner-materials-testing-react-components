import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';

const mockedFunc = jest.fn();

describe('Species Name component', () => {
    test('should render the right heading on to the page', async () => {
        render(<SpeciesName />);
        const headingElement = screen.getByText(/Species Name/i);
        expect(headingElement).toBeInTheDocument();
    });

    // test('should renders Input box on screen ', () => {
    // 	render(<SpeciesName />);
    //     const inputElement = screen.getByPlaceholderText(/Add Species Name../i);
    //     expect(inputElement).toBeInTheDocument();
    // });

    test('should render the input element after giving mock function input', async () => {
        render(<SpeciesName onChange={mockedFunc} />);
        const inputElement = screen.getByTestId("speciesName");
        expect(inputElement).toBeInTheDocument();
    });

    // test('validate user inputs, and provides error messages', async () => {
    //     render(<SpeciesName />)

    //     const labelElement = screen.getByLabelText(/Species Name/i);
    //     fireEvent.change(labelElement, { target: { value: '' } });
    //     const errorMsgElement = screen.getByText("Species name is required");
    //     expect(errorMsgElement).toBeInTheDocument();
    // });
});
/*
describe("Species Name", () => {

    test('If OnChange function is called for Input Component - SpeciesName', () => {
        const mockOnChange = jest.fn();
        const propSpecies = {
            onChangeSpeciesName: mockOnChange
        };

        render(<SpeciesName {...propSpecies} />);
        userEvent.type(screen.getByPlaceholderText('Species Name..'), 'Human');
        expect(mockOnChange).toHaveBeenCalledTimes(5);
        expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be at least three characters');
        expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be less than twenty three characters');
        expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters');
    });

    each([
        ['If Species Name has a special character give error', 'adc#$', 'Invalid characters'],
        ['If Species Name is a number give error', '123456', 'Invalid characters'],
        ['If Species Name is greter than 23 letters give error', 'aaaaaaaaaaaaaaaaaaaaaaaaa', 'Species Name needs to be less than twenty three characters'],
        ['If Species Name is less than 3 letters give error', 'ab', 'Species Name needs to be at least three characters']

    ]).test('%s', (a, b, expected) => {
        const mockOnChange = jest.fn();
        const propSpecies = {
            onChangeSpeciesName: mockOnChange
        };
        render(<SpeciesName {...propSpecies} />);
        userEvent.type(screen.getByPlaceholderText('Species Name..'), b);
        expect(screen.getByTestId('warning')).toHaveTextContent(expected);
    });
*/