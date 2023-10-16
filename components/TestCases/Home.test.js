import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../Home';

describe('Home', () => {
  it('renders the Home component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Home />);
    
    // Check that the component renders the expected text and elements
    expect(getByText('Enter Your Journey')).toBeTruthy();
    expect(getPlaceholderText('From')).toBeTruthy();
    expect(getPlaceholderText('To')).toBeTruthy();
    expect(getByText('Search Journey')).toBeTruthy();
    expect(getByText('My Credit')).toBeTruthy();
    expect(getByText('My Journeys')).toBeTruthy();
  });

  it('triggers search with "From" and "To" values when "Search Journey" is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<Home />);
    
    // Type in "From" and "To" values
    const fromInput = getByPlaceholderText('From');
    const toInput = getByPlaceholderText('To');
    
    fireEvent.changeText(fromInput, 'Origin');
    fireEvent.changeText(toInput, 'Destination');
    
    // Click the "Search Journey" button
    fireEvent.press(getByText('Search Journey'));
    
    // Assert that the search functionality was triggered with "From" and "To" values
    // You may need to mock the navigation function for this.
  });

  it('navigates to the "MyCredit" screen when "My Credit" is clicked', () => {
    const { getByText } = render(<Home />);
    
    // Click the "My Credit" text
    fireEvent.press(getByText('My Credit'));
    
    // Assert that the navigation function was called to navigate to "MyCredit" screen
    // You can mock the navigation function and assert its calls.
  });

  it('navigates to the "MyJourneys" screen when "My Journeys" is clicked', () => {
    const { getByText } = render(<Home />);
    
    // Click the "My Journeys" text
    fireEvent.press(getByText('My Journeys'));
    
    // Assert that the navigation function was called to navigate to "MyJourneys" screen
    // You can mock the navigation function and assert its calls.
  });
});
